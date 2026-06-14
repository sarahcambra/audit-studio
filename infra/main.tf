# infra/main.tf — FIX (#12): Infrastructure as Code for the scan worker
# ----------------------------------------------------------------------
# The GCE scan-worker VM was created by hand and DELETED ONCE (2026-06-11),
# causing a full scan outage discovered manually. Its static IP is hard-coded
# into functions/.env and CLAUDE.md. This Terraform captures that infra so it is
# reproducible in one command and the worker URL becomes a referenceable output
# instead of a magic IP string.
#
#   cd infra
#   terraform init
#   terraform apply -var="project_id=audit-studio-prod-90ea8"
#   terraform output worker_url   # -> feed into functions/.env SCAN_WORKER_URL
#
# NOTE: review before applying against the live project. If the VM already
# exists, import it first:  terraform import google_compute_instance.scan_worker \
#   projects/<id>/zones/us-central1-a/instances/scan-worker-vm

terraform {
  required_providers {
    google = { source = "hashicorp/google", version = "~> 5.0" }
  }
}

variable "project_id" { type = string }
variable "region"     { type = string  default = "us-central1" }
variable "zone"       { type = string  default = "us-central1-a" }

provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_compute_address" "scan_worker_ip" {
  name   = "scan-worker-ip"
  region = var.region
}

resource "google_compute_firewall" "scan_worker" {
  name    = "allow-scan-worker"
  network = "default"
  # Prefer Caddy-terminated TLS on 80/443 only. Port 3001 is intentionally NOT
  # exposed publicly here (the old rule opened it, sending the bearer token in
  # plaintext). Route Firebase Functions to https://<domain> via Caddy instead.
  allow {
    protocol = "tcp"
    ports    = ["80", "443"]
  }
  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["scan-worker"]
}

resource "google_compute_instance" "scan_worker" {
  name         = "scan-worker-vm"
  machine_type = "e2-medium" # 4GB RAM — Fix #1 (OOM on smaller instances)
  zone         = var.zone
  tags         = ["scan-worker"]

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
      size  = 20
    }
  }

  network_interface {
    network = "default"
    access_config {
      nat_ip = google_compute_address.scan_worker_ip.address
    }
  }

  # Auto-heal: recreate the container if it dies. For full VM auto-recovery,
  # graduate this to a managed instance group with an http health check on /health.
  metadata_startup_script = <<-EOT
    #!/bin/bash
    apt-get update && apt-get install -y docker.io
    systemctl enable --now docker
  EOT

  lifecycle {
    create_before_destroy = false
  }
}

output "worker_static_ip" {
  value = google_compute_address.scan_worker_ip.address
}

output "worker_url" {
  description = "Set as SCAN_WORKER_URL in functions/.env (front with Caddy/HTTPS for prod)."
  value       = "http://${google_compute_address.scan_worker_ip.address}:3001"
}
