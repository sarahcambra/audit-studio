## Default side navigation

Use the default sidebar navigation to show a list of menu items with dropdown items and a list of options links at the bottom of the component.

```html
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
  <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <ul class="space-y-2">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span class="ml-3">Overview</span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                  </li>
              </ul>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-sales" class="hidden py-2 space-y-2">
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                      </li>
              </ul>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                  <span class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                      6   
                  </span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot Password</a>
                  </li>
              </ul>
          </li>
      </ul>
      <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Docs</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  <span class="ml-3">Components</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Help</span>
              </a>
          </li>
      </ul>
  </div>
  <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
      <a href="#" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
      </a>
      <a href="#" data-tooltip-target="tooltip-settings" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
      </a>
      <div id="tooltip-settings" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
        Settings page
          <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
        <svg aria-hidden="true" class="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg>
      </button>
      <!-- Dropdown -->
      <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown">
        <ul class="py-1" role="none">
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                  <g fill-rule="evenodd">
                    <g stroke-width="1pt">
                      <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                      <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                    </g>
                    <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
                    <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/>
                  </g>
                </svg>              
                English (US)
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                  <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
                  <path d="M0 0h512v170.7H0z"/>
                  <path fill="#d00" d="M0 170.7h512v170.6H0z"/>
                </svg>
                Deutsch
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                  <g fill-rule="evenodd" stroke-width="1pt">
                    <path fill="#fff" d="M0 0h512v512H0z"/>
                    <path fill="#009246" d="M0 0h170.7v512H0z"/>
                    <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/>
                  </g>
                </svg>              
                Italiano
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
                  <defs>
                    <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"/>
                  </defs>
                  <path fill="#de2910" d="M0 0h512v512H0z"/>
                  <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"/>
                  <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"/>
                  <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"/>
                  <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"/>
                  <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"/>
                </svg>
                中文 (繁體)
              </div>
            </a>
          </li>
        </ul>
      </div>
  </div>
</aside>
```

## Sidenav with alert info

This example can be used to show side navigation with menu items and a dismissable informational alert.

```html
<button data-drawer-target="sidebar-info" data-drawer-toggle="sidebar-info" aria-controls="sidebar-info" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-info" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <a href="https://flowbite.com" class="flex items-center pl-2 mb-5">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <ul class="space-y-2">
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span class="ml-3">Overview</span>
                </a>
            </li>
            <li>
                <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                    <li>
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                    </li>
                </ul>
            </li>
            <li>
                <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-sales" class="hidden py-2 space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                        </li>
                </ul>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                    <span class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold text-primary-800 bg-primary-100 rounded-full dark:bg-primary-200 dark:text-primary-800">
                        6   
                    </span>
                </a>
            </li>
            <li>
                <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot Password</a>
                        </li>
                </ul>
            </li>
        </ul>
        <ul class="pt-5 my-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                    <span class="ml-3">Docs</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                    <span class="ml-3">Components</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                    <span class="ml-3">Help</span>
                </a>
            </li>
        </ul>
        <div id="alert-update" class="p-4 mb-3 rounded-lg bg-primary-50 dark:bg-primary-900" role="alert">
            <div class="flex justify-between items-center mb-3">
                <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Beta</span>
                <button type="button" class="inline-flex p-1 w-6 h-6 rounded-lg text-primary-700 bg-primary-50 focus:ring-2 focus:ring-primary-400 hover:bg-primary-100 dark:bg-primary-900 dark:text-primary-300 dark:hover:bg-primary-800 dark:hover:text-primary-200" data-dismiss-target="#alert-update" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="mb-3 text-sm font-light text-primary-700 dark:text-primary-300">
                Preview the new Flowbite v2.0! You can turn the new features off for a limited time in your settings page.
            </div>
            <a href="#" class="text-sm font-medium underline text-primary-700 dark:text-primary-300 hover:no-underline">
                Turn new features off
            </a>
        </div>
    </div>
</aside>
```

## Sidenav with user profile

Use this example to show details about the currently logged-in user and menu items for website navigation.

```html
<button data-drawer-target="sidebar-user" data-drawer-toggle="sidebar-user" aria-controls="sidebar-user" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-user" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="text-center text-gray-500 dark:text-gray-400">
          <img class="mx-auto mb-4 w-20 h-20 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Avatar">
          <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Michael Gough</a>
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">name@company.com</p>
          <a href="#" class="inline-flex items-center justify-center w-full py-2.5 px-5 my-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              Logout
          </a>
          <ul class="flex justify-center mb-4 space-x-1">
              <li>
                  <a href="#" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                  </a>
              </li>
          </ul>
      </div>
      <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">About</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  <span class="ml-3">Projects</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                  <span class="ml-3">Work experience</span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-tasks" data-collapse-toggle="dropdown-tasks">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Tasks</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-tasks" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">To do</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">In progress</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Completed</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  <span class="ml-3">Contact</span>
              </a>
          </li>
      </ul>
  </div>
</aside>
```

## Sidenav with user switch

This example can be used to switch between multiple authenticated users and also allow adding new navigation menu items using the CTA button.

```html
<button data-drawer-target="sidebar-switch" data-drawer-toggle="sidebar-switch" aria-controls="sidebar-switch" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-switch" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <button id="dropdownUserNameButton" data-dropdown-toggle="dropdownUserName" class="flex justify-between items-center p-2 my-4 w-full rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" type="button">
          <span class="sr-only">Open user menu</span>
          <div class="flex items-center">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" class="mr-3 w-8 h-8 rounded-full" alt="Bonnie avatar" />
              <div class="text-left">   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Bonnie Green</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">bonnie@flowbite.com</div>
              </div>
          </div>
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <!-- Dropdown menu -->
      <div id="dropdownUserName" class="hidden z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-placement="bottom">
          <a href="#" class="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" class="mr-3 w-8 h-8 rounded-full" alt="Michael avatar" />
              <div class="text-left">   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Michael Gough</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">michael@flowbite.com</div>
              </div>
          </a>
          <a href="#" class="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" class="mr-3 w-8 h-8 rounded-full" alt="Roberta avatar" />
              <div class="text-left">   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Roberta Casas</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">roberta@flowbite.com</div>
              </div>
          </a>
      </div>
      <form class="flex items-center mb-4">   
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
              </div>
              <input type="search" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search projects" required>
          </div>
      </form>
      <ul class="space-y-1.5">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Activity</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
                  <span class="ml-3">Contacts</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Tasks</span>
              </a>
          </li>
      </ul>
      <div class="flex justify-between items-center pt-3 pl-2 mt-5 mb-2 text-sm font-medium text-gray-500 uppercase border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <h3>Collections</h3>
          <a href="#" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
      <ul class="space-y-1.5">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                  <span class="ml-3">Sales</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Design</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Fundraising</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Internal</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
                  <span class="ml-3">Customer Success</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                  <span class="ml-3">Networking</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                  <span class="ml-3">Legal</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-500 rounded-lg dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  <span class="ml-3">Add collection</span>
              </a>
          </li>
      </ul>
  </div>
</aside>
```

## Sidenav with notifications

This example can be used to show dismissable notifications at the bottom of the sidebar alongside the default navigation menu items.

```html
<button data-drawer-target="sidebar-notification" data-drawer-toggle="sidebar-notification" aria-controls="sidebar-notification" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-notification" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" class="fixed top-0 left-0 w-64 h-full" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <a href="https://flowbite.com" class="flex items-center pl-2 mb-5">
          <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </a>
      <ul class="space-y-2">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span class="ml-3">Overview</span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                  <svg  aria-hidden="true"class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                  </li>
              </ul>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                  <svg  aria-hidden="true"class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-sales" class="hidden py-2 space-y-2">
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                      </li>
              </ul>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                  <span class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold text-primary-800 bg-primary-100 rounded-full dark:bg-primary-200 dark:text-primary-800">
                      6   
                  </span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                  <svg  aria-hidden="true"class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot Password</a>
                      </li>
              </ul>
          </li>
      </ul>
      <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Docs</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  <span class="ml-3">Components</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Help</span>
              </a>
          </li>
      </ul>
  </div>
  <div class="absolute bottom-0 left-0 justify-center px-4 pb-4 w-full" sidebar-bottom-menu>
      <div id="alert-update" class="p-4 mb-3 bg-gray-50 rounded-lg dark:bg-gray-700" role="alert">
          <div class="flex justify-between items-center mb-3">
              <span class="bg-purple-100 text-purple-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-600 dark:text-purple-200">New update</span>
              <button type="button" class="inline-flex p-1 w-6 h-6 text-gray-500 bg-gray-50 rounded-lg focus:ring-2 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" data-dismiss-target="#alert-update" aria-label="Close">
                  <span class="sr-only">Dismiss</span>
                  <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
          </div>
          <div class="mb-3 text-sm text-gray-700 dark:text-gray-300">
              A new system update is available today.
          </div>
          <a href="#" class="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-500 hover:underline">
              Update now
              <svg aria-hidden="true" class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
      <div id="alert-new-feature" class="p-4 bg-gray-50 rounded-lg dark:bg-gray-700" role="alert">
          <div class="flex justify-between items-center mb-3">
              <span class="bg-primary-100 text-primary-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-600 dark:text-primary-200">New plugin</span>
              <button type="button" class="inline-flex p-1 w-6 h-6 text-gray-500 bg-gray-50 rounded-lg focus:ring-2 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" data-dismiss-target="#alert-new-feature" aria-label="Close">
                  <span class="sr-only">Dismiss</span>
                  <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
          </div>
          <div class="mb-3 text-sm text-gray-700 dark:text-gray-300">
              Flowbite Widget Generator is now ready.                
          </div>
          <a href="#" class="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
              Download
              <svg aria-hidden="true" class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
  </div>
</aside>
```

