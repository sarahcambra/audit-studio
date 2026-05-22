import { Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from "flowbite-react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export function HeaderWithSubNavbar() {
  return (
    <header>
      <Navbar className="dark:bg-gray-800">
        <NavbarBrand href="https://flowbite.com">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </NavbarBrand>
        <div className="flex items-center">
          <a
            href="tel:5541251234"
            className="mr-6 hidden text-sm font-medium text-gray-900 hover:underline dark:text-white sm:inline"
          >
            (555) 412-1234
          </a>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-white sm:mr-6"
          >
            Contact us
          </a>
          <a
            href="#"
            className="hidden text-sm font-medium text-primary-600 hover:underline dark:text-white sm:inline"
          >
            Login
          </a>
        </div>
      </Navbar>
      <Navbar className="bg-gray-50 py-3 dark:bg-gray-700">
        <NavbarCollapse>
          <NavbarLink
            href="#"
            className="hover:text-gray-900 hover:underline dark:text-white"
          >
            Home
          </NavbarLink>
          <NavbarLink
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Company
          </NavbarLink>
          <NavbarLink
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Team
          </NavbarLink>
          <NavbarLink
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Features
          </NavbarLink>
          <NavbarLink
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Marketplace
          </NavbarLink>
          <NavbarLink
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Resources
          </NavbarLink>
          <NavbarLink
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Forum
          </NavbarLink>
          <NavbarLink
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Support
          </NavbarLink>
        </NavbarCollapse>
        <div className="flex items-center gap-5 lg:hidden">
          <a
            href="#"
            className="text-sm hover:underline focus:underline dark:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm hover:underline focus:underline dark:text-white"
          >
            Company
          </a>
          <a
            href="#"
            className="text-sm hover:underline focus:underline dark:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="text-sm hover:underline focus:underline dark:text-white"
          >
            Features
          </a>
          <Dropdown
            arrowIcon={false}
            color="none"
            label={<HiOutlineDotsHorizontal className="h-5 w-5" />}
            theme={{
              floating: {
                target: "w-fit items-center p-0 dark:text-white [&>span]:p-1",
              },
            }}
            className="[&_span]:py-0"
          >
            <DropdownItem>Marketplace</DropdownItem>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Resources</DropdownItem>
            <DropdownItem>Forum</DropdownItem>
            <DropdownItem>Support</DropdownItem>
          </Dropdown>
        </div>
      </Navbar>
    </header>
  );
}
