import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Dropdown, Avatar, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react'
import { HiBell, HiViewGrid } from 'react-icons/hi'

export default function DashboardNavbar({ onNewAudit, onToggleSidebar }) {
  return (
    <Navbar
      fluid
      className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0"
    >
      <div className="w-full p-3 pr-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={onToggleSidebar}
              className="mr-3 rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Toggle sidebar</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <NavbarBrand as={Link} href="/" className="mr-4">
              <img
                className="mr-3 h-8"
                alt="Logo"
                src="logo.png"
                width={32}
                height={32}
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Audit Studio
              </span>
            </NavbarBrand>
          </div>

          <div className="flex items-center gap-3.5">
            {/* Notifications */}
            <Dropdown
              className="rounded-xl"
              arrowIcon={false}
              inline
              label={
                <span className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Notifications</span>
                  <HiBell className="h-6 w-6" />
                </span>
              }
              theme={{ content: "py-0" }}
            >
              <div className="max-w-sm">
                <div className="block rounded-t-xl bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-600 dark:text-white">
                  Notifications
                </div>
                <div className="block rounded-b-xl border-t border-gray-100 bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:hover:underline">
                  No new notifications
                </div>
              </div>
            </Dropdown>

            {/* Apps */}
            <Dropdown
              className="rounded-xl"
              arrowIcon={false}
              inline
              label={
                <span className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Apps</span>
                  <HiViewGrid className="h-6 w-6" />
                </span>
              }
              theme={{ content: "py-0" }}
            >
              <div className="block rounded-t-xl border-b border-gray-100 bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:border-b-gray-600 dark:bg-gray-600 dark:text-white">
                Apps
              </div>
              <div className="grid grid-cols-3 gap-4 p-4">
                <Link
                  to="/"
                  className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Home
                  </div>
                </Link>
              </div>
            </Dropdown>

            {/* User Profile */}
            <div>
              <Dropdown
                className="w-56 rounded-lg"
                arrowIcon={false}
                inline
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
                  <span className="block text-sm font-bold">User Name</span>
                  <span className="block truncate text-sm">user@example.com</span>
                </DropdownHeader>
                <DropdownItem>My profile</DropdownItem>
                <DropdownItem>Account settings</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Sign out</DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
