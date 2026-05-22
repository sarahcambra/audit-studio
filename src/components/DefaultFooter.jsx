import { Footer, Tooltip } from "flowbite-react";

function IconFacebook(props) {
  return (
    <svg className={props.className} aria-hidden viewBox="0 0 320 512" fill="currentColor">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

function IconTwitter(props) {
  return (
    <svg className={props.className} aria-hidden viewBox="0 0 512 512" fill="currentColor">
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.263-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>
  );
}

function IconGithub(props) {
  return (
    <svg className={props.className} aria-hidden viewBox="0 0 496 512" fill="currentColor">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 316.4c0 29.8-20.9 77.6-73 77.6-14.6 0-28.6-6.9-39.8-17.9 15.9 14.9 39.8 31.9 73 31.9 54 0 73.9-41.9 73.9-77.6 0-26.9-13.9-52.9-49.9-74.9 31.9 35.9 46.9 62.9 46.9 77.9zm-162.9 77.9c32.9 0 57.9-17 73.9-31.9-11.2 11-25.2 17.9-39.8 17.9-52.1 0-73-47.8-73-77.6 0-15 15-42 46.9-77.9-36 22-49.9 48-49.9 74.9 0 35.7 19.9 77.6 73.9 77.6z" />
    </svg>
  );
}

function IconDribbble(props) {
  return (
    <svg className={props.className} aria-hidden viewBox="0 0 512 512" fill="currentColor">
      <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-14.744-42.046-31.756-76.394-41.918-103.065 54.831-21.797 118.946-27.087 141.585-21.072zm-267.878 42.53c72.087 10.096 138.029 39.771 174.927 73.829-21.086-73.551-53.893-141.022-103.065-174.927 42.046 21.086 71.927 61.084 103.065 104.065zm21.086 267.878c10.096-72.087 39.771-138.029 73.829-174.927-73.551 21.086-141.022 53.893-174.927 103.065 21.086-42.046 61.084-71.927 104.065-103.065zm267.878-42.53c-29.503-36.046-47.369-81.957-47.835-131.955 6.984 1.477 77.018 15.682 147.502 6.818 14.744 42.046 31.756 76.394 41.918 103.065-54.831 21.797-118.946 27.087-141.585 21.072z" />
    </svg>
  );
}

export function DefaultDashboardFooter() {
  return (
    <Footer container>
      <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
        &copy; {new Date().getFullYear()}&nbsp;
        <a href="/" className="hover:underline">
          AuditV2
        </a>
        . All rights reserved.
      </p>
      <div className="flex items-center justify-center space-x-1">
        <Tooltip content="Like us on Facebook" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <IconFacebook className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="Follow us on Twitter" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <IconTwitter className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="Star us on GitHub" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <IconGithub className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="Follow us on Dribbble" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <IconDribbble className="h-4 w-4" />
          </span>
        </Tooltip>
      </div>
    </Footer>
  );
}

export default DefaultDashboardFooter;
