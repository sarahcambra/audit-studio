## Default table footer with pagination

Use this free example to add a footer section to a table component to show a pagination component and indicate the number of data items being showed on one page.

```html
<section class="flex items-center h-screen bg-gray-50 dark:bg-gray-900">
  <div class="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
    <!-- Start coding here -->
    <div class="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
      <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
           aria-label="Table navigation">
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
            class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
            class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <a href="#"
               class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page"
               class="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>
```

## Table footer with button

This free example can be used as a footer for the table component to show a button and the total amount of data items shown inside the table.

```html
<section class="flex items-center h-screen bg-gray-50 dark:bg-gray-900">
  <div class="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
    <!-- Start coding here -->
    <div class="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
      <nav class="flex flex-row items-center justify-between p-4"
           aria-label="Table navigation">
        <button type="button" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
          View full report
        </button>
        <p class="text-sm">
          <span class="font-normal text-gray-500 dark:text-gray-400">Total users:</span>
          <span class="font-semibold text-gray-900 dark:text-white">1867</span>
        </p>
      </nav>
    </div>
  </div>
</section>
```

## Table footer with dropdown and link

This example can be used to show a dropdown menu with a button and a CTA link inside the footer of a table component.

```html
<section class="flex items-center h-screen bg-gray-50 dark:bg-gray-900">
  <div class="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
    <!-- Start coding here -->
    <div class="relative bg-white rounded-b-lg shadow-md dark:bg-gray-800">
      <nav class="flex flex-row items-center justify-between p-4"
           aria-label="Table navigation">

        <a id="dropdownBottomButton" data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom"
           class="inline-flex items-center mr-3 text-sm font-medium text-center text-gray-500 rounded-lg cursor-pointer hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
           type="button">
          Last 7 days

          <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
          </svg>

        </a>

        <!-- Dropdown menu -->
        <div id="dropdownBottom" class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
          <div class="px-4 py-3" role="none">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
              Sep 16, 2021 - Sep 22, 2021
            </p>
          </div>
          <ul class="py-1" role="none">
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
            </li>
          </ul>
          <div class="py-1" role="none">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
          </div>
      </div>

        <a href="#" class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
          Transactions Report
          <svg aria-hidden="true" class="w-5 h-5 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
          </svg>
        </a>
      </nav>
    </div>
  </div>
</section>
```

## Table footer with select input pagination

Use this example to select the amount of rows you want to show inside a table and a simple pagination system with a next and previous button.

```html
<section class="flex items-center h-screen bg-gray-50 dark:bg-gray-900">
  <div class="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
    <!-- Start coding here -->
    <div class="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
      <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
           aria-label="Table navigation">
        <div class="flex items-center space-x-3">
          <label for="rows" class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Rows per page
          </label>
          <select id="rows"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block py-1.5 pl-3.5 pr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option selected value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <div class="text-xs font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
            of
            <span class="font-semibold text-gray-900 dark:text-white">100</span>
          </div>
        </div>
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <a href="#"
               class="flex text-sm w-20 items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-primary-100 hover:text-primary-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </a>
          </li>
          <li>
            <a href="#"
               class="flex text-sm w-20 items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-primary-100 hover:text-primary-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>
```

## Table footer with progress bar

This example can be used to show a progress bar in the footer section of a table component to indicate usage and statistics.

```html
<section class="flex items-center h-screen bg-gray-50 dark:bg-gray-900">
  <div class="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
    <!-- Start coding here -->
    <div class="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
      <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
           aria-label="Table navigation">
        <div class="max-w-[20rem] w-full">
          <div class="flex justify-between mb-1">
            <span class="text-xs font-medium text-gray-500 dark:text-gray-400">3.24 GB of 15 GB used</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div class="bg-primary-500 h-1.5 rounded-full" style="width: 25%"></div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <p class="text-sm">
            <span class="font-normal text-gray-500 dark:text-gray-400">Last account activity:</span>
            <span class="font-semibold text-gray-900 dark:text-white">2 hours ago</span>
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20"
               fill="currentColor" aria-hidden="true">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </div>
      </nav>
    </div>
  </div>
</section>
```

## Table footer with statistics

This example can be used to show statistics about the table component and allow users to export the data via CSV from inside the table using a button.

```html
<section class="flex items-center h-screen bg-gray-50 dark:bg-gray-900">
  <div class="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
    <!-- Start coding here -->
    <div class="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
      <nav aria-label="Table navigation"
           class="flex flex-col items-start justify-between px-4 pt-3 pb-4 space-y-3 md:flex-row md:items-center md:space-y-0">
        <div class="flex items-center space-x-5 text-sm">
          <div>
            <div class="mb-1 text-gray-500 dark:text-gray-400">Purchase price</div>
            <div class="font-medium dark:text-white">
              $ 3,567,890
            </div>
          </div>
          <div>
            <div class="mb-1 text-gray-500 dark:text-gray-400">Total selling price</div>
            <div class="font-medium dark:text-white">
              $ 8,489,400
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button type="button"
                  class="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">
            Print barcodes
          </button>
          <button type="button"
                  class="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">
            Duplicate
          </button>
          <button type="button"
                  class="flex items-center px-3 py-2 text-xs font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Export CSV
          </button>
        </div>
      </nav>
    </div>
  </div>
</section>
```
