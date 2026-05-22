"use client";

import { Avatar, Drawer, DrawerItems, Dropdown, DropdownItem, Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems, theme } from "flowbite-react";
import { useState } from "react";
import {
  HiClipboardCheck,
  HiFlag,
  HiFolder,
  HiFolderDownload,
  HiHome,
  HiMenuAlt1,
  HiPresentationChartLine,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default function SidenavWithProjectsAndTeamSwitch() {
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
        className="max-w-64 border-r px-3 dark:border-gray-800"
      >
        <DrawerItems className="h-full">
          <Sidebar
            aria-label="Sidenav with user profile"
            className="w-full [&>div]:bg-transparent [&>div]:p-0"
          >
            <SidebarItems>
              <SidebarItemGroup>
                <div>
                  <Dropdown
                    inline
                    label={
                      <div className="flex w-full items-center justify-between">
                        <Avatar
                          img="https://flowbite.com/docs/images/logo.svg"
                          rounded
                          size="sm"
                          className="text-left"
                        >
                          <div className="mb-0.5 text-base font-semibold leading-none text-gray-900 dark:text-white">
                            Flowbite
                          </div>
                          <div className="text-base text-gray-500 dark:text-gray-400">
                            Team plan
                          </div>
                        </Avatar>
                        <svg
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    }
                    theme={{
                      arrowIcon: "hidden",
                      inlineWrapper: twMerge(
                        theme.dropdown.inlineWrapper,
                        "m-1 w-[96%] rounded-lg p-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
                      ),
                      content: twMerge(theme.dropdown.content, "py-0"),
                      floating: {
                        base: twMerge(theme.dropdown.floating.base, "w-60"),
                      },
                    }}
                  >
                    <DropdownItem className="py-3">
                      <Avatar
                        img="https://themesberg.com/docs/spaces/assets/brand/themesberg.svg"
                        rounded
                        size="sm"
                        className="text-left"
                      >
                        <div className="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
                          Themesberg
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Personal plan
                        </div>
                      </Avatar>
                    </DropdownItem>
                  </Dropdown>
                </div>
                <SidebarItem href="#" icon={HiHome}>
                  Home
                </SidebarItem>
                <SidebarCollapse icon={HiClipboardCheck} label="My Tasks">
                  <SidebarItem href="#">To do</SidebarItem>
                  <SidebarItem href="#">In progress</SidebarItem>
                  <SidebarItem href="#">Completed</SidebarItem>
                </SidebarCollapse>
                <SidebarItem
                  href="#"
                  icon={HiFolderDownload}
                  label={6}
                  className="[&_span]:rounded-full"
                >
                  Inbox
                </SidebarItem>
                <SidebarItem href="#" icon={HiPresentationChartLine}>
                  Reporting
                </SidebarItem>
                <SidebarItem href="#" icon={HiFolder}>
                  Portfolios
                </SidebarItem>
                <SidebarItem href="#" icon={HiFlag}>
                  Goals
                </SidebarItem>
              </SidebarItemGroup>
              <SidebarItemGroup>
                <div className="mb-4 pl-2 text-sm text-gray-500 dark:text-gray-400">
                  <h3>Bergside projects</h3>
                </div>
                <ul className="space-y-4 pl-2">
                  <li>
                    <a
                      href="#"
                      className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 hover:underline dark:text-white"
                    >
                      <span className="h-4 w-4 rounded bg-primary-600"></span>
                      <span className="ml-3">Flowbite library</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 hover:underline dark:text-white"
                    >
                      <span className="h-4 w-4 rounded bg-teal-400"></span>
                      <span className="ml-3">Themesberg</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 hover:underline dark:text-white"
                    >
                      <span className="h-4 w-4 rounded bg-orange-300"></span>
                      <span className="ml-3">Flowbite blocks</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 hover:underline dark:text-white"
                    >
                      <span className="h-4 w-4 rounded bg-purple-500"></span>
                      <span className="ml-3">Iconscale</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 dark:text-gray-200"
                    >
                      <svg
                        className="h-4 w-4 rounded border border-gray-200 dark:border-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-3 text-gray-500 hover:underline dark:text-gray-400">
                        Add new project
                      </span>
                    </a>
                  </li>
                </ul>
              </SidebarItemGroup>
              <div className="absolute bottom-0 left-0 z-20 w-full justify-center bg-white p-4 dark:bg-gray-800">
                <ul className="mb-4 space-y-2 border-b border-gray-200 pb-4 pl-2 dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="group flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                      <span className="ml-2">Help & getting started</span>
                    </a>
                  </li>
                </ul>
                <Dropdown
                  inline
                  label={
                    <div className="flex w-full items-center justify-between">
                      <Avatar
                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        rounded
                        size="sm"
                        className="space-x-0 text-left [&_img]:mr-3"
                      >
                        <div className="mb-0.5 text-base font-semibold leading-none text-gray-900 dark:text-white">
                          Bonnie Green
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          bonnie@flowbite.com
                        </div>
                      </Avatar>
                      <svg
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  }
                  theme={{
                    arrowIcon: "hidden",
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "w-full rounded-lg p-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
                    ),
                    content: twMerge(theme.dropdown.content, "py-0"),
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "w-60"),
                    },
                  }}
                >
                  <DropdownItem className="border-b border-gray-100 py-3 dark:border-gray-600">
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      rounded
                      size="sm"
                      className="space-x-0 text-left [&_img]:mr-3"
                    >
                      <div className="mb-0.5 text-base font-semibold leading-none text-gray-900 dark:text-white">
                        Michael Gough
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        michael@flowbite.com
                      </div>
                    </Avatar>
                  </DropdownItem>
                  <DropdownItem className="py-3">
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                      rounded
                      size="sm"
                      className="space-x-0 text-left [&_img]:mr-3"
                    >
                      <div className="mb-0.5 text-base font-semibold leading-none text-gray-900 dark:text-white">
                        Roberta Casas
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        roberta@flowbite.com
                      </div>
                    </Avatar>
                  </DropdownItem>
                </Dropdown>
                <a
                  href="#"
                  className="group mt-4 flex items-center pl-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  <span className="ml-2">Invite team members</span>
                </a>
              </div>
            </SidebarItems>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
