import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  theme,
} from "flowbite-react";
import {
  ArrowRightToBracket,
  ChevronDown,
  Cog,
  User,
} from "flowbite-react-icons/outline";
import { twMerge } from "tailwind-merge";

export default function NavbarUserDropdown() {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <Avatar
            alt="User menu"
            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            rounded
            size="sm"
            status="online"
          />
          <ChevronDown className="ml-2 h-4 w-4" />
        </span>
      }
      theme={{
        content: twMerge(theme.dropdown.content, "w-56 rounded-lg"),
        floating: {
          base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
        },
      }}
    >
      <DropdownItem className="group">
        <User className="mr-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
        <span className="text-gray-900 dark:text-white">My Profile</span>
      </DropdownItem>
      <DropdownItem className="group">
        <Cog className="mr-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
        <span className="text-gray-900 dark:text-white">Settings</span>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem className="group text-red-600 hover:bg-red-50">
        <ArrowRightToBracket className="mr-2 h-4 w-4" />
        <span>Sign out</span>
      </DropdownItem>
    </Dropdown>
  );
}