## Sidenav with projects and team switch

Use this example of a sidenav to choose between multiple teams, a default navigation menu, and the ability to add and choose between projects.

```html
<button data-drawer-target="sidebar-team-switch" data-drawer-toggle="sidebar-team-switch" aria-controls="sidebar-team-switch" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-team-switch" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <button id="dropdownCompanyNameButton" data-dropdown-toggle="dropdownCompanyName" class="flex justify-between items-center p-2 w-full rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" type="button">
          <span class="sr-only">Open user menu</span>
          <div class="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-7" alt="Flowbite Logo" />
              <div>   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Flowbite</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Team plan</div>
              </div>
          </div>
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <!-- Dropdown menu -->
      <div id="dropdownCompanyName" class="hidden z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-placement="bottom">
          <a href="#" class="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600">
              <svg aria-hidden="true" class="h-8" viewBox="0 0 54 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3_26)">
                  <path d="M53.52 2.59375L31.52 7.98375C31.3113 8.03236 31.095 8.03882 30.8838 8.00276C30.6726 7.9667 30.4707 7.88884 30.29 7.77375L19.89 0.973752C19.6999 0.850063 19.4852 0.769031 19.2608 0.736231C19.0364 0.703432 18.8076 0.719644 18.59 0.783752L0.59 6.08375C0.424945 6.12338 0.277612 6.21644 0.170912 6.34846C0.0642122 6.48048 0.00412684 6.64406 0 6.81375L0 17.5938L18.59 12.1238C18.8076 12.0596 19.0364 12.0434 19.2608 12.0762C19.4852 12.109 19.6999 12.1901 19.89 12.3138L30.29 19.1038C30.4688 19.2232 30.6707 19.3037 30.8826 19.3398C31.0946 19.376 31.3117 19.3671 31.52 19.3138L54 13.8138V2.95375C53.9974 2.85206 53.9552 2.75541 53.8823 2.68442C53.8094 2.61343 53.7117 2.57372 53.61 2.57375L53.52 2.59375Z" fill="#FF7F66"/>
                  <path d="M40.2501 28.5637L31.5201 30.6637C31.3116 30.7146 31.0949 30.7222 30.8833 30.6861C30.6717 30.65 30.4698 30.5709 30.2901 30.4537L19.8901 23.6537C19.8486 23.6243 19.8016 23.6039 19.7519 23.5935C19.7022 23.5831 19.6509 23.5831 19.6011 23.5934C19.5514 23.6037 19.5044 23.6242 19.4629 23.6535C19.4214 23.6828 19.3864 23.7203 19.3601 23.7637C19.314 23.82 19.2892 23.8908 19.2901 23.9637V34.1937C19.2897 34.3187 19.3207 34.4418 19.38 34.5519C19.4394 34.6619 19.5254 34.7553 19.6301 34.8237L30.2901 41.8237C30.4706 41.9392 30.6728 42.0165 30.8844 42.0509C31.0959 42.0853 31.3122 42.076 31.5201 42.0237L40.7501 39.8137C42.2417 39.4535 43.5696 38.6037 44.5213 37.4C45.473 36.1962 45.9937 34.7082 46.0001 33.1737V32.9637C45.9816 31.7401 45.4785 30.5738 44.6011 29.7208C43.7237 28.8677 42.5437 28.3976 41.3201 28.4137C40.959 28.4243 40.6002 28.4746 40.2501 28.5637Z" fill="#FF7F66"/>
                  <path d="M40.25 51.2438L31.52 53.3438C31.3114 53.3924 31.0951 53.3988 30.8839 53.3628C30.6727 53.3267 30.4708 53.2489 30.29 53.1338L19.89 46.3338C19.8487 46.3054 19.8022 46.2854 19.7532 46.275C19.7041 46.2647 19.6535 46.2641 19.6042 46.2734C19.555 46.2827 19.508 46.3017 19.4661 46.3292C19.4242 46.3567 19.3882 46.3923 19.36 46.4338C19.3146 46.4943 19.29 46.568 19.29 46.6438V56.8738C19.2897 56.9988 19.3206 57.1219 19.38 57.232C19.4394 57.342 19.5253 57.4354 19.63 57.5038L30.29 64.5038C30.4688 64.6232 30.6707 64.7037 30.8827 64.7399C31.0946 64.776 31.3118 64.7672 31.52 64.7138L40.75 62.4938C42.2434 62.1369 43.5732 61.2879 44.5255 60.0834C45.4778 58.879 45.9972 57.3892 46 55.8538V55.6438C45.9816 54.4202 45.4785 53.2539 44.6011 52.4009C43.7237 51.5478 42.5437 51.0777 41.32 51.0938C40.9586 51.0995 40.5992 51.1499 40.25 51.2438Z" fill="#FF7F66"/>
                  <path opacity="0.32" d="M30.8599 42.0137V30.7237C31.0776 30.7687 31.3022 30.7687 31.5199 30.7237L35.2799 29.7237L37.4799 40.5237L31.4799 41.9837C31.2777 42.0377 31.0663 42.0479 30.8599 42.0137ZM39.6799 51.3437L31.5199 53.3437C31.3022 53.3887 31.0776 53.3887 30.8599 53.3437V64.7237C31.0776 64.7687 31.3022 64.7687 31.5199 64.7237L41.8799 62.1837L39.6799 51.3437ZM30.8599 19.3437C31.0776 19.3887 31.3022 19.3887 31.5199 19.3437L33.0899 18.9637L30.8599 8.00366V19.3437Z" fill="#2A344F"/>
                  <g opacity="0.16">
                  <path opacity="0.16" d="M19.29 12.0837C19.5021 12.1241 19.7053 12.202 19.89 12.3137L30.29 19.1137C30.4617 19.2278 30.6562 19.3029 30.86 19.3337V7.99365C30.6562 7.96286 30.4617 7.88776 30.29 7.77365L19.89 0.973652C19.7053 0.862007 19.5021 0.784127 19.29 0.743652V12.0837Z" fill="#2A344F"/>
                  <path opacity="0.16" d="M30.86 53.3636C30.6574 53.3229 30.4642 53.2449 30.29 53.1336L19.89 46.3336C19.8038 46.2767 19.6985 46.2563 19.5973 46.2769C19.496 46.2975 19.4071 46.3575 19.35 46.4436C19.3107 46.5029 19.2898 46.5725 19.29 46.6436V56.8736C19.2897 56.9986 19.3206 57.1218 19.38 57.2318C19.4394 57.3418 19.5253 57.4353 19.63 57.5036L30.29 64.5036C30.4655 64.6102 30.6585 64.6847 30.86 64.7236V53.3636Z" fill="#2A344F"/><path opacity="0.16" d="M19.89 23.6537C19.8038 23.5967 19.6985 23.5763 19.5973 23.597C19.496 23.6176 19.4071 23.6775 19.35 23.7637C19.3107 23.8229 19.2898 23.8925 19.29 23.9637V34.1937C19.2897 34.3187 19.3206 34.4418 19.38 34.5519C19.4394 34.6619 19.5253 34.7553 19.63 34.8237L30.29 41.8237C30.4639 41.9334 30.6575 42.0081 30.86 42.0437V30.7237C30.6556 30.6892 30.4611 30.6107 30.29 30.4937L19.89 23.6537Z" fill="#2A344F"/></g></g><defs><clipPath id="clip0_3_26"><rect width="54" height="64" fill="white" transform="translate(0 0.723633)"/></clipPath></defs>
              </svg>                        
              <div class="ml-3">
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Themesberg</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Personal plan</div>
              </div>
          </a>
      </div>
      <ul class="mt-5 space-y-2">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  <span class="ml-3">Home</span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-tasks" data-collapse-toggle="dropdown-tasks">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">My Tasks</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-tasks" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">To do</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">In progress</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Completed</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  <span class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                      6   
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Reporting</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd"></path><path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"></path></svg>
                  <span class="ml-3">Portfolios</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Goals</span>
              </a>
          </li>
      </ul>
      <div class="pt-5 pl-2 mt-5 mb-4 text-sm text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <h3>Bergside projects</h3>
      </div>
      <ul class="pl-2 space-y-4">
          <li>
              <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group">
                  <span class="w-4 h-4 rounded bg-primary-600"></span>
                  <span class="ml-3">Flowbite library</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group">
                  <span class="w-4 h-4 bg-teal-400 rounded"></span>
                  <span class="ml-3">Themesberg</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group">
                  <span class="w-4 h-4 bg-orange-300 rounded"></span>
                  <span class="ml-3">Flowbite blocks</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group">
                  <span class="w-4 h-4 bg-purple-500 rounded"></span>
                  <span class="ml-3">Iconscale</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 dark:text-gray-200 group">
                  <svg class="w-4 h-4 rounded border border-gray-200 dark:border-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3 text-gray-500 dark:text-gray-400 hover:underline">Add new project</span>
              </a>
          </li>
      </ul>
  </div>
  <div class="absolute bottom-0 left-0 justify-center p-4 w-full bg-white dark:bg-gray-800 z-20">
      <ul class="pb-4 pl-2 mb-4 space-y-2 border-b border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  <span class="ml-2">Settings</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  <span class="ml-2">Help & getting started</span>
              </a>
          </li>
      </ul>
      <button id="dropdownUserNameButton" data-dropdown-toggle="dropdownUserName" class="flex justify-between items-center p-2 my-4 w-full rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" type="button">
          <span class="sr-only">Open user menu</span>
          <div class="flex items-center">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" class="mr-3 w-8 h-8 rounded-full" alt="Bonnie avatar" />
              <div class="text-left">   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Bonnie Green</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">name@flowbite.com</div>
              </div>
          </div>
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <!-- Dropdown menu -->
      <div id="dropdownUserName" class="hidden z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-placement="top">
          <a href="#" class="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" class="mr-3 w-8 h-8 rounded-full" alt="Micheal avatar" />
              <div class="text-left">   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Micheal Gough</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">michael@flowbite.com</div>
              </div>
          </a>
          <a href="#" class="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" class="mr-3 w-8 h-8 rounded-full" alt="Roberta avatar" />
              <div class="text-left">   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Roberta Casas</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">roberta@flowbite.com</div>
              </div>
          </a>
      </div>
      <a href="#" class="flex items-center pl-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group">
          <svg aria-hidden="true" class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
          <span class="ml-2">Invite team members</span>
      </a>
  </div>
</aside>
```

