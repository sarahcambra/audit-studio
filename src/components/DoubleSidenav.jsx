"use client";

import { Drawer, DrawerItems, Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  HiChartPie,
  HiDownload,
  HiHome,
  HiLockClosed,
  HiMenuAlt1,
  HiSearch,
  HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default function DoubleSidenav({ sidebarExpanded, onSidebarExpandedChange, onNewAudit }) {
  const [isMobile, setMobile] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(sidebarExpanded ?? true);

  function hideSidebarOnResize() {
    const isMobileNow = window.innerWidth < 768;
    setMobile(isMobileNow);
    setSidebarOpen(!isMobileNow);
  }

  useEffect(() => {
    hideSidebarOnResize();

    window.addEventListener("resize", hideSidebarOnResize);

    return () => window.removeEventListener("resize", hideSidebarOnResize);
  }, []);

  return (
    <>
      <div className="p-4">
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="rounded-md p-1 text-xl text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <span className="sr-only">Toggle sidenav</span>
          <HiMenuAlt1 />
        </button>
      </div>
      <Sidebar
        collapsed
        className={twMerge(
          "fixed top-0 z-50 hidden border-r dark:border-gray-700 lg:block [&>div]:bg-white [&>div]:py-3",
          isSidebarOpen ? "hidden lg:block" : "hidden",
        )}
      >
        <SidebarItemGroup className="[&_[role=tooltip]]:hidden [&_svg]:text-gray-400">
          <div className="mb-4 p-2">
            <a href="#">
              <img
                alt="Logo"
                height={32}
                src="logo.png"
                width={32}
              />
            </a>
          </div>
          <SidebarItem href="#" icon={HiHome} />
          <SidebarItem href="#" icon={HiUser} />
          <SidebarItem href="#" icon={HiChartPie} />
          <SidebarItem href="#" icon={HiDownload} />
          <SidebarItem href="#" icon={HiLockClosed} />
        </SidebarItemGroup>
      </Sidebar>
      <Drawer
        backdrop={isMobile}
        open={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className="w-64 border-r px-2 py-1 dark:border-gray-700 lg:left-16"
      >
        <DrawerItems className="h-full">
          <Sidebar
            aria-label="Sidebar with navigation"
            className="w-full [&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-3">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <SidebarItems className="[&_*]:font-medium">
                  <SidebarItemGroup>
                    <SidebarItem href="/">Dashboard</SidebarItem>
                    <SidebarCollapse label="Audits">
                      <SidebarItem href="/audits" className="pl-0 [&>span]:pl-12">
                        All audits
                      </SidebarItem>
                      <SidebarItem href="/audits/new" className="pl-0 [&>span]:pl-12">
                        New audit
                      </SidebarItem>
                      <SidebarItem href="/audits/projects" className="pl-0 [&>span]:pl-12">
                        By project
                      </SidebarItem>
                      <SidebarItem href="/audits/archived" className="pl-0 [&>span]:pl-12">
                        Archived
                      </SidebarItem>
                    </SidebarCollapse>
                    <SidebarCollapse label="Reports">
                      <SidebarItem href="/reports/audits" className="pl-0 [&>span]:pl-12">
                        Audit reports
                      </SidebarItem>
                      <SidebarItem href="/reports/compliance" className="pl-0 [&>span]:pl-12">
                        Compliance summary
                      </SidebarItem>
                      <SidebarItem href="/reports/export" className="pl-0 [&>span]:pl-12">
                        Export
                      </SidebarItem>
                    </SidebarCollapse>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <SidebarCollapse label="Knowledge base">
                      <SidebarItem href="/knowledge/sc-library" className="pl-0 [&>span]:pl-12">
                        SC library
                      </SidebarItem>
                      <SidebarItem href="/knowledge/patterns" className="pl-0 [&>span]:pl-12">
                        Issue patterns
                      </SidebarItem>
                      <SidebarItem href="/knowledge/fix-templates" className="pl-0 [&>span]:pl-12">
                        Fix templates
                      </SidebarItem>
                      <SidebarItem href="/knowledge/component-catalog" className="pl-0 [&>span]:pl-12">
                        Component catalog
                      </SidebarItem>
                      <SidebarItem href="/knowledge/reference-links" className="pl-0 [&>span]:pl-12">
                        Reference links
                      </SidebarItem>
                    </SidebarCollapse>
                    <SidebarCollapse label="Settings">
                      <SidebarItem href="/settings/team" className="pl-0 [&>span]:pl-12">
                        Team & users
                      </SidebarItem>
                      <SidebarItem href="/settings/branding" className="pl-0 [&>span]:pl-12">
                        Report branding
                      </SidebarItem>
                      <SidebarItem href="/settings/notifications" className="pl-0 [&>span]:pl-12">
                        Notifications
                      </SidebarItem>
                    </SidebarCollapse>
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
              <div className="absolute bottom-0 right-0 z-50 hidden justify-center space-x-4 bg-white p-4 dark:bg-gray-800 lg:flex">
                <button
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  className="inline-flex cursor-pointer justify-end rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Collapse sidebar</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="absolute bottom-4 left-20 hidden cursor-pointer rounded-full bg-white p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline-flex"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
}
