"use client";

import {
  Drawer,
  DrawerItems,
  Dropdown,
  Avatar,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  BookOpen,
  Settings,
  Bell,
  Grid3x3,
  ChevronRight,
  ChevronLeft,
  Menu,
  Search,
  Plus,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Icon-only nav button — used in the collapsed rail */
function NavIconItem({ href, icon, label, isActive }) {
  return (
    <a
      href={href}
      className={twMerge(
        "flex items-center justify-center rounded-xl p-2.5 transition-colors",
        "text-gray-400 hover:bg-gray-100 hover:text-gray-700",
        "dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-200",
        isActive && "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400"
      )}
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
    >
      {icon}
    </a>
  );
}

/** Full-width nav link — used in the expanded sidebar */
function NavLinkItem({ href, icon, label, isActive }) {
  return (
    <a
      href={href}
      className={twMerge(
        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors whitespace-nowrap",
        "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
        isActive && "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {icon}
      {label}
    </a>
  );
}

/** Collapsible nav section — used in the expanded sidebar */
function NavCollapse({ icon, label, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors whitespace-nowrap text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3">
          {icon}
          {label}
        </span>
        <ChevronRight
          className={twMerge(
            "h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-90"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={twMerge(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="ml-4 mt-0.5 border-l-2 border-gray-100 dark:border-gray-700 pl-3 pb-1 space-y-0.5">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Sub-item inside a NavCollapse */
function SubNavItem({ href, label, isActive }) {
  return (
    <a
      href={href}
      className={twMerge(
        "block rounded-lg px-3 py-2 text-sm transition-colors whitespace-nowrap",
        "text-gray-500 hover:bg-gray-100 hover:text-gray-900",
        "dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        isActive && "bg-primary-50 text-primary-700 font-medium dark:bg-primary-900/20 dark:text-primary-400"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </a>
  );
}

// ─── Sidebar content — shared between desktop panel and mobile Drawer ────────

function SidebarNav({ isActive, location }) {
  return (
    <nav className="flex-1 min-h-0 overflow-y-auto py-3 px-2 space-y-0.5" aria-label="Main navigation">
      <NavLinkItem
        href="/"
        icon={<LayoutDashboard size={18} aria-hidden="true" />}
        label="Dashboard"
        isActive={isActive("/")}
      />

      <NavCollapse
        icon={<ClipboardList size={18} aria-hidden="true" />}
        label="Audits"
        defaultOpen={location.pathname.startsWith("/audits")}
      >
        <SubNavItem href="/audits"          label="All audits"  isActive={isActive("/audits")} />
        <SubNavItem href="/audits/new"      label="New audit"   isActive={isActive("/audits/new")} />
        <SubNavItem href="/audits/projects" label="By project"  isActive={isActive("/audits/projects")} />
        <SubNavItem href="/audits/archived" label="Archived"    isActive={isActive("/audits/archived")} />
      </NavCollapse>

      <NavCollapse
        icon={<BarChart3 size={18} aria-hidden="true" />}
        label="Reports"
        defaultOpen={location.pathname.startsWith("/reports")}
      >
        <SubNavItem href="/reports/audits"     label="Audit reports"     isActive={isActive("/reports/audits")} />
        <SubNavItem href="/reports/compliance" label="Compliance summary" isActive={isActive("/reports/compliance")} />
        <SubNavItem href="/reports/export"     label="Export"            isActive={isActive("/reports/export")} />
      </NavCollapse>

      {/* Section label */}
      <div className="px-3 pt-4 pb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Resources
        </span>
      </div>

      <NavCollapse
        icon={<BookOpen size={18} aria-hidden="true" />}
        label="Knowledge base"
        defaultOpen={location.pathname.startsWith("/knowledge")}
      >
        <SubNavItem href="/knowledge/sc-library"         label="SC library"         isActive={isActive("/knowledge/sc-library")} />
        <SubNavItem href="/knowledge/patterns"           label="Issue patterns"     isActive={isActive("/knowledge/patterns")} />
        <SubNavItem href="/knowledge/fix-templates"      label="Fix templates"      isActive={isActive("/knowledge/fix-templates")} />
        <SubNavItem href="/knowledge/component-catalog"  label="Component catalog"  isActive={isActive("/knowledge/component-catalog")} />
        <SubNavItem href="/knowledge/reference-links"    label="Reference links"    isActive={isActive("/knowledge/reference-links")} />
      </NavCollapse>

      <NavCollapse
        icon={<Settings size={18} aria-hidden="true" />}
        label="Settings"
        defaultOpen={location.pathname.startsWith("/settings")}
      >
        <SubNavItem href="/settings/team"          label="Team & users"     isActive={isActive("/settings/team")} />
        <SubNavItem href="/settings/branding"      label="Report branding"  isActive={isActive("/settings/branding")} />
        <SubNavItem href="/settings/notifications" label="Notifications"    isActive={isActive("/settings/notifications")} />
      </NavCollapse>
    </nav>
  );
}

// ─── Main Shell ───────────────────────────────────────────────────────────────

export default function ApplicationShell({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setMobile] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  function handleResize() {
    const mobile = window.innerWidth < 1024;
    setMobile(mobile);
    if (mobile) setSidebarOpen(false);
    else setSidebarOpen(true);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    /*
     * Outer shell — gray page background with uniform padding.
     * This creates the visible gap around every panel (sidebar, navbar, content)
     * so they appear as floating cards, like the Nolito reference design.
     */
    <div className="flex h-screen gap-3 overflow-hidden bg-gray-100 p-3 dark:bg-gray-950">

      {/* ── Desktop sidebar ─────────────────────────────────────────────────
          Animates between:
            collapsed  →  w-[60px]  icon rail only, logo icon at top
            expanded   →  w-60      full labels + logo + "Audit Studio"
      ────────────────────────────────────────────────────────────────────── */}
      <aside
        className={twMerge(
          "hidden lg:flex flex-col flex-none",
          "rounded-2xl bg-white dark:bg-gray-800",
          "border border-gray-200 dark:border-gray-700 shadow-sm",
          "overflow-hidden transition-[width] duration-300 ease-in-out",
          isSidebarOpen ? "w-60" : "w-[60px]"
        )}
      >
        {/* Logo header */}
        <div
          className={twMerge(
            "flex h-[60px] shrink-0 items-center border-b border-gray-100 dark:border-gray-700",
            isSidebarOpen ? "gap-3 px-5" : "justify-center px-0"
          )}
        >
          <img
            src="logo.png"
            className="h-8 w-8 shrink-0"
            alt="Audit Studio"
          />
          {/* Text is present in DOM but hidden by overflow-hidden when width shrinks */}
          <span className="overflow-hidden text-base font-semibold text-gray-900 whitespace-nowrap dark:text-white">
            Audit Studio
          </span>
        </div>

        {/* Nav — icon-only when collapsed, full labels when expanded */}
        {isSidebarOpen ? (
          <SidebarNav isActive={isActive} location={location} />
        ) : (
          <nav
            className="flex-1 min-h-0 overflow-y-auto py-3 px-2 space-y-1"
            aria-label="Main navigation"
          >
            <NavIconItem href="/"          icon={<LayoutDashboard size={18} />} label="Dashboard"    isActive={isActive("/")} />
            <NavIconItem href="/audits"    icon={<ClipboardList  size={18} />} label="Audits"        isActive={isActive("/audits")} />
            <NavIconItem href="/reports"   icon={<BarChart3      size={18} />} label="Reports"       isActive={isActive("/reports")} />
            <div className="my-2 border-t border-gray-100 dark:border-gray-700" />
            <NavIconItem href="/knowledge" icon={<BookOpen       size={18} />} label="Knowledge base" isActive={isActive("/knowledge")} />
            <NavIconItem href="/settings"  icon={<Settings       size={18} />} label="Settings"      isActive={isActive("/settings")} />
          </nav>
        )}

        {/* Toggle button */}
        <div className="shrink-0 border-t border-gray-100 dark:border-gray-700 p-2">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={twMerge(
              "flex w-full items-center rounded-xl p-2.5 text-sm text-gray-400 transition-colors",
              "hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200",
              isSidebarOpen ? "gap-2 px-3" : "justify-center"
            )}
            aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isSidebarOpen ? (
              <>
                <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap text-gray-500 dark:text-gray-400">Collapse</span>
              </>
            ) : (
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </aside>

      {/* ── Right column: navbar card + scrollable content ───────────────── */}
      <div className="flex flex-1 min-w-0 flex-col gap-3">

        {/* Navbar card */}
        <header className="flex h-14 shrink-0 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Search bar — left side */}
          <div className="relative hidden sm:flex items-center">
            <Search
              className="pointer-events-none absolute left-3 h-4 w-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search..."
              className="w-56 rounded-full border-0 bg-gray-100 py-2 pl-9 pr-4 text-sm text-gray-600 placeholder-gray-400 outline-none ring-0 transition-colors focus:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:bg-gray-600"
              aria-label="Search"
            />
          </div>

          {/* Right-side controls */}
          <div className="ml-auto flex items-center gap-1">

            {/* New Audit button */}
            <button
              onClick={() => navigate('/audits/new')}
              className="flex items-center gap-1.5 rounded-xl bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-colors mr-1"
              aria-label="New audit"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Audit
            </button>

            {/* Notifications */}
            <Dropdown
              arrowIcon={false}
              inline
              className="rounded-xl"
              label={
                <span
                  className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" aria-hidden="true" />
                </span>
              }
              theme={{ content: "py-0" }}
            >
              <div className="max-w-sm">
                <div className="rounded-t-xl bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 dark:bg-gray-600 dark:text-white">
                  Notifications
                </div>
                <div className="rounded-b-xl border-t border-gray-100 bg-gray-50 py-2 text-center text-sm text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white">
                  No new notifications
                </div>
              </div>
            </Dropdown>

            {/* Apps */}
            <Dropdown
              arrowIcon={false}
              inline
              className="rounded-xl"
              label={
                <span
                  className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                  aria-label="Apps"
                >
                  <Grid3x3 className="h-5 w-5" aria-hidden="true" />
                </span>
              }
              theme={{ content: "py-0" }}
            >
              <div className="rounded-t-xl border-b border-gray-100 bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-600 dark:text-white">
                Apps
              </div>
              <div className="grid grid-cols-3 gap-4 p-4">
                <a
                  href="#"
                  className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Home</div>
                </a>
              </div>
            </Dropdown>

            {/* User */}
            <div className="ml-1">
              <Dropdown
                arrowIcon={false}
                inline
                className="w-56 rounded-xl"
                label={
                  <span>
                    <span className="sr-only">User menu</span>
                    <Avatar
                      alt="User"
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                      rounded
                      size="sm"
                    />
                  </span>
                }
              >
                <DropdownHeader className="px-4 py-3">
                  <span className="block text-sm font-semibold">User Name</span>
                  <span className="block truncate text-xs text-gray-500">user@example.com</span>
                </DropdownHeader>
                <DropdownItem>My profile</DropdownItem>
                <DropdownItem>Account settings</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Sign out</DropdownItem>
              </Dropdown>
            </div>
          </div>
        </header>

        {/* Scrollable content area */}
        <main className="flex-1 min-h-0 overflow-auto rounded-2xl">
          {children}
        </main>
      </div>

      {/* ── Mobile Drawer ────────────────────────────────────────────────────
          Only rendered on mobile. Desktop uses the <aside> above.
      ────────────────────────────────────────────────────────────────────── */}
      <Drawer
        backdrop
        open={isMobile && isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className="w-64 px-0 py-0"
      >
        <DrawerItems className="flex h-full flex-col overflow-hidden">

          {/* Logo header */}
          <div className="flex h-[60px] shrink-0 items-center gap-3 border-b border-gray-100 px-5 dark:border-gray-700">
            <img src="logo.png" className="h-8 w-8 shrink-0" alt="" aria-hidden="true" />
            <span className="text-base font-semibold text-gray-900 dark:text-white">
              Audit Studio
            </span>
          </div>

          {/* Nav */}
          <SidebarNav isActive={isActive} location={location} />

          {/* Close button */}
          <div className="shrink-0 border-t border-gray-100 dark:border-gray-700 p-3">
            <button
              onClick={() => setSidebarOpen(false)}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Close menu
            </button>
          </div>

        </DrawerItems>
      </Drawer>
    </div>
  );
}