## Sidenav with search

Use this example to show a search bar and a CTA button inside the side navigation alongside the default menu items.

```html
<button data-drawer-target="sidebar-search" data-drawer-toggle="sidebar-search" aria-controls="sidebar-search" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-search" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <a href="https://flowbite.com" class="flex items-center pl-2 mb-5">
          <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </a>
      <form class="flex items-center">   
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="search" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
          </div>
      </form>
      <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span class="ml-3">Overview</span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                  </li>
              </ul>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-sales" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                  <span class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold text-primary-800 bg-primary-100 rounded-full dark:bg-primary-200 dark:text-primary-800">
                      6   
                  </span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot Password</a>
                      </li>
              </ul>
          </li>
      </ul>
      <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Docs</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  <span class="ml-3">Components</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                  <span class="ml-3">Help</span>
              </a>
          </li>
      </ul>
  </div>
  <div class="absolute bottom-0 left-0 justify-center p-4 w-full bg-white dark:bg-gray-800 z-20">
      <p class="text-sm text-gray-500 dark:text-gray-400">Space left</p>
      <div class="font-medium text-gray-900 dark:text-white">70 of 150 GB</div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-4 dark:bg-gray-700">
          <div class="bg-green-500 h-2.5 rounded-full" style="width: 50%"></div>
      </div>
      <a href="#" class="inline-flex items-center justify-center w-full py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <svg aria-hidden="true" class="mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          Upgrade to Pro
      </a>
  </div>
</aside>
```

## Sidenav with user contacts

This example can be used to show a list of user contacts for messaging alongside the navigation menu items in the sidebar.

```html
<button data-drawer-target="sidebar-users" data-drawer-toggle="sidebar-users" aria-controls="sidebar-users" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-users" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <a href="https://flowbite.com" class="flex items-center pl-2 mb-5">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <ul class="space-y-2">
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span class="ml-3">Overview</span>
                </a>
            </li>
            <li>
                <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                    <li>
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                    </li>
                </ul>
            </li>
            <li>
                <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-sales" class="hidden py-2 space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                        </li>
                </ul>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                    <span class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                        6   
                    </span>
                </a>
            </li>
            <li>
                <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot Password</a>
                        </li>
                </ul>
            </li>
        </ul>
        <div class="pt-5 pl-2 mt-5 mb-4 text-sm font-medium text-gray-500 uppercase border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
            Active contacts
        </div>
        <ul class="pl-2 space-y-4 dark:border-gray-700">
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="jese avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Jese Leos
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="bonnie avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Bonnie Green
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-red-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Joseph McFall
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Lana avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-red-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Lana Byrd
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Leslie avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Leslie Livingston
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="Thomas avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Thomas Lean
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="Robert avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-red-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Robert Brown
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Micheal Gough
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Roberta Casas
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
                    <div class="relative mr-2.5">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="Neil avatar">
                        <span class="absolute top-0 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    Neil Sims
                </a>
            </li>
        </ul>
    </div>
    <div class="hidden absolute bottom-0 left-0 z-20 justify-center p-4 space-x-4 w-full bg-white dark:bg-gray-800 lg:flex">
        <a href="#" class="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded cursor-pointer hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
            Settings
        </a>
        <a href="#" data-tooltip-target="tooltip-settings" class="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded cursor-pointer hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            Help
        </a>
    </div>
</aside>
```

## Double sidenav

This example can be used to show a double-side nav with a collapsable sidebar with menu items and dropdowns.

```html
<button data-drawer-target="sidebar-double" data-drawer-toggle="sidebar-double" aria-controls="sidebar-double" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-double" class="flex z-40 fixed top-0 left-0 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div class="overflow-y-auto z-30 py-5 px-3 w-16 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img src="https://flowbite.com/docs/images/logo.svg" class="pl-2 mb-6 h-7" alt="Flowbite Logo" />
      </a>
      <ul class="space-y-2">
          <li>
              <a href="#" class="flex items-center p-2 text-gray-400 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-gray-400 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-gray-400 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-gray-400 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-gray-400 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
              </a>
          </li>
      </ul>
  </div>
  <div id="secondary-sidenav" class="overflow-y-auto relative py-5 px-3 w-64 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <ul class="space-y-2">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="ml-3">Overview</span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                  </li>
              </ul>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-sales" class="hidden py-2 space-y-2">
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                      </li>
              </ul>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                  <span class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                      6   
                  </span>
              </a>
          </li>
          <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot Password</a>
                  </li>
              </ul>
          </li>
      </ul>
      <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <span class="ml-3">Docs</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <span class="ml-3">Components</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <span class="ml-3">Help</span>
              </a>
          </li>
      </ul>
      <div class="flex absolute right-2 bottom-2 z-20 justify-end w-full bg-white dark:bg-gray-800">
          <button id="show-secondary-sidenav-button" aria-controls="secondary-sidenav" type="button" class="inline-flex p-2 text-gray-500 rounded-full cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
      </div>
  </div>
  <button id="hide-secondary-sidenav-button" aria-controls="secondary-sidenav" type="button" class="inline-flex absolute bottom-2 left-20 p-2 text-gray-500 rounded-full cursor-pointer dark:text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-900 dark:hover:text-white bg-white">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
  </button>
</aside>
```

## Secondary sidenav with user contacts

This example can be used as a secondary sidenav on the right side of the page by showing a list of active and inactive user contacts and group messaging.

```html
<button data-drawer-target="sidebar-contacts" data-drawer-toggle="sidebar-contacts" data-drawer-placement="right" aria-controls="sidebar-contacts" type="button" class="flex items-center p-2 mt-2 mr-3 ml-auto text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-contacts" class="fixed z-40 top-0 right-0 w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 h-full bg-white border-l border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-between items-center mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <h3 class="uppercase">Contacts</h3>
          <div class="flex items-center space-x-1">
              <a href="#" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  <span class="sr-only">Video call</span>
              </a>
              <a href="#" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Search contacts</span>
              </a>
              <button id="dropdownDefault" data-dropdown-toggle="dropdown" type="button" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  <span class="sr-only">Settings</span>
              </button>
              <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
      <ul class="pb-5 space-y-4 border-b border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="jese avatar">
                      <span class="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Jese Leos
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="bonnie avatar">
                      <span class="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Bonnie Green
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph avatar">
                      <span class="absolute w-3 h-3 bg-red-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Joseph McFall
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Lana avatar">
                      <span class="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Lana Byrd
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Leslie avatar">
                      <span class="absolute w-3 h-3 bg-red-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Leslie Livingston
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="Thomas avatar">
                      <span class="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Thomas Lean
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="Robert avatar">
                      <span class="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Robert Brown
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal avatar">
                      <span class="absolute w-3 h-3 bg-red-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Micheal Gough
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta avatar">
                      <span class="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Roberta Casas
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="Neil avatar">
                      <span class="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Neil Sims
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph avatar">
                      <span class="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Joseph Mcfall
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="relative mr-2.5">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Karen avatar">
                      <span class="absolute w-3 h-3 bg-red-400 border-2 border-white rounded-full -top-0.5 left-5 dark:border-gray-800"></span>
                  </div>
                  Karen Nelson Sims
              </a>
          </li>
      </ul>
      <div class="flex justify-between items-center pt-5 mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <h3 class="uppercase">Group conversations</h3>
          <a href="#" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span class="sr-only">Create new group</span>
          </a>
      </div>
      <ul class="space-y-4">
          <li>
              <a href="#" class="flex items-center space-x-2 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="flex -space-x-5">
                      <img class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese avatar">
                      <img class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie avatar">
                  </div>
                  <div>
                      <div class="font-medium leading-tight text-gray-900 dark:text-white">Business Group</div>
                      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Bonnie: Wait! What test?</span>
                  </div>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center space-x-2 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <div class="flex -space-x-5">
                      <img class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese avatar">
                      <img class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal avatar">
                  </div>
                  <div>
                      <div class="font-medium leading-tight text-gray-900 dark:text-white">Funny Week</div>
                      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Jese: Beautiful day!</span>
                  </div>
              </a>
          </li>
      </ul>
  </div>
</aside>
```

## Crypto sidenav

Use this example to show a list of cryptocurrencies in a list in the sidenav showing the coin logo, name, ticker, price, and market movement.

