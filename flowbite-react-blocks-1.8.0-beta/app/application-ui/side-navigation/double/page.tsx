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

export default function DoubleSidenav() {
  const [isMobile, setMobile] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

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
                alt="Flowbite"
                height={32}
                src="https://flowbite.com/images/logo.svg"
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
            aria-label="Sidebar with multi-level dropdown example"
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
                    <SidebarItem href="#">Overview</SidebarItem>
                    <SidebarCollapse label="Pages">
                      <SidebarItem href="#" className="pl-0 [&>span]:pl-12">
                        Settings
                      </SidebarItem>
                      <SidebarItem href="#" className="pl-0 [&>span]:pl-12">
                        Kanban
                      </SidebarItem>
                      <SidebarItem href="#" className="pl-0 [&>span]:pl-12">
                        Calendar
                      </SidebarItem>
                    </SidebarCollapse>
                    <SidebarCollapse label="Sales">
                      <SidebarItem href="#" className="pl-0 [&>span]:pl-12">
                        Products
                      </SidebarItem>
                      <SidebarItem href="#" className="pl-0 [&>span]:pl-12">
                        Billing
                      </SidebarItem>
                      <SidebarItem href="#" className="pl-0 [&>span]:pl-12">
                        Invoice
                      </SidebarItem>
                    </SidebarCollapse>
                    <SidebarItem
                      href="#"
                      label={6}
                      className="[&_span]:rounded-full"
                    >
                      Messages
                    </SidebarItem>
                    <SidebarCollapse label="Authentication">
                      <SidebarItem href="#" className="pl-0 [&>span]:pl-12">
                        Sign In
                      </SidebarItem>
                      <SidebarItem href="#" className="pl-0 [&>span]:pl-12">
                        Sign Up
                      </SidebarItem>
                      <SidebarItem href="#" className="pl-0 [&>span]:pl-12">
                        Forgot Password
                      </SidebarItem>
                    </SidebarCollapse>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <SidebarItem href="#">Docs</SidebarItem>
                    <SidebarItem href="#">Components</SidebarItem>
                    <SidebarItem href="#">Help</SidebarItem>
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
              <div className="absolute bottom-0 right-0 z-50 hidden justify-center space-x-4 bg-white p-4 dark:bg-gray-800 lg:flex">
                <button
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  className="inline-flex cursor-pointer justify-end rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Tweaks</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
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
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </>
  );
}
