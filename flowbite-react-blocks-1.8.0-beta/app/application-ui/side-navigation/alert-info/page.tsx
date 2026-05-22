"use client";

import { Alert, Badge, Drawer, DrawerItems, Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems, theme } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiDocument,
  HiFolderDownload,
  HiLockClosed,
  HiMenuAlt1,
  HiShoppingBag,
} from "react-icons/hi";
import { HiLifebuoy, HiRectangleStack } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export default function SidenavWithAlertInfo() {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <div className="p-4">
        <button
          onClick={() => setOpen(!isOpen)}
          className="rounded-md p-1 text-xl text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <span className="sr-only">Toggle sidenav</span>
          <HiMenuAlt1 />
        </button>
      </div>
      <Drawer
        onClose={() => setOpen(false)}
        open={isOpen}
        className="max-w-64 border-r dark:border-gray-800"
      >
        <DrawerItems className="h-full">
          <Sidebar
            aria-label="Sidenav with alert info"
            className="w-full [&>div]:bg-transparent [&>div]:p-0"
          >
            <SidebarItems>
              <SidebarItemGroup>
                <Link href="#" className="mb-5 flex items-center pl-2">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-8"
                    alt="Flowbite"
                  />
                  <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                    Flowbite
                  </span>
                </Link>
                <SidebarItem href="#" icon={HiChartPie}>
                  Overview
                </SidebarItem>
                <SidebarCollapse icon={HiDocument} label="Pages">
                  <SidebarItem href="#">Settings</SidebarItem>
                  <SidebarItem href="#">Kanban</SidebarItem>
                  <SidebarItem href="#">Calendar</SidebarItem>
                </SidebarCollapse>
                <SidebarCollapse icon={HiShoppingBag} label="Sales">
                  <SidebarItem href="#">Products</SidebarItem>
                  <SidebarItem href="#">Billing</SidebarItem>
                  <SidebarItem href="#">Invoice</SidebarItem>
                </SidebarCollapse>
                <SidebarItem
                  href="#"
                  icon={HiFolderDownload}
                  label={6}
                  className="[&_span]:rounded-full"
                >
                  Messages
                </SidebarItem>
                <SidebarCollapse icon={HiLockClosed} label="Authentication">
                  <SidebarItem href="#">Sign In</SidebarItem>
                  <SidebarItem href="#">Sign Up</SidebarItem>
                  <SidebarItem href="#">Forgot Password</SidebarItem>
                </SidebarCollapse>
              </SidebarItemGroup>
              <SidebarItemGroup>
                <SidebarItem href="#" icon={HiClipboard}>
                  Docs
                </SidebarItem>
                <SidebarItem href="#" icon={HiRectangleStack}>
                  Components
                </SidebarItem>
                <SidebarItem href="#" icon={HiLifebuoy} className="mb-4">
                  Help
                </SidebarItem>
                <Alert
                  additionalContent={
                    <>
                      <div className="mb-3 mt-2 text-sm font-light text-primary-700 dark:text-primary-300">
                        Preview the new Flowbite v2.0! You can turn the new
                        features off for a limited time in your settings page.
                      </div>
                      <Link
                        href="#"
                        className="text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-300"
                      >
                        Turn new features off
                      </Link>
                    </>
                  }
                  color="info"
                  onDismiss={() => void 0}
                  rounded
                  theme={{
                    closeButton: {
                      base: twMerge(theme.alert.closeButton.base, "h-7 w-7"),
                      icon: "h-4 w-4",
                    },
                  }}
                >
                  <Badge color="purple">Beta</Badge>
                </Alert>
              </SidebarItemGroup>
            </SidebarItems>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