```html
<button data-drawer-target="sidebar-crypto" data-drawer-toggle="sidebar-crypto" data-drawer-placement="right" aria-controls="sidebar-crypto" type="button" class="flex items-center p-2 mt-2 mr-3 ml-auto text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-crypto" class="fixed z-40 top-0 right-0 w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-between items-center mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <h3>Market Cap</h3>
          <button id="dropdownMarketCapButton" data-dropdown-toggle="dropdownMarketCap" type="button" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              <span class="sr-only">Sort crypto currency</span>
          </button>
          <div id="dropdownMarketCap" class="hidden z-10 w-48 bg-white rounded shadow dark:bg-gray-700 ">
              <p class="p-3 pb-1 text-sm text-gray-500 dark:text-gray-400">Sort by:</p>
              <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMarketCapButton">
                <li>
                  <div class="flex items-center">
                    <input id="checkbox-market-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="checkbox-market-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Market cap</label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                      <input checked id="checkbox-market-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="checkbox-market-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                    </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <input id="checkbox-market-3" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="checkbox-market-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Volume</label>
                  </div>
                </li>
              </ul>
          </div>
      </div>
      <ul class="pb-4 space-y-4 dark:border-gray-700">
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.6398 14.9029C22.037 21.3315 15.5255 25.2435 9.09612 23.6408C2.66975 22.038 -1.24263 15.5265 0.360499 9.09825C1.9625 2.66888 8.47362 -1.24387 14.9011 0.358877C21.3301 1.96163 25.2421 8.47388 23.6394 14.9029H23.6398Z" fill="#F7931A"/>
                          <path d="M17.291 10.2904C17.5295 8.69363 16.3137 7.83525 14.6513 7.26263L15.1906 5.09963L13.8736 4.7715L13.3486 6.8775C13.0028 6.79125 12.6473 6.70988 12.2941 6.62925L12.8228 4.50938L11.507 4.18125L10.9673 6.3435C10.6808 6.27825 10.3996 6.21375 10.1266 6.14588L10.1281 6.13913L8.31233 5.68575L7.96208 7.092C7.96208 7.092 8.93896 7.31588 8.91833 7.32975C9.45158 7.46288 9.54833 7.81575 9.53183 8.0955L8.91758 10.5596C8.95433 10.569 9.00196 10.5825 9.05446 10.6035L8.91571 10.569L8.05433 14.0209C7.98908 14.1829 7.82371 14.4259 7.45096 14.3336C7.46408 14.3528 6.49396 14.0948 6.49396 14.0948L5.84033 15.6023L7.55408 16.0294C7.87283 16.1093 8.18521 16.1929 8.49233 16.2716L7.94746 18.4598L9.26258 18.7879L9.80258 16.6234C10.1615 16.7209 10.5102 16.8109 10.8515 16.8956L10.3137 19.05L11.6303 19.3781L12.1752 17.1945C14.4203 17.6194 16.109 17.448 16.8188 15.4178C17.3915 13.7828 16.7907 12.8396 15.6095 12.2243C16.4697 12.0251 17.1177 11.4593 17.2906 10.2904H17.291ZM14.2823 14.5088C13.8751 16.1438 11.1226 15.2603 10.2297 15.0383L10.9527 12.1399C11.8452 12.3626 14.7068 12.8036 14.2827 14.5088H14.2823ZM14.6892 10.2668C14.318 11.754 12.0267 10.9984 11.2831 10.8131L11.9386 8.18438C12.6822 8.36963 15.0762 8.71538 14.6892 10.2668V10.2668Z" fill="white"/>
                      </svg>
                      <div class="font-medium">Bitcoin</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Btc</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      36,988
                      <span class="ml-1 text-green-400">3%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.99998 0L7.83545 0.545625V16.4184L7.99998 16.5764L15.3645 12.2236L7.99998 0Z" fill="#343434"/><path d="M8 0L0.628906 12.2236L8 16.5764V8.87672V0Z" fill="#8C8C8C"/><path d="M8.00008 17.9705L7.9082 18.082V23.737L8.00008 24L15.3712 13.6177L8.00008 17.9705Z" fill="#3C3C3B"/><path d="M8 24V17.9705L0.628906 13.6177L8 24Z" fill="#8C8C8C"/><path d="M8 16.5764L15.3645 12.2236L8 8.87672V16.5764Z" fill="#141414"/><path d="M0.628906 12.2236L8 16.5764V8.87672L0.628906 12.2236Z" fill="#393939"/>
                      </svg>
                      <div class="font-medium">Ethereum</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Eth</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      2,515
                      <span class="ml-1 text-green-400">1%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0C18.6267 0 24 5.37333 24 12C24 18.6267 18.6267 24 12 24C5.37333 24 0 18.63 0 12C0 5.37 5.37333 0 12 0Z" fill="#26A17B"/>
                          <path d="M13.6896 10.662V8.87537H17.7729V6.15536H6.65627V8.87537H10.7396V10.662C7.42294 10.8154 4.92627 11.472 4.92627 12.2587C4.92627 13.0454 7.42294 13.702 10.7396 13.8554V19.572H13.6929V13.8554C17.0063 13.702 19.4963 13.0454 19.4963 12.2587C19.4929 11.472 17.0029 10.8154 13.6896 10.662ZM13.6929 13.372C13.6096 13.3754 13.1829 13.402 12.2296 13.402C11.4663 13.402 10.9329 13.382 10.7429 13.372V13.3754C7.81294 13.2454 5.62294 12.7354 5.62294 12.1254C5.62294 11.5154 7.8096 11.0054 10.7429 10.8754V12.862C10.9363 12.8754 11.4829 12.9087 12.2429 12.9087C13.1529 12.9087 13.6096 12.872 13.6963 12.862V10.8687C16.6229 10.9987 18.8063 11.5087 18.8063 12.1187C18.7996 12.7287 16.6163 13.2387 13.6929 13.372" fill="white"/>
                      </svg>
                      <div class="font-medium">Tether</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Usdt</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      1.00
                      <span class="ml-1 text-red-500">-4%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.34149 10.0845L12.0027 5.42516L16.6659 10.0883L19.3766 7.37572L12.0027 0L4.62891 7.37383L7.34149 10.0845Z" fill="#F3BA2F"/><path d="M0 12.0009L2.71069 9.28836L5.42327 12.0009L2.71069 14.7116L0 12.0009Z" fill="#F3BA2F"/><path d="M7.34149 13.9155L12.0027 18.5767L16.6659 13.9136L19.3785 16.6224L12.0046 23.9981L4.62891 16.6281L7.34149 13.9155Z" fill="#F3BA2F"/><path d="M18.5767 12.0009L21.2873 9.28836L23.9999 11.999L21.2873 14.7135L18.5767 12.0009Z" fill="#F3BA2F"/><path d="M14.7534 11.999L12.0029 9.24666L9.96897 11.2806L9.73392 11.5138L9.25244 11.9953L12.0029 14.7439L14.7534 12.0009V11.999Z" fill="#F3BA2F"/>
                      </svg> 
                      <div class="font-medium">Binance</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Bnb</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      357.37
                      <span class="ml-1 text-green-400">9%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.89841 14.9515C4.04324 14.8066 4.24239 14.7221 4.4536 14.7221H23.6077C23.9578 14.7221 24.1328 15.1446 23.8853 15.392L20.1016 19.1757C19.9567 19.3206 19.7576 19.4051 19.5464 19.4051H0.392251C0.0422387 19.4051 -0.132768 18.9826 0.114655 18.7352L3.89841 14.9515Z" fill="url(#paint0_linear_13778_78120)"/>
                          <path d="M3.89841 0.824228C4.04928 0.679395 4.24842 0.59491 4.4536 0.59491H23.6077C23.9578 0.59491 24.1328 1.01734 23.8853 1.26476L20.1016 5.04852C19.9567 5.19335 19.7576 5.27784 19.5464 5.27784H0.392251C0.0422387 5.27784 -0.132768 4.85541 0.114655 4.60798L3.89841 0.824228Z" fill="url(#paint1_linear_13778_78120)"/>
                          <path d="M20.1016 7.84257C19.9567 7.69774 19.7576 7.61325 19.5464 7.61325H0.392251C0.0422387 7.61325 -0.132768 8.03568 0.114655 8.2831L3.89841 12.0669C4.04324 12.2117 4.24239 12.2962 4.4536 12.2962H23.6077C23.9578 12.2962 24.1328 11.8737 23.8853 11.6263L20.1016 7.84257Z" fill="url(#paint2_linear_13778_78120)"/><defs><linearGradient id="paint0_linear_13778_78120" x1="21.778" y1="-1.66541" x2="8.52178" y2="23.7255" gradientUnits="userSpaceOnUse"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient><linearGradient id="paint1_linear_13778_78120" x1="15.9816" y1="-4.69157" x2="2.72545" y2="20.6994" gradientUnits="userSpaceOnUse"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient><linearGradient id="paint2_linear_13778_78120" x1="18.8614" y1="-3.18813" x2="5.60516" y2="22.2028" gradientUnits="userSpaceOnUse"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient></defs>
                      </svg>
                      <div class="font-medium">Solana</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Sol</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      34.67
                      <span class="ml-1 text-green-400">5%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2906 22.3645C11.3115 21.9979 11.6256 21.7177 11.9921 21.7386C12.1682 21.7486 12.3331 21.8282 12.4505 21.9598C12.5679 22.0915 12.6282 22.2644 12.6181 22.4405C12.597 22.807 12.2829 23.0871 11.9163 23.0661C11.5498 23.0451 11.2697 22.731 11.2906 22.3645ZM5.84537 21.6451C6.00377 21.4038 6.32777 21.3365 6.5691 21.4949C6.68504 21.571 6.766 21.69 6.79415 21.8258C6.8223 21.9616 6.79534 22.103 6.71919 22.2189C6.56071 22.4601 6.23669 22.5272 5.99542 22.3688C5.75415 22.2104 5.68697 21.8864 5.84537 21.6451ZM17.5246 21.4401C17.6483 21.3775 17.7919 21.3667 17.9236 21.4101C18.0553 21.4535 18.1643 21.5476 18.2265 21.6715C18.3218 21.8602 18.2939 22.0878 18.1559 22.248C18.0179 22.4082 17.797 22.4695 17.5962 22.4033C17.3954 22.3372 17.2543 22.1565 17.2386 21.9457C17.2229 21.7348 17.3358 21.5353 17.5246 21.4401ZM7.10762 18.879C7.35169 18.5061 7.85172 18.4017 8.2246 18.6456C8.59741 18.8901 8.70172 19.3903 8.4577 19.7634C8.21339 20.1361 7.71329 20.2402 7.34056 19.996C6.96784 19.7518 6.86356 19.2518 7.10762 18.879ZM15.885 18.5812C16.0757 18.4839 16.2972 18.4665 16.5008 18.5327C16.7043 18.599 16.8732 18.7435 16.9701 18.9344C17.1187 19.2256 17.0772 19.5776 16.8649 19.8263C16.6526 20.0749 16.3114 20.171 16.0005 20.0699C15.6896 19.9687 15.4704 19.6901 15.4451 19.3641C15.4204 19.0468 15.5844 18.7454 15.8622 18.5932L15.885 18.5812ZM11.0871 18.0882C11.2552 17.7423 11.6153 17.5319 11.9992 17.5552C12.5216 17.5865 12.9202 18.0348 12.89 18.5573C12.8683 18.9413 12.6171 19.2743 12.2539 19.4007C11.8907 19.5272 11.487 19.4222 11.2315 19.1347C10.976 18.8473 10.9189 18.4341 11.0871 18.0882ZM2.68417 16.6175C2.84163 16.538 3.02427 16.5242 3.19187 16.5794C3.35946 16.6345 3.49826 16.754 3.5777 16.9116C3.743 17.2393 3.61133 17.6391 3.28359 17.8045C2.95585 17.9699 2.55608 17.8383 2.39059 17.5106C2.22848 17.1896 2.35128 16.7994 2.66435 16.628L2.68417 16.6175ZM20.4821 16.8066C20.6833 16.4996 21.0953 16.4137 21.4025 16.6149C21.55 16.7115 21.6531 16.8629 21.6891 17.0356C21.725 17.2084 21.6908 17.3883 21.594 17.5358C21.3927 17.8427 20.9806 17.9283 20.6736 17.727C20.3666 17.5257 20.2809 17.1137 20.4821 16.8066ZM9.33451 13.858C9.98541 13.5067 10.7918 13.6422 11.2921 14.187C11.7924 14.7318 11.8589 15.5468 11.4535 16.1655C11.1557 16.6226 10.6464 16.8975 10.1008 16.8957C9.36116 16.8951 8.71629 16.3923 8.53535 15.6751C8.35441 14.9579 8.6836 14.2094 9.33451 13.858ZM13.4166 13.7365C14.174 13.4927 14.9961 13.8366 15.3543 14.547C15.7532 15.343 15.4335 16.3117 14.6391 16.7138C14.4136 16.8282 14.1645 16.8886 13.9116 16.8904C13.116 16.8904 12.4388 16.3111 12.3154 15.5251C12.192 14.7391 12.6592 13.9803 13.4166 13.7365ZM5.63598 14.6337C5.88671 14.3425 6.2882 14.231 6.6532 14.3512C7.01819 14.4715 7.27481 14.7997 7.30337 15.183C7.33192 15.5662 7.1268 15.9289 6.78365 16.1019C6.31527 16.338 5.74414 16.1499 5.5078 15.6816C5.33466 15.3385 5.38525 14.9249 5.63598 14.6337ZM16.8624 14.7069C17.1503 14.2682 17.7393 14.1461 18.178 14.434C18.6157 14.7226 18.7377 15.3108 18.4508 15.7496C18.1628 16.1882 17.5738 16.3104 17.1352 16.0224C16.6966 15.7345 16.5745 15.1455 16.8624 14.7069ZM6.57174 11.8965C6.62224 11.0178 7.36664 10.3412 8.24609 10.3746C9.12555 10.4079 9.81656 11.139 9.80036 12.0189C9.78435 12.889 9.08276 13.5881 8.21624 13.6046L8.18664 13.6049H8.09834C7.21599 13.5534 6.53993 12.8045 6.57473 11.9249L6.57616 11.8956L6.57174 11.8965ZM14.1946 11.8784C14.2458 10.9872 15.0097 10.3063 15.9009 10.3575C16.3284 10.3795 16.7293 10.5722 17.0134 10.8926C17.4376 11.3675 17.5432 12.0474 17.2832 12.6287C17.0276 13.2 16.4657 13.5714 15.8419 13.5843L15.809 13.5846H15.7154C14.8243 13.5334 14.1434 12.7695 14.1946 11.8784ZM2.72741 11.9519C2.75267 11.507 3.13371 11.1668 3.57858 11.1919C4.02367 11.2175 4.36389 11.5988 4.33879 12.0439C4.31322 12.4888 3.93195 12.8287 3.48709 12.8033C3.04223 12.7779 2.70215 12.3967 2.72741 11.9519ZM19.6604 11.9153C19.6858 11.4705 20.0669 11.1304 20.5118 11.1557C20.9567 11.1809 21.2969 11.562 21.2718 12.0068C21.2462 12.4519 20.8649 12.7921 20.4197 12.767C19.9749 12.7415 19.6349 12.3602 19.6604 11.9153ZM0.531445 11.4852L0.550991 11.4859C0.689391 11.4934 0.819093 11.5558 0.911392 11.6592C1.00369 11.7626 1.05098 11.8985 1.04279 12.0369C1.02625 12.3245 0.779764 12.5443 0.492143 12.5279C0.204522 12.5115 -0.0153995 12.2651 0.000845007 11.9775C0.0167203 11.6964 0.252278 11.4798 0.531445 11.4852ZM23.4856 11.4312L23.5074 11.432C23.7953 11.4491 24.0152 11.6959 23.9992 11.9839C23.987 12.1949 23.849 12.3779 23.6493 12.4475C23.4497 12.517 23.2278 12.4595 23.0871 12.3016C22.9465 12.1438 22.9147 11.9168 23.0067 11.7264C23.0955 11.5426 23.2828 11.428 23.4856 11.4312ZM10.0867 7.07117C10.6966 7.06829 11.2557 7.41008 11.5312 7.95415C11.785 8.45537 11.7603 9.05239 11.4661 9.53099C11.1719 10.0096 10.6503 10.3011 10.0885 10.301C9.47722 10.3029 8.91761 9.95849 8.644 9.41188C8.3932 8.91116 8.4194 8.31632 8.71324 7.83959C9.00708 7.36286 9.52671 7.07216 10.0867 7.07117ZM13.8984 7.05973C14.638 7.06068 15.2825 7.56368 15.4631 8.2809C15.6438 8.99811 15.3144 9.7464 14.6634 10.0976C14.0125 10.4487 13.2062 10.3131 12.7061 9.76824C12.2059 9.22343 12.1395 8.40854 12.5448 7.78992C12.844 7.33388 13.3529 7.05935 13.8984 7.05973ZM5.54754 8.20843C5.83524 7.76969 6.42413 7.64723 6.86289 7.93489C7.30166 8.22256 7.42418 8.81143 7.13655 9.25023C6.84893 9.68902 6.26007 9.81159 5.82125 9.52401C5.61028 9.38603 5.46286 9.16979 5.41151 8.92299C5.36017 8.67619 5.4091 8.41911 5.54754 8.20843ZM17.2164 7.85614C17.4414 7.74256 17.7024 7.72313 17.9417 7.80214C18.181 7.88114 18.3791 8.05209 18.4923 8.2773C18.7283 8.74592 18.5397 9.31713 18.0711 9.55315C17.6025 9.78916 17.0313 9.6006 16.7953 9.13198C16.5593 8.66337 16.7478 8.09215 17.2164 7.85614ZM2.40516 6.42313C2.55264 6.19817 2.82114 6.08425 3.0854 6.13451C3.34966 6.18477 3.55759 6.38931 3.61219 6.6527C3.66679 6.91609 3.5573 7.18643 3.33479 7.3376C3.11229 7.48876 2.82063 7.49095 2.59587 7.34315C2.28938 7.1416 2.20404 6.7299 2.40516 6.42313ZM20.7157 6.15398C21.0435 5.98893 21.4431 6.12081 21.6083 6.44859C21.7735 6.77637 21.6419 7.17602 21.3142 7.34139C20.986 7.50646 20.5861 7.37449 20.4206 7.04649C20.2557 6.71854 20.3878 6.31903 20.7157 6.15398ZM11.0359 5.40069C11.0659 4.87703 11.5147 4.47682 12.0384 4.50665C12.5621 4.53649 12.9625 4.98507 12.9329 5.50876C12.9033 6.03245 12.4549 6.43307 11.9312 6.40371C11.407 6.37383 11.0063 5.92485 11.0359 5.40069ZM7.38679 3.93563C7.78475 3.73512 8.26991 3.89513 8.47051 4.29304C8.67111 4.69096 8.51122 5.17615 8.11335 5.37685C7.92217 5.47329 7.70049 5.48979 7.49713 5.42273C7.29377 5.35566 7.12541 5.21052 7.02911 5.01926C6.8287 4.62125 6.98882 4.13613 7.38679 3.93563ZM15.5389 4.1946C15.7829 3.8212 16.2834 3.71629 16.6569 3.96024C17.0304 4.20419 17.1355 4.70466 16.8916 5.07821C16.6478 5.45176 16.1473 5.55699 15.7737 5.31328C15.594 5.1963 15.4682 5.01258 15.4241 4.80269C15.38 4.59279 15.4213 4.37399 15.5389 4.1946ZM5.9996 1.58621C6.25669 1.45656 6.57022 1.55924 6.70081 1.81585C6.8314 2.07247 6.72987 2.38637 6.47374 2.5179C6.34949 2.58143 6.20502 2.59274 6.0724 2.54931C5.93977 2.50588 5.82998 2.4113 5.76739 2.28657C5.63868 2.029 5.74251 1.71586 5.9996 1.58621ZM17.2791 1.74003C17.3948 1.56301 17.6058 1.47315 17.8136 1.51237C18.0214 1.55159 18.1851 1.71216 18.2283 1.91917C18.2716 2.12618 18.1858 2.33884 18.011 2.45793C17.8363 2.57703 17.607 2.57909 17.4301 2.46315C17.1889 2.30505 17.1213 1.98145 17.2791 1.74003ZM11.7566 0.928102C12.0105 0.839321 12.2928 0.912245 12.472 1.11286C12.6511 1.31348 12.6917 1.60226 12.5749 1.84451C12.458 2.08676 12.2068 2.23476 11.9382 2.21946C11.5719 2.1986 11.2917 1.88482 11.3122 1.51841C11.3273 1.24988 11.5027 1.01688 11.7566 0.928102Z" fill="#0033AD"/>
                      </svg>
                      <div class="font-medium">Cardano</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Ada</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      1.57
                      <span class="ml-1 text-red-500">-3%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="black"/>
                          <path d="M17.4757 5.27853H19.715L15.0538 10.1114C13.3661 11.8612 10.63 11.8612 8.94603 10.1114L4.28484 5.27853H6.52411L10.0638 8.94977C11.1342 10.0566 12.8657 10.0566 13.9323 8.94977L17.4757 5.27853ZM6.49488 18.7215H4.25562L8.94603 13.8557C10.6337 12.1059 13.3698 12.1059 15.0574 13.8557L19.7479 18.7215H17.5086L13.9396 15.0173C12.8693 13.9105 11.1378 13.9105 10.0711 15.0173L6.49488 18.7215Z" fill="white"/>
                      </svg>
                      <div class="font-medium">Ripple</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Xrp</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      1.57
                      <span class="ml-1 text-green-400">8%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#2775CA"/>
                          <path d="M9.74855 20.3443C9.74855 20.6286 9.52805 20.7911 9.25532 20.7041C5.62863 19.5435 3 16.1431 3 12.1277C3 8.1122 5.62863 4.71181 9.26112 3.55127C9.53385 3.46423 9.75435 3.62671 9.75435 3.91104V4.60736C9.75435 4.79885 9.60928 5.01355 9.4294 5.07738C6.55706 6.13348 4.4971 8.89556 4.4971 12.1277C4.4971 15.3598 6.55126 18.1219 9.4236 19.1722C9.60348 19.236 9.74855 19.4565 9.74855 19.648V20.3443Z" fill="white"/>
                          <path d="M12.7542 17.7505C12.7542 17.9594 12.586 18.1277 12.3771 18.1277H11.6285C11.4196 18.1277 11.2513 17.9594 11.2513 17.7505V16.5667C9.61497 16.3462 8.81419 15.4294 8.59369 14.1818C8.55888 13.9671 8.72715 13.7756 8.94185 13.7756H9.79485C9.97474 13.7756 10.1256 13.9033 10.1604 14.0774C10.3171 14.8201 10.7523 15.3946 12.0579 15.3946C13.027 15.3946 13.7117 14.8549 13.7117 14.0484C13.7117 13.236 13.3055 12.9342 11.8838 12.7021C9.78905 12.4178 8.79679 11.7795 8.79679 10.1373C8.79679 8.86653 9.76004 7.88007 11.2455 7.66537V6.50483C11.2455 6.29593 11.4138 6.12766 11.6227 6.12766H12.3713C12.5802 6.12766 12.7484 6.29593 12.7484 6.50483V7.70019C13.9554 7.91489 14.7272 8.59961 14.9767 9.74274C15.0231 9.95744 14.8548 10.1605 14.6343 10.1605H13.8451C13.6769 10.1605 13.5318 10.0445 13.4854 9.88201C13.2707 9.15667 12.7542 8.84332 11.8548 8.84332C10.8626 8.84332 10.3461 9.31914 10.3461 9.99806C10.3461 10.7118 10.642 11.0658 12.1624 11.2863C14.2223 11.5706 15.29 12.1567 15.29 13.9091C15.29 15.2437 14.3036 16.323 12.7484 16.5667L12.7542 17.7505Z" fill="white"/>
                          <path d="M14.7447 20.7041C14.472 20.7911 14.2515 20.6286 14.2515 20.3443V19.6422C14.2515 19.4333 14.3791 19.2418 14.5764 19.1664C17.4488 18.1161 19.5029 15.354 19.5029 12.1219C19.5029 8.88976 17.4488 6.12767 14.5764 5.07738C14.3965 5.01355 14.2515 4.79305 14.2515 4.60736V3.91104C14.2515 3.62671 14.472 3.46423 14.7447 3.55127C18.3772 4.71181 21.0058 8.1122 21.0058 12.1277C21 16.1431 18.3714 19.5435 14.7447 20.7041Z" fill="white"/>
                      </svg>  
                      <div class="font-medium">USD</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">USDC</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      0.6758
                      <span class="ml-1 text-red-500">-1%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.99999 0C4.98499 0 0.885986 4.075 0.885986 9.114C0.88913 10.1219 1.05181 11.123 1.36799 12.08C1.58499 12.731 2.30799 13.093 2.98299 12.876C3.63399 12.659 3.99599 11.936 3.77899 11.26C3.51452 10.5098 3.39177 9.71703 3.41699 8.922C3.51399 5.522 6.26299 2.725 9.66199 2.556C13.448 2.363 16.582 5.377 16.582 9.114C16.5797 10.791 15.9371 12.4039 14.7855 13.623C13.6339 14.8421 12.0602 15.5754 10.386 15.673C10.386 15.673 9.10799 15.745 8.48099 15.842C8.16699 15.89 7.92599 15.938 7.75799 15.962C7.68499 15.986 7.61299 15.914 7.63699 15.842L7.85399 14.781L9.03599 9.331C9.10439 9.00507 9.0414 8.66531 8.86071 8.38556C8.68001 8.10581 8.39621 7.90868 8.07099 7.837C7.74505 7.76827 7.40516 7.83099 7.12521 8.0115C6.84526 8.19202 6.64788 8.47575 6.57599 8.801C6.57599 8.801 3.73099 22.063 3.70599 22.207C3.56199 22.883 3.99599 23.557 4.67099 23.702C5.34599 23.847 6.02099 23.413 6.16599 22.738C6.18999 22.593 6.57599 20.833 6.57599 20.833C6.71305 20.1878 7.04594 19.6007 7.52918 19.1518C8.01243 18.7029 8.62248 18.4142 9.27599 18.325C9.56599 18.277 10.699 18.205 10.699 18.205C15.401 17.843 19.114 13.913 19.114 9.115C19.114 4.074 15.015 0 9.99999 0ZM10.651 20.978C10.4546 20.9356 10.2518 20.9326 10.0543 20.9691C9.8568 21.0057 9.6685 21.081 9.50033 21.1909C9.33216 21.3007 9.18746 21.4429 9.07462 21.6091C8.96179 21.7752 8.88305 21.9622 8.84299 22.159C8.67299 22.979 9.17999 23.799 10.024 23.968C10.844 24.136 11.664 23.63 11.833 22.786C12.001 21.942 11.495 21.146 10.651 20.978Z" fill="black"/>
                      </svg>   
                      <div class="font-medium">Polkadot</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Dot</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      24.65
                      <span class="ml-1 text-red-500">-6%</span>
                  </span>
              </a>
          </li>
      </ul>
      <a href="#" class="py-2 px-3 mb-5 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          View more
      </a>
      <div class="flex justify-between items-center pt-5 mt-5 mb-4 text-sm font-medium text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <h3>Trending</h3>
          <button id="dropdownTrendingButton" data-dropdown-toggle="dropdownTrending" type="button" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              <span class="sr-only">Sort crypto currency</span>
          </button>
          <div id="dropdownTrending" class="hidden z-10 w-48 bg-white rounded shadow dark:bg-gray-700 ">
              <p class="p-3 pb-1 text-sm text-gray-500 dark:text-gray-400">Sort by:</p>
              <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTrendingButton">
                <li>
                  <div class="flex items-center">
                    <input id="checkbox-trending-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="checkbox-trending-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Market cap</label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                      <input checked id="checkbox-trending-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                      <label for="checkbox-trending-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                    </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <input id="checkbox-trending-3" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="checkbox-trending-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Volume</label>
                  </div>
                </li>
              </ul>
          </div>
      </div>
      <ul class="pb-4 space-y-4 dark:border-gray-700">
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#2E3148"/>
                          <path d="M12.0001 18.963C15.8456 18.963 18.963 15.8455 18.963 12C18.963 8.15447 15.8456 5.03705 12.0001 5.03705C8.15453 5.03705 5.03711 8.15447 5.03711 12C5.03711 15.8455 8.15453 18.963 12.0001 18.963Z" fill="#1B1E36"/>
                          <path d="M12.0246 1.53088C10.7293 1.53088 9.67896 6.22916 9.67896 12.0247C9.67896 17.8203 10.7293 22.5185 12.0246 22.5185C13.3199 22.5185 14.3703 17.8203 14.3703 12.0247C14.3703 6.22916 13.3199 1.53088 12.0246 1.53088ZM12.1866 21.9259C12.0385 22.1235 11.8903 21.9753 11.8903 21.9753C11.2938 21.284 10.9955 20 10.9955 20C9.95204 16.642 10.2004 9.43212 10.2004 9.43212C10.6908 3.70817 11.5832 2.35607 11.8864 2.05582C11.9174 2.02524 11.9583 2.0066 12.0017 2.00316C12.0452 1.99973 12.0884 2.01173 12.1239 2.03706C12.5644 2.34916 12.9338 3.65434 12.9338 3.65434C14.0246 7.70372 13.9259 11.5062 13.9259 11.5062C14.0246 14.8148 13.3792 18.5185 13.3792 18.5185C12.8824 21.3334 12.1866 21.9259 12.1866 21.9259Z" fill="#6F7390"/>
                          <path d="M21.1269 6.80245C20.482 5.6785 15.8845 7.10566 10.8553 9.99011C5.8262 12.8746 2.27805 16.1234 2.9225 17.2469C3.56694 18.3704 8.16497 16.9437 13.1941 14.0592C18.2232 11.1748 21.7714 7.92591 21.1269 6.80245ZM3.51706 17.0923C3.27015 17.0612 3.32595 16.8583 3.32595 16.8583C3.62867 15.997 4.59262 15.0992 4.59262 15.0992C6.98719 12.5229 13.365 9.1506 13.365 9.1506C18.5734 6.72739 20.1911 6.82961 20.6015 6.94221C20.6437 6.95388 20.6804 6.98013 20.7051 7.01629C20.7298 7.05245 20.7408 7.09619 20.7363 7.13974C20.6869 7.67702 19.7363 8.6469 19.7363 8.6469C16.7684 11.6099 13.4208 13.4168 13.4208 13.4168C10.6 15.1496 7.0662 16.4321 7.0662 16.4321C4.37731 17.401 3.51706 17.0923 3.51706 17.0923Z" fill="#6F7390"/>
                          <path d="M21.1043 17.284C21.7541 16.163 18.2154 12.8988 13.203 9.99309C8.19068 7.08741 3.59463 5.64247 2.94525 6.76543C2.29586 7.8884 5.83414 11.1506 10.849 14.0563C15.8638 16.962 20.4549 18.4069 21.1043 17.284ZM3.37586 7.19852C3.27957 6.97087 3.48253 6.91605 3.48253 6.91605C4.37982 6.74667 5.64006 7.13235 5.64006 7.13235C9.0687 7.91309 15.1823 11.7427 15.1823 11.7427C19.8894 15.0365 20.6114 16.4874 20.7196 16.8993C20.7306 16.9415 20.7263 16.9863 20.7075 17.0257C20.6887 17.0651 20.6566 17.0965 20.6169 17.1146C20.126 17.3393 18.8114 17.0044 18.8114 17.0044C14.7596 15.918 11.5191 13.9274 11.5191 13.9274C8.60747 12.357 5.72846 9.94074 5.72846 9.94074C3.5408 8.09877 3.37685 7.20049 3.37685 7.20049L3.37586 7.19852Z" fill="#6F7390"/>
                          <path d="M11.9999 13.2346C12.6818 13.2346 13.2345 12.6818 13.2345 12C13.2345 11.3182 12.6818 10.7654 11.9999 10.7654C11.3181 10.7654 10.7654 11.3182 10.7654 12C10.7654 12.6818 11.3181 13.2346 11.9999 13.2346Z" fill="#B7B9C8"/>
                          <path d="M17.0618 7.99998C17.4572 7.99998 17.7778 7.66833 17.7778 7.25923C17.7778 6.85013 17.4572 6.51849 17.0618 6.51849C16.6663 6.51849 16.3457 6.85013 16.3457 7.25923C16.3457 7.66833 16.6663 7.99998 17.0618 7.99998Z" fill="#B7B9C8"/>
                          <path d="M5.30858 10.5185C5.70404 10.5185 6.02463 10.1869 6.02463 9.77779C6.02463 9.36869 5.70404 9.03705 5.30858 9.03705C4.91312 9.03705 4.59253 9.36869 4.59253 9.77779C4.59253 10.1869 4.91312 10.5185 5.30858 10.5185Z" fill="#B7B9C8"/>
                          <path d="M10.5432 19.605C10.9387 19.605 11.2592 19.2733 11.2592 18.8642C11.2592 18.4551 10.9387 18.1235 10.5432 18.1235C10.1477 18.1235 9.82715 18.4551 9.82715 18.8642C9.82715 19.2733 10.1477 19.605 10.5432 19.605Z" fill="#B7B9C8"/>
                      </svg>  
                      <div class="font-medium">Cosmos</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Atom</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      12.34
                      <span class="ml-1 text-green-400">12%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.89841 14.9515C4.04324 14.8066 4.24239 14.7221 4.4536 14.7221H23.6077C23.9578 14.7221 24.1328 15.1446 23.8853 15.392L20.1016 19.1757C19.9567 19.3206 19.7576 19.4051 19.5464 19.4051H0.392251C0.0422387 19.4051 -0.132768 18.9826 0.114655 18.7352L3.89841 14.9515Z" fill="url(#paint0_linear_13778_78120)"/>
                          <path d="M3.89841 0.824228C4.04928 0.679395 4.24842 0.59491 4.4536 0.59491H23.6077C23.9578 0.59491 24.1328 1.01734 23.8853 1.26476L20.1016 5.04852C19.9567 5.19335 19.7576 5.27784 19.5464 5.27784H0.392251C0.0422387 5.27784 -0.132768 4.85541 0.114655 4.60798L3.89841 0.824228Z" fill="url(#paint1_linear_13778_78120)"/>
                          <path d="M20.1016 7.84257C19.9567 7.69774 19.7576 7.61325 19.5464 7.61325H0.392251C0.0422387 7.61325 -0.132768 8.03568 0.114655 8.2831L3.89841 12.0669C4.04324 12.2117 4.24239 12.2962 4.4536 12.2962H23.6077C23.9578 12.2962 24.1328 11.8737 23.8853 11.6263L20.1016 7.84257Z" fill="url(#paint2_linear_13778_78120)"/><defs><linearGradient id="paint0_linear_13778_78120" x1="21.778" y1="-1.66541" x2="8.52178" y2="23.7255" gradientUnits="userSpaceOnUse"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient><linearGradient id="paint1_linear_13778_78120" x1="15.9816" y1="-4.69157" x2="2.72545" y2="20.6994" gradientUnits="userSpaceOnUse"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient><linearGradient id="paint2_linear_13778_78120" x1="18.8614" y1="-3.18813" x2="5.60516" y2="22.2028" gradientUnits="userSpaceOnUse"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient></defs>
                      </svg>
                      <div class="font-medium">Solana</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Sol</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      39.99
                      <span class="ml-1 text-red-500">-2%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.0001 11.9999C24.0001 18.6274 18.6276 24 12.0002 24C5.37279 24 0.000244141 18.6274 0.000244141 11.9999C0.000244141 5.37255 5.37279 0 12.0002 0C18.6276 0 24.0001 5.37255 24.0001 11.9999Z" fill="#345D9C"/>
                          <path d="M21.4524 12.0001C21.4524 17.2201 17.2205 21.4523 12.0002 21.4523C6.78001 21.4523 2.54785 17.2201 2.54785 12.0001C2.54785 6.77967 6.78001 2.54773 12.0002 2.54773C17.2206 2.54773 21.4524 6.7796 21.4524 12.0001Z" fill="#345D9C"/>
                          <path d="M11.2988 15.2056L12.0782 12.2707L13.9235 11.5965L14.3825 9.87169L14.3669 9.8289L12.5504 10.4925L13.8592 5.56445H10.1475L8.4359 11.9957L7.00686 12.5177L6.53467 14.2959L7.96261 13.7743L6.95387 17.5645H16.8322L17.4655 15.2056H11.2988Z" fill="white"/>
                      </svg>
                      <div class="font-medium">Litecoin</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Ltc</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      166.34
                      <span class="ml-1 text-green-400">4%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0L9.46032 1.46189L2.53968 5.46651L0 6.92841V20.7852L2.53968 22.2471L9.52351 26.2517L12.0635 27.7136L14.6031 26.2517L21.4603 22.2471L24 20.7852V6.92841L21.4603 5.46651L14.5397 1.46189L12 0ZM5.07935 17.8614V9.85219L12 5.84757L18.9206 9.85219V17.8614L12 21.866L5.07935 17.8614Z" fill="#2A5ADA"/>
                      </svg>  
                      <div class="font-medium">Chainlink</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Link</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      357.37
                      <span class="ml-1 text-green-400">7%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0.713623C18.6278 0.713623 24 6.08587 24 12.7136C24 19.3414 18.6278 24.7136 12 24.7136C5.37225 24.7136 0 19.3414 0 12.7136C0 6.08587 5.37225 0.713623 12 0.713623Z" fill="#8F5AE8"/>
                          <path d="M16.1059 9.94652C15.9496 9.8632 15.7752 9.81962 15.598 9.81962C15.4208 9.81962 15.2464 9.8632 15.0901 9.94652L12.7999 11.3008L11.2002 12.19L8.91006 13.545C8.75372 13.6283 8.57928 13.6719 8.40212 13.6719C8.22496 13.6719 8.05052 13.6283 7.89418 13.545L6.07412 12.4858C5.92432 12.3994 5.79902 12.2763 5.71008 12.128C5.62113 11.9797 5.57148 11.8112 5.56581 11.6383V9.52408C5.56258 9.34939 5.6085 9.17732 5.69834 9.02747C5.78819 8.87762 5.91833 8.75604 6.07393 8.67658L7.89418 7.66089C8.05041 7.57722 8.22489 7.53344 8.40212 7.53344C8.57935 7.53344 8.75383 7.57722 8.91006 7.66089L10.7301 8.67677C10.8799 8.76318 11.0051 8.88635 11.0941 9.03464C11.183 9.18294 11.2326 9.35146 11.2382 9.52427V10.8776L12.7999 9.94671V8.63496C12.8042 8.46113 12.7596 8.2896 12.6713 8.13981C12.583 7.99001 12.4546 7.86795 12.3004 7.78746L8.95168 5.84083C8.79545 5.75716 8.62097 5.71338 8.44375 5.71338C8.26652 5.71338 8.09204 5.75716 7.93581 5.84083L4.54993 7.78746C4.3809 7.85312 4.23681 7.9703 4.13807 8.12241C4.03934 8.27451 3.99097 8.45383 3.99981 8.63496V12.5708C3.99733 12.7447 4.04364 12.9159 4.13348 13.0649C4.22332 13.2139 4.35311 13.3348 4.50812 13.4138L7.89418 15.3651C8.05052 15.4484 8.22496 15.492 8.40212 15.492C8.57928 15.492 8.75372 15.4484 8.91006 15.3651L11.2002 14.0526L12.7662 13.1216L15.0484 11.8135C15.2048 11.7301 15.3792 11.6866 15.5564 11.6866C15.7335 11.6866 15.908 11.7301 16.0643 11.8135L17.8844 12.8293C18.0341 12.9158 18.1593 13.0389 18.2481 13.1872C18.3369 13.3355 18.3864 13.5041 18.3919 13.6768V15.751C18.3952 15.9255 18.3493 16.0974 18.2596 16.2471C18.1698 16.3968 18.0398 16.5183 17.8844 16.5977L16.0643 17.6552C15.9081 17.7389 15.7336 17.7827 15.5564 17.7827C15.3791 17.7827 15.2047 17.7389 15.0484 17.6552L13.2284 16.6393C13.0786 16.5531 12.9533 16.4301 12.8644 16.282C12.7754 16.1339 12.7258 15.9655 12.7201 15.7928V14.4334L11.2002 15.3218V16.6753C11.1968 16.85 11.2426 17.022 11.3324 17.1719C11.4221 17.3217 11.5522 17.4433 11.7077 17.5228L15.0938 19.4693C15.2502 19.5529 15.4248 19.5967 15.6021 19.5967C15.7795 19.5967 15.9541 19.5529 16.1104 19.4693L19.4963 17.5225C19.6451 17.4357 19.7694 17.3126 19.8576 17.1647C19.9457 17.0167 19.9949 16.8488 20.0003 16.6766V12.7391C20.0036 12.5645 19.9576 12.3925 19.8677 12.2428C19.7778 12.0931 19.6476 11.9716 19.492 11.8924L16.1059 9.94652Z" fill="white"/>
                      </svg>  
                      <div class="font-medium">Polygon</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Matic</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      1.37
                      <span class="ml-1 text-red-500">-3%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 24.7136C18.6274 24.7136 24 19.341 24 12.7136C24 6.08621 18.6274 0.713623 12 0.713623C5.37258 0.713623 0 6.08621 0 12.7136C0 19.341 5.37258 24.7136 12 24.7136Z" fill="#2AB8E6"/>
                          <path d="M8.22 5.21362H15.78L16.5 5.95837V19.4689L15.78 20.2136H8.22L7.5 19.4689V5.95837L8.22 5.21362ZM8.94 18.7234H15.06V6.70387H8.94V18.7234ZM14.2905 14.8459H12.7252V16.5431H11.3123V14.8466H9.747V13.3849H14.2905V14.8459ZM14.2905 10.6594V12.1204H9.747V10.6594H11.3123V8.96212H12.7252V10.6594H14.2905Z" fill="white"/>
                      </svg>   
                      <div class="font-medium">THETA</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Theta</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      7.36
                      <span class="ml-1 text-green-400">8%</span>
                  </span>
              </a>
          </li>
          <li>
              <a href="#" class="flex justify-between items-center">
                  <span class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.0577 4.22104L0 0.713623L10.028 25.9515L24.0032 8.92515L19.0577 4.22104ZM18.7503 5.76814L21.666 8.53837L13.6908 9.983L18.7503 5.76814ZM11.9603 9.69209L3.55535 2.72188L17.2925 5.24914L11.9603 9.69209ZM11.3619 10.9268L9.99168 22.2557L2.60164 3.66071L11.3619 10.9268ZM12.6297 11.5268L21.4594 9.92845L11.3322 22.2689L12.6297 11.5268Z" fill="#EB0029"/>
                      </svg>  
                      <div class="font-medium">Tron</div>
                      <span class="text-sm text-gray-500 uppercase dark:text-gray-400">Trx</span>
                  </span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      0.07345
                      <span class="ml-1 text-green-400">5%</span>
                  </span>
              </a>
          </li>
      </ul>
      <a href="#" class="py-2 px-3 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          View more
      </a>
  </div>
</aside>
```

## Double sidenav with tasks

```html
<button data-drawer-target="sidebar-tasks" data-drawer-toggle="sidebar-tasks" data-drawer-placement="right" aria-controls="sidebar-tasks" type="button" class="flex items-center p-2 mt-2 mr-3 ml-auto text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-tasks" class="flex fixed top-0 right-0 h-full divide-x divide-gray-200 dark:divide-gray-700 transition-transform -translate-x-full sm:translate-x-0 z-40" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 w-16 h-full bg-white dark:bg-gray-800">
      <ul class="pb-4 mb-4 space-y-2 border-b border-gray-200 dark:border-gray-700">
          <li>
              <a href="#" class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Calendar</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Tasks</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Products</span>
              </a>
          </li>
          <li>
              <a href="#" class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span class="sr-only">Inbox</span>
              </a>
          </li>
      </ul>
      <a href="#" class="flex items-center p-2 text-gray-500 rounded-lg transition duration-75 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group-hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          <span class="sr-only">Add new item</span>
      </a>
  </div>
  <div class="overflow-y-auto py-4 px-3 w-64 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <button id="dropdownUserNameButton" data-dropdown-toggle="dropdownUserName" class="flex justify-between items-center p-2 w-full rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700" type="button">
          <span class="sr-only">Open user menu</span>
          <div class="flex items-center">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" class="mr-3 w-8 h-8 rounded-full" alt="Bonnie avatar" />
              <div class="text-left">   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Tasks</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Bonnie Green</div>
              </div>
          </div>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <!-- Dropdown menu -->
      <div id="dropdownUserName" class="hidden z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-placement="bottom">
          <a href="#" class="flex items-center py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-600">
              <svg aria-hidden="true" class="mr-3 w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              <div class="text-left">   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Calendar</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">My calendar</div>
              </div>
          </a>
          <a href="#" class="flex items-center py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-600">
              <svg aria-hidden="true" class="mr-3 w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
              <div class="text-left">   
                  <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Collections</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">My collections</div>
              </div>
          </a>
      </div>
      <div class="flex justify-between items-center pt-4 mt-4 mb-4 border-t border-gray-200 dark:border-gray-700">
          <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
              <svg aria-hidden="true" class="mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              Add a task
          </a>
          <button id="dropdownDefault" data-dropdown-toggle="dropdown" type="button" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              <span class="sr-only">Settings</span>
          </button>
          <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mark all as done</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove all items</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add to my day</a>
                </li>
              </ul>
          </div>
      </div>
      <ul class="space-y-4">
          <li>
              <div class="flex">
                  <input id="task-1" type="checkbox" value="" class="mt-1 w-4 h-4 bg-gray-100 rounded-full border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="task-1" class="ml-2 text-sm text-gray-500 dark:text-gray-300">Message from Payoneer’s Account Approval Department</label>
              </div>
          </li>
          <li>
              <div class="flex">
                  <input id="task-2" type="checkbox" value="" class="mt-1 w-4 h-4 bg-gray-100 rounded-full border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="task-2" class="ml-2 text-sm text-gray-500 dark:text-gray-300">Develop and update Bergside Management System</label>
              </div>
          </li>
          <li>
              <div class="flex">
                  <input id="task-3" type="checkbox" value="" class="mt-1 w-4 h-4 bg-gray-100 rounded-full border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="task-3" class="ml-2 text-sm text-gray-500 dark:text-gray-300">Talk with newcomers about our main office</label>
              </div>
          </li>
          <li>
              <div class="flex">
                  <input id="task-4" type="checkbox" value="" class="mt-1 w-4 h-4 bg-gray-100 rounded-full border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="task-4" class="ml-2 text-sm text-gray-500 dark:text-gray-300">Design and code new charts for Flowbite library</label>
              </div>
          </li>
      </ul>
      <div class="flex justify-between items-center pt-4 mt-4 mb-4 text-sm font-medium text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
          Completed
          <button id="dropdownDefaultCompleted" data-dropdown-toggle="dropdownCompleted" type="button" class="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              <span class="sr-only">Settings</span>
          </button>
          <div id="dropdownCompleted" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultCompleted">
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mark all as done</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove all items</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add to my day</a>
                </li>
              </ul>
          </div>
      </div>
      <ul class="space-y-4">
          <li>
              <div class="flex">
                  <input id="completed-task-1" type="checkbox" value="" class="mt-1 w-4 h-4 bg-gray-100 rounded-full border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>
                  <label for="completed-task-1" class="ml-2 text-sm text-gray-500 line-through dark:text-gray-300">Message from Payoneer’s Account Approval Department</label>
              </div>
          </li>
      </ul>
      <div class="absolute bottom-0 justify-center mr-3.5 bg-white dark:bg-gray-800 z-20">
          <div id="alert-update" class="p-4 mb-3 bg-green-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600" role="alert">
              <div class="flex justify-between items-center mb-3">
                  <span class="bg-green-100 dark:bg-green-200 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Task completed</span>
                  <button type="button" class="inline-flex p-1 w-6 h-6 text-green-700 bg-green-50 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white focus:ring-2 focus:ring-green-400 hover:bg-green-100 dark:focus:ring-gray-300" data-dismiss-target="#alert-update" aria-label="Close">
                      <span class="sr-only">Dismiss</span>
                      <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
              <div class="mb-3 text-sm text-green-700 dark:text-white">
                  You have successfully completed your task.
              </div>
              <button type="button" class="text-sm font-medium text-green-900 hover:underline dark:text-gray-300">
                  Undo
              </button>
          </div>
      </div>
  </div>
</aside>
```

