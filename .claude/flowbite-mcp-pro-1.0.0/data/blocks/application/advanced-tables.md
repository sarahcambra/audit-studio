## Default table

Use this free example of a table component with a search bar, filter dropdown, and a dataset of rows and columns to show complex data in your application.

```html
<section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <!-- Start coding here -->
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="">
                        </div>
                    </form>
                </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Add product
                    </button>
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                        <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                            <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                            Actions
                        </button>
                        <div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                            </div>
                        </div>
                        <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                            </svg>
                            Filter
                            <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </button>
                        <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                            <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                            <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                <li class="flex items-center">
                                    <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="nikon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="nikon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="benq" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Product name</th>
                            <th scope="col" class="px-4 py-3">Category</th>
                            <th scope="col" class="px-4 py-3">Brand</th>
                            <th scope="col" class="px-4 py-3">Description</th>
                            <th scope="col" class="px-4 py-3">Price</th>
                            <th scope="col" class="px-4 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td class="px-4 py-3">PC</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">300</td>
                            <td class="px-4 py-3">$2999</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 20&#34;</th>
                            <td class="px-4 py-3">PC</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">200</td>
                            <td class="px-4 py-3">$1499</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-20-dropdown-button" data-dropdown-toggle="apple-imac-20-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-20-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-20-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPhone 14</th>
                            <td class="px-4 py-3">Phone</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">1237</td>
                            <td class="px-4 py-3">$999</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="apple-iphone-14-dropdown-button" data-dropdown-toggle="apple-iphone-14-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-iphone-14-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-iphone-14-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPad Air</th>
                            <td class="px-4 py-3">Tablet</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">4578</td>
                            <td class="px-4 py-3">$1199</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="apple-ipad-air-dropdown-button" data-dropdown-toggle="apple-ipad-air-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-ipad-air-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-ipad-air-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series S</th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3">Microsoft</td>
                            <td class="px-4 py-3">56</td>
                            <td class="px-4 py-3">$299</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="xbox-series-s-dropdown-button" data-dropdown-toggle="xbox-series-s-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="xbox-series-s-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-s-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">PlayStation 5</th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3">Sony</td>
                            <td class="px-4 py-3">78</td>
                            <td class="px-4 py-3">$799</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="playstation-5-dropdown-button" data-dropdown-toggle="playstation-5-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="playstation-5-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="playstation-5-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series X</th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3">Microsoft</td>
                            <td class="px-4 py-3">200</td>
                            <td class="px-4 py-3">$699</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="xbox-series-x-dropdown-button" data-dropdown-toggle="xbox-series-x-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="xbox-series-x-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-x-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch SE</th>
                            <td class="px-4 py-3">Watch</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">657</td>
                            <td class="px-4 py-3">$399</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="apple-watch-se-dropdown-button" data-dropdown-toggle="apple-watch-se-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-watch-se-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-watch-se-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">NIKON D850</th>
                            <td class="px-4 py-3">Photo</td>
                            <td class="px-4 py-3">Nikon</td>
                            <td class="px-4 py-3">465</td>
                            <td class="px-4 py-3">$599</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="nikon-d850-dropdown-button" data-dropdown-toggle="nikon-d850-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="nikon-d850-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="nikon-d850-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Monitor BenQ EX2710Q</th>
                            <td class="px-4 py-3">TV/Monitor</td>
                            <td class="px-4 py-3">BenQ</td>
                            <td class="px-4 py-3">354</td>
                            <td class="px-4 py-3">$499</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="benq-ex2710q-dropdown-button" data-dropdown-toggle="benq-ex2710q-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="benq-ex2710q-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="benq-ex2710q-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                    of
                    <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                </span>
                <ul class="inline-flex items-stretch -space-x-px">
                    <li>
                        <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </section>
```

## Table with products

This responsive table component can be used to show a list of products with images, categories, sales generated, and ratings in your e-commerce platform.

```html
<section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
  <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">
      <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div class="flex items-center flex-1 space-x-4">
                  <h5>
                      <span class="text-gray-500">All Products:</span>
                      <span class="dark:text-white">123456</span>
                  </h5>
                  <h5>
                      <span class="text-gray-500">Total sales:</span>
                      <span class="dark:text-white">$88.4k</span>
                  </h5>
              </div>
              <div class="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                  <button type="button" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                      <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                      </svg>
                      Add new product
                  </button>
                  <button type="button" class="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      Update stocks 1/250
                  </button>
                  <button type="button" class="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                      Export
                  </button>
              </div>
          </div>
          <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="p-4">
                              <div class="flex items-center">
                                  <input id="checkbox-all" type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-all" class="sr-only">checkbox</label>
                              </div>
                          </th>
                          <th scope="col" class="px-4 py-3">Product</th>
                          <th scope="col" class="px-4 py-3">Category</th>
                          <th scope="col" class="px-4 py-3">Stock</th>
                          <th scope="col" class="px-4 py-3">Sales/Day</th>
                          <th scope="col" class="px-4 py-3">Sales/Month</th>
                          <th scope="col" class="px-4 py-3">Rating</th>
                          <th scope="col" class="px-4 py-3">Sales</th>
                          <th scope="col" class="px-4 py-3">Revenue</th>
                          <th scope="col" class="px-4 py-3">Last Update</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              Apple iMac 27&#34;
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Desktop PC</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                                  95
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.47</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.47</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  1.6M
                              </div>
                          </td>
                          <td class="px-4 py-2">$3.2M</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Just now</td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              Apple iMac 20&#34;
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Desktop PC</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                                  108
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.15</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.32</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  6M
                              </div>
                          </td>
                          <td class="px-4 py-2">$785K</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">This week</td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              Apple iPhone 14
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Phone</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-green-400 rounded-full"></div>
                                  24
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.00</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.95</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">4.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  1.2M
                              </div>
                          </td>
                          <td class="px-4 py-2">$3.2M</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Just now</td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-ipad-air.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              Apple iPad Air
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Tablet</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"></div>
                                  287
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.47</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.00</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">4.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  298K
                              </div>
                          </td>
                          <td class="px-4 py-2">$425K</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Just now</td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              Xbox Series S
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Console</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-yellow-300 rounded-full"></div>
                                  450
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.61</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.30</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  99
                              </div>
                          </td>
                          <td class="px-4 py-2">$345K</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">This week</td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              PlayStation 5
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Console</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-green-400 rounded-full"></div>
                                  2435
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.41</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.11</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">4.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  2.1M
                              </div>
                          </td>
                          <td class="px-4 py-2">$4.2M</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">This week</td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              Xbox Series X
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Gaming/Console</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-orange-500 rounded-full"></div>
                                  235
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">7.09</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">3.32</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  989K
                              </div>
                          </td>
                          <td class="px-4 py-2">$2.27M</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">This week</td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-watch-se.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              Apple Watch SE
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Watch</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-yellow-300 rounded-full"></div>
                                  433
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">4.96</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.74</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  102
                              </div>
                          </td>
                          <td class="px-4 py-2">$45K</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">2 weeks ago</td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/nikon-d850.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              NIKON D850
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Photo/Video</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-orange-400 rounded-full"></div>
                                  351
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.20</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.74</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">3.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  1.2M
                              </div>
                          </td>
                          <td class="px-4 py-2">$1.52M</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">3 weeks ago</td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/benq-ex2710q.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                              Monitor BenQ EX2710Q
                          </th>
                          <td class="px-4 py-2">
                              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">TV/Monitor</span>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
                                  1242
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">4.12</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.30</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span class="ml-1 text-gray-500 dark:text-gray-400">4.0</span>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                  </svg>
                                  211K
                              </div>
                          </td>
                          <td class="px-4 py-2">$1.2M</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Just now</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                  of
                  <span class="font-semibold text-gray-900 dark:text-white">1000</span>
              </span>
              <ul class="inline-flex items-stretch -space-x-px">
                  <li>
                      <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <span class="sr-only">Previous</span>
                          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                  </li>
                  <li>
                      <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <span class="sr-only">Next</span>
                          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                      </a>
                  </li>
              </ul>
          </nav>
      </div>
  </div>
</section>
```

## Table with expandable rows

Use this example to expand a table row when clicking on it and show more details about a given data entry such as images, descriptions, and more.

```html
<section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
  <div class="mx-auto max-w-screen-2xl px-4 lg:px-12">
      <!-- Start coding here -->
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 border-b dark:border-gray-700">
              <div class="w-full flex items-center space-x-3">
                  <h5 class="dark:text-white font-semibold">Flowbite Products</h5>
                  <div class="text-gray-400 font-medium">6,560 results</div>
                  <div data-tooltip-target="results-tooltip">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                      </svg>
                      <span class="sr-only">More info</span>
                  </div>
                  <div id="results-tooltip" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                      Showing 1-10 of 6,560 results
                      <div class="tooltip-arrow" data-popper-arrow=""></div>
                  </div>
              </div>
              <div class="w-full flex flex-row items-center justify-end space-x-3">
                  <button type="button" class="w-full md:w-auto flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                      <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                      </svg>
                      Add new product
                  </button>
                  <button type="button" class="w-full md:w-auto flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      <svg class="mr-2 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" viewbox="0 0 12 13" aria-hidden="true">
                          <path d="M1 2V1h10v3H1V2Zm0 4h5v6H1V6Zm8 0h2v6H9V6Z" />
                      </svg>
                      Manage Columns
                  </button>
              </div>
          </div>
          <div class="flex flex-col-reverse md:flex-row items-start md:items-center justify-between md:space-x-4 p-4 border-b dark:border-gray-700">
              <div class="mt-3 md:mt-0">
                  <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                      <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                      Actions
                  </button>
                  <div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                          <li>
                              <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                          </li>
                      </ul>
                      <div class="py-1">
                          <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                      </div>
                  </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-4 w-full lg:w-2/3 md:gap-4">
                  <div class="w-full"><label for="brand" class="sr-only">Brand</label><select id="brand" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"><option selected="">Brand</option><option value="purple">Samsung</option><option value="primary">Apple</option><option value="pink">Pink</option><option value="green">Green</option></select></div>
                  <div class="w-full"><label for="price" class="sr-only">Price</label><select id="price" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"><option selected="">Price</option><option value="below-100">$ 1-100</option><option value="below-500">$ 101-500</option><option value="below-1000">$ 501-1000</option><option value="over-1000">$ 1001+</option></select></div>
                  <div class="w-full"><label for="category" class="sr-only">Category</label><select id="category" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"><option selected="">Category</option><option value="pc">PC</option><option value="phone">Phone</option><option value="tablet">Tablet</option><option value="console">Gaming/Console</option></select></div>
                  <div class="w-full"><label for="color" class="sr-only">Color</label><select id="color" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"><option selected="">Color</option><option value="purple">Purple</option><option value="primary">primary</option><option value="pink">Pink</option><option value="green">Green</option></select></div>
              </div>
          </div>
          <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-700">
                      <tr>
                          <th scope="col" class="p-4">
                              <div class="flex items-center">
                                  <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-all" class="sr-only">checkbox</label>
                              </div>
                          </th>
                          <th scope="col" class="px-4 py-3">
                              <span class="sr-only">Expand/Collapse Row</span>
                          </th>
                          <th scope="col" class="px-4 py-3 min-w-[14rem]">Product</th>
                          <th scope="col" class="px-4 py-3 min-w-[10rem]">
                              Category
                              <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                              </svg>
                          </th>
                          <th scope="col" class="px-4 py-3 min-w-[6rem]">
                              Brand
                              <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                              </svg>
                          </th>
                          <th scope="col" class="px-4 py-3 min-w-[6rem]">
                              Price
                              <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                              </svg>
                          </th>
                          <th scope="col" class="px-4 py-3 min-w-[6rem]">
                              Stock
                              <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                              </svg>
                          </th>
                          <th scope="col" class="px-4 py-3 min-w-[12rem]">
                              Total Sales
                              <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                              </svg>
                          </th>
                          <th scope="col" class="px-4 py-3 min-w-[7rem]">
                              Status
                              <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                              </svg>
                          </th>
                      </tr>
                  </thead>
                  <tbody data-accordion="table-column">
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-0" data-accordion-target="#table-column-body-0" aria-expanded="false" aria-controls="table-column-body-0">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              Apple iMac 27&#34;
                          </th>
                          <td class="px-4 py-3">PC</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$2999</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">200</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">245</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-0" aria-labelledby="table-column-header-0">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-1" data-accordion-target="#table-column-body-1" aria-expanded="false" aria-controls="table-column-body-1">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              Apple iMac 20&#34;
                          </th>
                          <td class="px-4 py-3">PC</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$1499</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1237</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2000</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-1" aria-labelledby="table-column-header-1">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-2" data-accordion-target="#table-column-body-2" aria-expanded="false" aria-controls="table-column-body-2">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              Apple iPhone 14
                          </th>
                          <td class="px-4 py-3">Phone</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$999</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">300</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">466</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-2" aria-labelledby="table-column-header-2">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-3" data-accordion-target="#table-column-body-3" aria-expanded="false" aria-controls="table-column-body-3">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              Apple iPad Air
                          </th>
                          <td class="px-4 py-3">Tablet</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$1199</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">4576</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">90</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-3" aria-labelledby="table-column-header-3">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-4" data-accordion-target="#table-column-body-4" aria-expanded="false" aria-controls="table-column-body-4">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              Xbox Series S
                          </th>
                          <td class="px-4 py-3">Gaming/Console</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$299</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">56</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">3087</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-4" aria-labelledby="table-column-header-4">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-5" data-accordion-target="#table-column-body-5" aria-expanded="false" aria-controls="table-column-body-5">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              PlayStation 5
                          </th>
                          <td class="px-4 py-3">Gaming/Console</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sony</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$799</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">78</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2999</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-5" aria-labelledby="table-column-header-5">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-6" data-accordion-target="#table-column-body-6" aria-expanded="false" aria-controls="table-column-body-6">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              Xbox Series X
                          </th>
                          <td class="px-4 py-3">Gaming/Console</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$699</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">200</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1870</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-6" aria-labelledby="table-column-header-6">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-7" data-accordion-target="#table-column-body-7" aria-expanded="false" aria-controls="table-column-body-7">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              Apple Watch SE
                          </th>
                          <td class="px-4 py-3">Watch</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$399</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">657</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">5067</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-7" aria-labelledby="table-column-header-7">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-8" data-accordion-target="#table-column-body-8" aria-expanded="false" aria-controls="table-column-body-8">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              NIKON D850
                          </th>
                          <td class="px-4 py-3">Photo</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Nikon</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$599</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">465</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1870</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-8" aria-labelledby="table-column-header-8">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" id="table-column-header-9" data-accordion-target="#table-column-body-9" aria-expanded="false" aria-controls="table-column-body-9">
                          <td class="px-4 py-3 w-4">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td class="p-3 w-4">
                              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewbox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </td>
                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                              Monitor BenQ EX2710Q
                          </th>
                          <td class="px-4 py-3">TV/Monitor</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">BenQ</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$499</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">354</td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">76</td>
                          <td class="px-4 py-3 whitespace-nowrap">
                              <div class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-800">Active</div>
                          </td>
                      </tr>
                      <tr class="hidden flex-1 overflow-x-auto w-full" id="table-column-body-9" aria-labelledby="table-column-header-9">
                          <td class="p-4 border-b dark:border-gray-700" colspan="9">
                              <div class="grid grid-cols-4 gap-4 mb-4">
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                                  <div class="relative p-2 bg-gray-100 rounded-lg sm:w-full h-32 sm:h-36 dark:bg-gray-700 flex items-center justify-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image" class="h-full w-auto">
                                  </div>
                              </div>
                              <div>
                                  <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Details</h6>
                                  <div class="text-base text-gray-500 dark:text-gray-400 max-w-screen-md">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
                              </div>
                              <div class="grid grid-cols-4 gap-4 mt-4">
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Product State</h6>
                                      <div class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          New
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col justify-between">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Shipping</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                          </svg>
                                          Worldwide
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Colors</h6>
                                      <div class="flex items-center space-x-2">
                                          <div class="rounded-full h-6 w-6 bg-purple-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-indigo-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-primary-600"></div>
                                          <div class="rounded-full h-6 w-6 bg-pink-400"></div>
                                          <div class="rounded-full h-6 w-6 bg-teal-300"></div>
                                          <div class="rounded-full h-6 w-6 bg-green-300"></div>
                                      </div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Brand</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Apple</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Sold by</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Ships from</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">Flowbite</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Dimensions (cm)</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">105 x 15 x 23</div>
                                  </div>
                                  <div class="relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                      <h6 class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white">Item weight</h6>
                                      <div class="flex items-center text-gray-500 dark:text-gray-400">12kg</div>
                                  </div>
                              </div>
                              <div class="flex items-center space-x-3 mt-4">
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                      </svg>
                                      Edit
                                  </button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                                  <button type="button" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                      </svg>
                                      Delete
                                  </button>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-4 pt-3 pb-4" aria-label="Table navigation">
              <div class="text-xs flex items-center space-x-5">
                  <div>
                      <div class="text-gray-500 dark:text-gray-400 mb-1">Purchase price</div>
                      <div class="dark:text-white font-medium">$ 3,567,890</div>
                  </div>
                  <div>
                      <div class="text-gray-500 dark:text-gray-400 mb-1">Total selling price</div>
                      <div class="dark:text-white font-medium">$ 8,489,400</div>
                  </div>
              </div>
              <div class="flex items-center space-x-4"><button type="button" class="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">Print barcodes</button><button type="button" class="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">Duplicate</button><button type="button" class="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Export CSV</button></div>
          </div>
      </div>
  </div>
</section>
```

## Project management table (user tasks)

Use this example to show a list of tasks (to-do items) with checkboxes, filter elements and user avatars inside a responsive table component.

```html
<section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
    <div class="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="border-b dark:border-gray-700 mx-4">
                <div class="flex items-center justify-between space-x-4 pt-3">
                    <div class="flex-1 flex items-center space-x-3">
                        <h5 class="dark:text-white font-semibold">All Tasks</h5>
                    </div>
                </div>
                <div class="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
                    <div class="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center">
                        <form class="w-full md:max-w-sm flex-1 md:mr-4">
                            <label for="default-search" class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search..." required="">
                                <button type="submit" class="text-white absolute right-0 bottom-0 top-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
                            </div>
                        </form>
                        <div class="flex items-center space-x-4">
                            <div>
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" type="button" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" />
                                    </svg>
                                    Filter
                                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                                <div id="filterDropdown" class="z-10 hidden p-3 bg-white rounded-lg shadow w-56 dark:bg-gray-700">
                                    <h6 class="mb-2 text-sm font-medium text-gray-900 dark:text-white">By status</h6>
                                    <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                        <li>
                                            <label class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                                                <input type="checkbox" value="" class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                In progress
                                            </label>
                                        </li>
                                        <li>
                                            <label class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                                                <input type="checkbox" value="" checked="" class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                In review
                                            </label>
                                        </li>
                                        <li>
                                            <label class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                                                <input type="checkbox" value="" class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                Completed
                                            </label>
                                        </li>
                                        <li>
                                            <label class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                                                <input type="checkbox" value="" class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                Canceled
                                            </label>
                                        </li>
                                    </ul>
                                    <h6 class="mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">By number of users</h6>
                                    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                        <li>
                                            <label class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                                                <input type="checkbox" value="" checked="" class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                5-10 peoples
                                            </label>
                                        </li>
                                        <li>
                                            <label class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                                                <input type="checkbox" value="" class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                10+ peoples
                                            </label>
                                        </li>
                                        <li>
                                            <label class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
                                                <input type="checkbox" value="" class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                More than 10 peoples
                                            </label>
                                        </li>
                                    </ul>
                                    <a href="#" class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline mt-4 ml-1.5">Apply to all projects</a>
                                </div>
                            </div>
                            <div>
                                <button id="configurationDropdownButton" data-dropdown-toggle="configurationDropdown" type="button" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="h-4 w-4 mr-2 text-gray-400" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                                    </svg>
                                    Configurations
                                </button>
                                <div id="configurationDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="configurationDropdownButton">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">By Category</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">By Brand</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Reset</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-auto flex flex-col md:flex-row mb-3 md:mb-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Add new task
                        </button>
                    </div>
                </div>
            </div>
            <div class="mx-4 pb-3 flex flex-wrap">
                <div class="hidden md:flex items-center text-sm font-medium text-gray-900 dark:text-white mr-4 mt-3">Show only:</div>
                <div class="flex flex-wrap">
                    <div class="flex items-center mt-3 mr-4">
                        <input id="all-tasks" type="radio" value="" name="show-only" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="all-tasks" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                    </div>
                    <div class="flex items-center mr-4 mt-3">
                        <input id="completed" type="radio" value="" name="show-only" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="completed" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Completed tasks</label>
                    </div>
                    <div class="flex items-center mr-4 mt-3">
                        <input id="in-progress" type="radio" value="" name="show-only" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="in-progress" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tasks in progress</label>
                    </div>
                    <div class="flex items-center mr-4 mt-3">
                        <input id="in-review" type="radio" value="" name="show-only" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="in-review" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tasks in review</label>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-all" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-4 py-3">Task</th>
                            <th scope="col" class="px-4 py-3">Status</th>
                            <th scope="col" class="px-4 py-3">Users</th>
                            <th scope="col" class="px-4 py-3 min-w-[14rem]">Progress</th>
                            <th scope="col" class="px-4 py-3">Preview</th>
                            <th scope="col" class="px-4 py-3">Time Tracking</th>
                            <th scope="col" class="px-4 py-3">Due Date</th>
                            <th scope="col" class="px-4 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Upload feed and Reels in Instagram</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">In progress</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <a href="#" class="flex-shrink-0 flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">+5</a>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">75%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-primary-600 h-1.5 rounded-full" style="width: 75%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    <span class="text-green-500">6:47</span>
                                    /8:00
                                    <button class="bg-orange-500 hover:bg-orange-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">23 Nov 2022</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Crossplatform analysis</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Completed</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-6.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-7.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-2.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <a href="#" class="flex-shrink-0 flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">+2</a>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">100%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-green-500 h-1.5 rounded-full" style="width: 100%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    7:00
                                    <button class="bg-green-500 hover:bg-green-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">03 Nov 2022</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Product features analysis</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">In progress</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-8.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">50%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-primary-600 h-1.5 rounded-full" style="width: 50%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    <span class="text-green-500">3:25</span>
                                    /8:00
                                    <button class="bg-orange-500 hover:bg-orange-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">Yesterday</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Create user story</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Completed</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-2.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-5.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">100%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-green-500 h-1.5 rounded-full" style="width: 100%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    8:00
                                    <button class="bg-green-500 hover:bg-green-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">23 Nov 2022</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Users profile update</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">In progress</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-5.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <a href="#" class="flex-shrink-0 flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">+2</a>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">20%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-primary-600 h-1.5 rounded-full" style="width: 20%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    <span class="text-green-500">4:21</span>
                                    /8:00
                                    <button class="bg-orange-500 hover:bg-orange-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">Yesterday</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">User flow update</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Completed</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-6.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-7.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">100%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-green-500 h-1.5 rounded-full" style="width: 100%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    7:00
                                    <button class="bg-green-500 hover:bg-green-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">23 Oct 2022</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Update design system</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">In review</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">100%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-yellow-300 h-1.5 rounded-full" style="width: 100%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    7:00
                                    <button class="bg-green-500 hover:bg-green-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">02 Now 2022</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Create a new logo</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Completed</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-2.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <a href="#" class="flex-shrink-0 flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">+2</a>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">100%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-green-500 h-1.5 rounded-full" style="width: 100%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    5:00
                                    <button class="bg-green-500 hover:bg-green-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">30 Oct 2022</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Screen structure</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">In review</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-8.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">100%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-yellow-300 h-1.5 rounded-full" style="width: 100%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    2:00
                                    <button class="bg-green-500 hover:bg-green-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">23 Nov 2022</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-2 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Implement GPT 3</th>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">In progress</span>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap">
                                <div class="flex -space-x-4 w-28">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-5.png" alt="" class="w-10 h-10 flex-shrink-0 border-2 border-white rounded-full dark:border-gray-800">
                                    <a href="#" class="flex-shrink-0 flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">+2</a>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">
                                <div class="flex justify-end mb-1">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">25%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div class="bg-primary-600 h-1.5 rounded-full" style="width: 25%"></div>
                                </div>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Website
                                </a>
                            </td>
                            <td class="px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="px-2 py-1 border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-1 text-gray-400" viewbox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                    </svg>
                                    <span class="text-green-500">3:11</span>
                                    /8:00
                                    <button class="bg-orange-500 hover:bg-orange-700 text-white p-1 rounded-md ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">Today</td>
                            <td class="px-4 py-2">
                                <button id="-dropdown-button" type="button" data-dropdown-toggle="-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                    of
                    <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                </span>
                <ul class="inline-flex items-stretch -space-x-px">
                    <li>
                        <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</section>
```

## User management table (CRUD)

Use this example to show all the users from an application inside a row where you can show the avatar, role, status, social profiles, and CRUD actions.

```html
<section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
  <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">
      <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div class="px-4 divide-y dark:divide-gray-700">
              <div class="flex flex-col py-3 space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
                  <div class="flex items-center flex-1 space-x-4">
                      <h5>
                          <span class="text-gray-500">All Users:</span>
                          <span class="dark:text-white">1,356,546</span>
                      </h5>
                      <h5>
                          <span class="text-gray-500">Projects:</span>
                          <span class="dark:text-white">884</span>
                      </h5>
                  </div>
                  <div class="flex flex-col items-start flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                      <button type="button" class="inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2" aria-hidden="true">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                          </svg>
                          Table settings
                      </button>
                  </div>
              </div>
              <div class="flex flex-col items-stretch justify-between py-4 space-y-3 md:flex-row md:items-center md:space-y-0">
                  <button type="button" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                      <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                      </svg>
                      Add new user
                  </button>
                  <div class="inline-flex flex-col rounded-md shadow-sm md:flex-row" role="group"><button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-t-lg md:rounded-tr-none md:rounded-l-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">Suspend all</button><button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 border-x md:border-x-0 md:border-t md:border-b hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">Archive all</button><button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-b-lg md:rounded-bl-none md:rounded-r-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">Delete all</button></div>
              </div>
          </div>
          <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="p-4">
                              <div class="flex items-center">
                                  <input id="checkbox-all" type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-all" class="sr-only">checkbox</label>
                              </div>
                          </th>
                          <th scope="col" class="px-4 py-3">User</th>
                          <th scope="col" class="px-4 py-3">User Role</th>
                          <th scope="col" class="px-4 py-3">Status</th>
                          <th scope="col" class="px-4 py-3 whitespace-nowrap">Social profile</th>
                          <th scope="col" class="px-4 py-3">Promote</th>
                          <th scope="col" class="px-4 py-3">Rating</th>
                          <th scope="col" class="px-4 py-3 whitespace-nowrap">Last Login</th>
                          <th scope="col" class="px-4 py-3">
                              <span class="sr-only">Actions</span>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Jese Leos
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                                  </svg>
                                  Administrator
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-green-500 border rounded-full"></div>
                                  Active
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M6.563.75C3.352.75.75 3.375.75 6.563a5.811 5.811 0 0 0 5.813 5.812c3.187 0 5.812-2.602 5.812-5.813C12.375 3.376 9.75.75 6.562.75Zm3.82 2.695a4.818 4.818 0 0 1 1.125 3.094c-.164-.047-1.805-.375-3.445-.164-.141-.328-.258-.61-.446-.984 1.852-.75 2.672-1.805 2.766-1.946Zm-.54-.586C9.75 3 9 4.008 7.244 4.664c-.821-1.5-1.712-2.719-1.852-2.906a4.972 4.972 0 0 1 4.453 1.101ZM4.43 2.086A28.23 28.23 0 0 1 6.28 4.969c-2.32.61-4.36.61-4.593.586a5.03 5.03 0 0 1 2.742-3.47Zm-2.836 4.5v-.164c.21.023 2.625.047 5.086-.703.164.281.28.562.422.843-1.805.516-3.446 1.97-4.243 3.329a4.873 4.873 0 0 1-1.265-3.305ZM3.492 10.5c.54-1.055 1.946-2.438 3.938-3.117a19.382 19.382 0 0 1 1.054 3.773 4.965 4.965 0 0 1-4.992-.656Zm5.836.188c-.047-.282-.328-1.735-.96-3.54 1.546-.234 2.905.165 3.093.211a5.06 5.06 0 0 1-2.133 3.329Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="currentColor" aria-hidden="true">
                                          <path d="M11.508 2.497c.469-.351.89-.773 1.219-1.265a4.613 4.613 0 0 1-1.407.375c.516-.305.89-.774 1.078-1.36a5.197 5.197 0 0 1-1.546.61A2.461 2.461 0 0 0 9.047.083a2.46 2.46 0 0 0-2.461 2.461c0 .188.023.375.07.563A7.14 7.14 0 0 1 1.57.529c-.21.351-.328.773-.328 1.242 0 .844.422 1.594 1.102 2.039-.399-.024-.797-.117-1.125-.305v.024c0 1.195.843 2.18 1.968 2.414a2.748 2.748 0 0 1-.632.093c-.164 0-.305-.023-.47-.046A2.45 2.45 0 0 0 4.384 7.7a4.948 4.948 0 0 1-3.047 1.055c-.211 0-.399-.023-.586-.047A6.857 6.857 0 0 0 4.523 9.81c4.524 0 6.985-3.727 6.985-6.985v-.328Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="currentColor" aria-hidden="true">
                                          <path d="M12.188 6.203c0-.375-.047-.656-.094-.96H6.563v1.991h3.28c-.116.868-.984 2.508-3.28 2.508-1.993 0-3.61-1.64-3.61-3.68 0-3.257 3.844-4.757 5.906-2.765l1.594-1.524A5.637 5.637 0 0 0 6.563.25 5.797 5.797 0 0 0 .75 6.063a5.782 5.782 0 0 0 5.813 5.812c3.351 0 5.625-2.344 5.625-5.672Z" />
                                      </svg>
                                  </a>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-green-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                  </svg>
                                  4.7
                              </div>
                          </td>
                          <td class="px-4 py-2">20 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-0" type="button" data-dropdown-toggle="dropdown-0" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-0" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-0">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Bonnie Green
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                  Viewer
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-green-500 border rounded-full"></div>
                                  Active
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M6.563.75C3.352.75.75 3.375.75 6.563a5.811 5.811 0 0 0 5.813 5.812c3.187 0 5.812-2.602 5.812-5.813C12.375 3.376 9.75.75 6.562.75Zm3.82 2.695a4.818 4.818 0 0 1 1.125 3.094c-.164-.047-1.805-.375-3.445-.164-.141-.328-.258-.61-.446-.984 1.852-.75 2.672-1.805 2.766-1.946Zm-.54-.586C9.75 3 9 4.008 7.244 4.664c-.821-1.5-1.712-2.719-1.852-2.906a4.972 4.972 0 0 1 4.453 1.101ZM4.43 2.086A28.23 28.23 0 0 1 6.28 4.969c-2.32.61-4.36.61-4.593.586a5.03 5.03 0 0 1 2.742-3.47Zm-2.836 4.5v-.164c.21.023 2.625.047 5.086-.703.164.281.28.562.422.843-1.805.516-3.446 1.97-4.243 3.329a4.873 4.873 0 0 1-1.265-3.305ZM3.492 10.5c.54-1.055 1.946-2.438 3.938-3.117a19.382 19.382 0 0 1 1.054 3.773 4.965 4.965 0 0 1-4.992-.656Zm5.836.188c-.047-.282-.328-1.735-.96-3.54 1.546-.234 2.905.165 3.093.211a5.06 5.06 0 0 1-2.133 3.329Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="currentColor" aria-hidden="true">
                                          <path d="M11.508 2.497c.469-.351.89-.773 1.219-1.265a4.613 4.613 0 0 1-1.407.375c.516-.305.89-.774 1.078-1.36a5.197 5.197 0 0 1-1.546.61A2.461 2.461 0 0 0 9.047.083a2.46 2.46 0 0 0-2.461 2.461c0 .188.023.375.07.563A7.14 7.14 0 0 1 1.57.529c-.21.351-.328.773-.328 1.242 0 .844.422 1.594 1.102 2.039-.399-.024-.797-.117-1.125-.305v.024c0 1.195.843 2.18 1.968 2.414a2.748 2.748 0 0 1-.632.093c-.164 0-.305-.023-.47-.046A2.45 2.45 0 0 0 4.384 7.7a4.948 4.948 0 0 1-3.047 1.055c-.211 0-.399-.023-.586-.047A6.857 6.857 0 0 0 4.523 9.81c4.524 0 6.985-3.727 6.985-6.985v-.328Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="currentColor" aria-hidden="true">
                                          <path d="M12.188 6.203c0-.375-.047-.656-.094-.96H6.563v1.991h3.28c-.116.868-.984 2.508-3.28 2.508-1.993 0-3.61-1.64-3.61-3.68 0-3.257 3.844-4.757 5.906-2.765l1.594-1.524A5.637 5.637 0 0 0 6.563.25 5.797 5.797 0 0 0 .75 6.063a5.782 5.782 0 0 0 5.813 5.812c3.351 0 5.625-2.344 5.625-5.672Z" />
                                      </svg>
                                  </a>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" checked="" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-red-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                  </svg>
                                  3.9
                              </div>
                          </td>
                          <td class="px-4 py-2">23 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-1" type="button" data-dropdown-toggle="dropdown-1" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-1">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-2.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Leslie Livingston
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" />
                                  </svg>
                                  Moderator
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-red-500 border rounded-full"></div>
                                  Inactive
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M6.563.75C3.352.75.75 3.375.75 6.563a5.811 5.811 0 0 0 5.813 5.812c3.187 0 5.812-2.602 5.812-5.813C12.375 3.376 9.75.75 6.562.75Zm3.82 2.695a4.818 4.818 0 0 1 1.125 3.094c-.164-.047-1.805-.375-3.445-.164-.141-.328-.258-.61-.446-.984 1.852-.75 2.672-1.805 2.766-1.946Zm-.54-.586C9.75 3 9 4.008 7.244 4.664c-.821-1.5-1.712-2.719-1.852-2.906a4.972 4.972 0 0 1 4.453 1.101ZM4.43 2.086A28.23 28.23 0 0 1 6.28 4.969c-2.32.61-4.36.61-4.593.586a5.03 5.03 0 0 1 2.742-3.47Zm-2.836 4.5v-.164c.21.023 2.625.047 5.086-.703.164.281.28.562.422.843-1.805.516-3.446 1.97-4.243 3.329a4.873 4.873 0 0 1-1.265-3.305ZM3.492 10.5c.54-1.055 1.946-2.438 3.938-3.117a19.382 19.382 0 0 1 1.054 3.773 4.965 4.965 0 0 1-4.992-.656Zm5.836.188c-.047-.282-.328-1.735-.96-3.54 1.546-.234 2.905.165 3.093.211a5.06 5.06 0 0 1-2.133 3.329Z" />
                                      </svg>
                                  </a>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-green-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                  </svg>
                                  4.8
                              </div>
                          </td>
                          <td class="px-4 py-2">19 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-2" type="button" data-dropdown-toggle="dropdown-2" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-2">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Micheal Gough
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" />
                                  </svg>
                                  Moderator
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-green-500 border rounded-full"></div>
                                  Active
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M6.563.75C3.352.75.75 3.375.75 6.563a5.811 5.811 0 0 0 5.813 5.812c3.187 0 5.812-2.602 5.812-5.813C12.375 3.376 9.75.75 6.562.75Zm3.82 2.695a4.818 4.818 0 0 1 1.125 3.094c-.164-.047-1.805-.375-3.445-.164-.141-.328-.258-.61-.446-.984 1.852-.75 2.672-1.805 2.766-1.946Zm-.54-.586C9.75 3 9 4.008 7.244 4.664c-.821-1.5-1.712-2.719-1.852-2.906a4.972 4.972 0 0 1 4.453 1.101ZM4.43 2.086A28.23 28.23 0 0 1 6.28 4.969c-2.32.61-4.36.61-4.593.586a5.03 5.03 0 0 1 2.742-3.47Zm-2.836 4.5v-.164c.21.023 2.625.047 5.086-.703.164.281.28.562.422.843-1.805.516-3.446 1.97-4.243 3.329a4.873 4.873 0 0 1-1.265-3.305ZM3.492 10.5c.54-1.055 1.946-2.438 3.938-3.117a19.382 19.382 0 0 1 1.054 3.773 4.965 4.965 0 0 1-4.992-.656Zm5.836.188c-.047-.282-.328-1.735-.96-3.54 1.546-.234 2.905.165 3.093.211a5.06 5.06 0 0 1-2.133 3.329Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="currentColor" aria-hidden="true">
                                          <path d="M11.508 2.497c.469-.351.89-.773 1.219-1.265a4.613 4.613 0 0 1-1.407.375c.516-.305.89-.774 1.078-1.36a5.197 5.197 0 0 1-1.546.61A2.461 2.461 0 0 0 9.047.083a2.46 2.46 0 0 0-2.461 2.461c0 .188.023.375.07.563A7.14 7.14 0 0 1 1.57.529c-.21.351-.328.773-.328 1.242 0 .844.422 1.594 1.102 2.039-.399-.024-.797-.117-1.125-.305v.024c0 1.195.843 2.18 1.968 2.414a2.748 2.748 0 0 1-.632.093c-.164 0-.305-.023-.47-.046A2.45 2.45 0 0 0 4.384 7.7a4.948 4.948 0 0 1-3.047 1.055c-.211 0-.399-.023-.586-.047A6.857 6.857 0 0 0 4.523 9.81c4.524 0 6.985-3.727 6.985-6.985v-.328Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="currentColor" aria-hidden="true">
                                          <path d="M12.188 6.203c0-.375-.047-.656-.094-.96H6.563v1.991h3.28c-.116.868-.984 2.508-3.28 2.508-1.993 0-3.61-1.64-3.61-3.68 0-3.257 3.844-4.757 5.906-2.765l1.594-1.524A5.637 5.637 0 0 0 6.563.25 5.797 5.797 0 0 0 .75 6.063a5.782 5.782 0 0 0 5.813 5.812c3.351 0 5.625-2.344 5.625-5.672Z" />
                                      </svg>
                                  </a>
                                  <div>+2</div>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" checked="" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-green-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                  </svg>
                                  5
                              </div>
                          </td>
                          <td class="px-4 py-2">27 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-3" type="button" data-dropdown-toggle="dropdown-3" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-3">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-4.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Joseph McFall
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                  Viewer
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-green-500 border rounded-full"></div>
                                  Active
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M6.563.75C3.352.75.75 3.375.75 6.563a5.811 5.811 0 0 0 5.813 5.812c3.187 0 5.812-2.602 5.812-5.813C12.375 3.376 9.75.75 6.562.75Zm3.82 2.695a4.818 4.818 0 0 1 1.125 3.094c-.164-.047-1.805-.375-3.445-.164-.141-.328-.258-.61-.446-.984 1.852-.75 2.672-1.805 2.766-1.946Zm-.54-.586C9.75 3 9 4.008 7.244 4.664c-.821-1.5-1.712-2.719-1.852-2.906a4.972 4.972 0 0 1 4.453 1.101ZM4.43 2.086A28.23 28.23 0 0 1 6.28 4.969c-2.32.61-4.36.61-4.593.586a5.03 5.03 0 0 1 2.742-3.47Zm-2.836 4.5v-.164c.21.023 2.625.047 5.086-.703.164.281.28.562.422.843-1.805.516-3.446 1.97-4.243 3.329a4.873 4.873 0 0 1-1.265-3.305ZM3.492 10.5c.54-1.055 1.946-2.438 3.938-3.117a19.382 19.382 0 0 1 1.054 3.773 4.965 4.965 0 0 1-4.992-.656Zm5.836.188c-.047-.282-.328-1.735-.96-3.54 1.546-.234 2.905.165 3.093.211a5.06 5.06 0 0 1-2.133 3.329Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="currentColor" aria-hidden="true">
                                          <path d="M11.508 2.497c.469-.351.89-.773 1.219-1.265a4.613 4.613 0 0 1-1.407.375c.516-.305.89-.774 1.078-1.36a5.197 5.197 0 0 1-1.546.61A2.461 2.461 0 0 0 9.047.083a2.46 2.46 0 0 0-2.461 2.461c0 .188.023.375.07.563A7.14 7.14 0 0 1 1.57.529c-.21.351-.328.773-.328 1.242 0 .844.422 1.594 1.102 2.039-.399-.024-.797-.117-1.125-.305v.024c0 1.195.843 2.18 1.968 2.414a2.748 2.748 0 0 1-.632.093c-.164 0-.305-.023-.47-.046A2.45 2.45 0 0 0 4.384 7.7a4.948 4.948 0 0 1-3.047 1.055c-.211 0-.399-.023-.586-.047A6.857 6.857 0 0 0 4.523 9.81c4.524 0 6.985-3.727 6.985-6.985v-.328Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="currentColor" aria-hidden="true">
                                          <path d="M12.188 6.203c0-.375-.047-.656-.094-.96H6.563v1.991h3.28c-.116.868-.984 2.508-3.28 2.508-1.993 0-3.61-1.64-3.61-3.68 0-3.257 3.844-4.757 5.906-2.765l1.594-1.524A5.637 5.637 0 0 0 6.563.25 5.797 5.797 0 0 0 .75 6.063a5.782 5.782 0 0 0 5.813 5.812c3.351 0 5.625-2.344 5.625-5.672Z" />
                                      </svg>
                                  </a>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-red-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                  </svg>
                                  4.2
                              </div>
                          </td>
                          <td class="px-4 py-2">20 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-4" type="button" data-dropdown-toggle="dropdown-4" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-4" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-4">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-5.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Robert Brown
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                  Viewer
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-red-500 border rounded-full"></div>
                                  Inactive
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M6.563.75C3.352.75.75 3.375.75 6.563a5.811 5.811 0 0 0 5.813 5.812c3.187 0 5.812-2.602 5.812-5.813C12.375 3.376 9.75.75 6.562.75Zm3.82 2.695a4.818 4.818 0 0 1 1.125 3.094c-.164-.047-1.805-.375-3.445-.164-.141-.328-.258-.61-.446-.984 1.852-.75 2.672-1.805 2.766-1.946Zm-.54-.586C9.75 3 9 4.008 7.244 4.664c-.821-1.5-1.712-2.719-1.852-2.906a4.972 4.972 0 0 1 4.453 1.101ZM4.43 2.086A28.23 28.23 0 0 1 6.28 4.969c-2.32.61-4.36.61-4.593.586a5.03 5.03 0 0 1 2.742-3.47Zm-2.836 4.5v-.164c.21.023 2.625.047 5.086-.703.164.281.28.562.422.843-1.805.516-3.446 1.97-4.243 3.329a4.873 4.873 0 0 1-1.265-3.305ZM3.492 10.5c.54-1.055 1.946-2.438 3.938-3.117a19.382 19.382 0 0 1 1.054 3.773 4.965 4.965 0 0 1-4.992-.656Zm5.836.188c-.047-.282-.328-1.735-.96-3.54 1.546-.234 2.905.165 3.093.211a5.06 5.06 0 0 1-2.133 3.329Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="currentColor" aria-hidden="true">
                                          <path d="M11.508 2.497c.469-.351.89-.773 1.219-1.265a4.613 4.613 0 0 1-1.407.375c.516-.305.89-.774 1.078-1.36a5.197 5.197 0 0 1-1.546.61A2.461 2.461 0 0 0 9.047.083a2.46 2.46 0 0 0-2.461 2.461c0 .188.023.375.07.563A7.14 7.14 0 0 1 1.57.529c-.21.351-.328.773-.328 1.242 0 .844.422 1.594 1.102 2.039-.399-.024-.797-.117-1.125-.305v.024c0 1.195.843 2.18 1.968 2.414a2.748 2.748 0 0 1-.632.093c-.164 0-.305-.023-.47-.046A2.45 2.45 0 0 0 4.384 7.7a4.948 4.948 0 0 1-3.047 1.055c-.211 0-.399-.023-.586-.047A6.857 6.857 0 0 0 4.523 9.81c4.524 0 6.985-3.727 6.985-6.985v-.328Z" />
                                      </svg>
                                  </a>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-green-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                  </svg>
                                  4.5
                              </div>
                          </td>
                          <td class="px-4 py-2">20 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-5" type="button" data-dropdown-toggle="dropdown-5" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-5" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-5">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-6.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Karen Nelson
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                  Viewer
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-red-500 border rounded-full"></div>
                                  Inactive
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M6.563.75C3.352.75.75 3.375.75 6.563a5.811 5.811 0 0 0 5.813 5.812c3.187 0 5.812-2.602 5.812-5.813C12.375 3.376 9.75.75 6.562.75Zm3.82 2.695a4.818 4.818 0 0 1 1.125 3.094c-.164-.047-1.805-.375-3.445-.164-.141-.328-.258-.61-.446-.984 1.852-.75 2.672-1.805 2.766-1.946Zm-.54-.586C9.75 3 9 4.008 7.244 4.664c-.821-1.5-1.712-2.719-1.852-2.906a4.972 4.972 0 0 1 4.453 1.101ZM4.43 2.086A28.23 28.23 0 0 1 6.28 4.969c-2.32.61-4.36.61-4.593.586a5.03 5.03 0 0 1 2.742-3.47Zm-2.836 4.5v-.164c.21.023 2.625.047 5.086-.703.164.281.28.562.422.843-1.805.516-3.446 1.97-4.243 3.329a4.873 4.873 0 0 1-1.265-3.305ZM3.492 10.5c.54-1.055 1.946-2.438 3.938-3.117a19.382 19.382 0 0 1 1.054 3.773 4.965 4.965 0 0 1-4.992-.656Zm5.836.188c-.047-.282-.328-1.735-.96-3.54 1.546-.234 2.905.165 3.093.211a5.06 5.06 0 0 1-2.133 3.329Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="currentColor" aria-hidden="true">
                                          <path d="M11.508 2.497c.469-.351.89-.773 1.219-1.265a4.613 4.613 0 0 1-1.407.375c.516-.305.89-.774 1.078-1.36a5.197 5.197 0 0 1-1.546.61A2.461 2.461 0 0 0 9.047.083a2.46 2.46 0 0 0-2.461 2.461c0 .188.023.375.07.563A7.14 7.14 0 0 1 1.57.529c-.21.351-.328.773-.328 1.242 0 .844.422 1.594 1.102 2.039-.399-.024-.797-.117-1.125-.305v.024c0 1.195.843 2.18 1.968 2.414a2.748 2.748 0 0 1-.632.093c-.164 0-.305-.023-.47-.046A2.45 2.45 0 0 0 4.384 7.7a4.948 4.948 0 0 1-3.047 1.055c-.211 0-.399-.023-.586-.047A6.857 6.857 0 0 0 4.523 9.81c4.524 0 6.985-3.727 6.985-6.985v-.328Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="currentColor" aria-hidden="true">
                                          <path d="M12.188 6.203c0-.375-.047-.656-.094-.96H6.563v1.991h3.28c-.116.868-.984 2.508-3.28 2.508-1.993 0-3.61-1.64-3.61-3.68 0-3.257 3.844-4.757 5.906-2.765l1.594-1.524A5.637 5.637 0 0 0 6.563.25 5.797 5.797 0 0 0 .75 6.063a5.782 5.782 0 0 0 5.813 5.812c3.351 0 5.625-2.344 5.625-5.672Z" />
                                      </svg>
                                  </a>
                                  <div>+2</div>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-red-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                  </svg>
                                  4.1
                              </div>
                          </td>
                          <td class="px-4 py-2">18 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-6" type="button" data-dropdown-toggle="dropdown-6" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-6" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-6">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-7.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Helene Engels
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" />
                                  </svg>
                                  Moderator
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-green-500 border rounded-full"></div>
                                  Active
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M6.563.75C3.352.75.75 3.375.75 6.563a5.811 5.811 0 0 0 5.813 5.812c3.187 0 5.812-2.602 5.812-5.813C12.375 3.376 9.75.75 6.562.75Zm3.82 2.695a4.818 4.818 0 0 1 1.125 3.094c-.164-.047-1.805-.375-3.445-.164-.141-.328-.258-.61-.446-.984 1.852-.75 2.672-1.805 2.766-1.946Zm-.54-.586C9.75 3 9 4.008 7.244 4.664c-.821-1.5-1.712-2.719-1.852-2.906a4.972 4.972 0 0 1 4.453 1.101ZM4.43 2.086A28.23 28.23 0 0 1 6.28 4.969c-2.32.61-4.36.61-4.593.586a5.03 5.03 0 0 1 2.742-3.47Zm-2.836 4.5v-.164c.21.023 2.625.047 5.086-.703.164.281.28.562.422.843-1.805.516-3.446 1.97-4.243 3.329a4.873 4.873 0 0 1-1.265-3.305ZM3.492 10.5c.54-1.055 1.946-2.438 3.938-3.117a19.382 19.382 0 0 1 1.054 3.773 4.965 4.965 0 0 1-4.992-.656Zm5.836.188c-.047-.282-.328-1.735-.96-3.54 1.546-.234 2.905.165 3.093.211a5.06 5.06 0 0 1-2.133 3.329Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="currentColor" aria-hidden="true">
                                          <path d="M11.508 2.497c.469-.351.89-.773 1.219-1.265a4.613 4.613 0 0 1-1.407.375c.516-.305.89-.774 1.078-1.36a5.197 5.197 0 0 1-1.546.61A2.461 2.461 0 0 0 9.047.083a2.46 2.46 0 0 0-2.461 2.461c0 .188.023.375.07.563A7.14 7.14 0 0 1 1.57.529c-.21.351-.328.773-.328 1.242 0 .844.422 1.594 1.102 2.039-.399-.024-.797-.117-1.125-.305v.024c0 1.195.843 2.18 1.968 2.414a2.748 2.748 0 0 1-.632.093c-.164 0-.305-.023-.47-.046A2.45 2.45 0 0 0 4.384 7.7a4.948 4.948 0 0 1-3.047 1.055c-.211 0-.399-.023-.586-.047A6.857 6.857 0 0 0 4.523 9.81c4.524 0 6.985-3.727 6.985-6.985v-.328Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="currentColor" aria-hidden="true">
                                          <path d="M12.188 6.203c0-.375-.047-.656-.094-.96H6.563v1.991h3.28c-.116.868-.984 2.508-3.28 2.508-1.993 0-3.61-1.64-3.61-3.68 0-3.257 3.844-4.757 5.906-2.765l1.594-1.524A5.637 5.637 0 0 0 6.563.25 5.797 5.797 0 0 0 .75 6.063a5.782 5.782 0 0 0 5.813 5.812c3.351 0 5.625-2.344 5.625-5.672Z" />
                                      </svg>
                                  </a>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" checked="" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-red-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                  </svg>
                                  3.8
                              </div>
                          </td>
                          <td class="px-4 py-2">27 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-7" type="button" data-dropdown-toggle="dropdown-7" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-7" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-7">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-8.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Lana Byrd
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                  Viewer
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-green-500 border rounded-full"></div>
                                  Active
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-green-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                  </svg>
                                  4.8
                              </div>
                          </td>
                          <td class="px-4 py-2">20 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-8" type="button" data-dropdown-toggle="dropdown-8" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-8" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-8">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-9.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full">
                                  Neil Sims
                              </div>
                          </th>
                          <td class="px-4 py-2">
                              <div class="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" />
                                  </svg>
                                  Moderator
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <div class="w-3 h-3 mr-2 bg-red-500 border rounded-full"></div>
                                  Inactive
                              </div>
                          </td>
                          <td class="px-4 py-2 whitespace-nowrap">
                              <div class="flex items-center space-x-1.5">
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="m6.44 7 .329-2.156H4.683V3.437c0-.609.28-1.171 1.218-1.171h.961V.414S5.995.25 5.175.25c-1.711 0-2.836 1.055-2.836 2.93v1.664H.417V7h1.922v5.25h2.344V7H6.44Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M4.617 9.89c0-.046-.047-.093-.117-.093s-.117.047-.117.094c0 .046.047.093.117.07.07 0 .117-.024.117-.07Zm-.726-.117c0 .047.046.118.117.118.047.023.117 0 .14-.047 0-.047-.023-.094-.093-.117-.07-.024-.14 0-.164.046Zm1.054-.023c-.07 0-.117.047-.117.117 0 .047.07.07.14.047.071-.023.118-.047.095-.094 0-.047-.07-.093-.118-.07Zm1.524-9C3.234.75.75 3.234.75 6.469c0 2.601 1.617 4.828 3.96 5.625.306.047.4-.14.4-.281v-1.454s-1.641.352-1.993-.703c0 0-.258-.68-.633-.844 0 0-.539-.374.024-.374 0 0 .586.046.914.609.515.914 1.36.656 1.71.492.048-.375.188-.633.376-.797-1.313-.14-2.649-.328-2.649-2.578 0-.656.188-.96.563-1.383-.07-.164-.258-.773.07-1.593.469-.141 1.617.632 1.617.632a5.05 5.05 0 0 1 1.454-.187c.515 0 1.007.047 1.476.187 0 0 1.125-.797 1.617-.632.328.82.117 1.43.07 1.593.376.422.61.727.61 1.383 0 2.25-1.383 2.438-2.695 2.578.21.188.398.54.398 1.102 0 .773-.023 1.758-.023 1.945 0 .164.117.352.421.281 2.344-.773 3.938-3 3.938-5.601C12.375 3.234 9.727.75 6.469.75ZM3.023 8.836c-.046.023-.023.094 0 .14.047.024.094.047.141.024.023-.023.023-.094-.023-.14-.047-.024-.094-.047-.118-.024Zm-.257-.188c-.024.047 0 .07.046.094.047.024.094.024.118-.023 0-.024-.024-.047-.07-.07-.047-.024-.07-.024-.094 0Zm.75.844c-.024.024-.024.094.046.14.047.048.118.071.141.024.024-.023.024-.094-.023-.14-.047-.047-.118-.07-.164-.024Zm-.258-.351c-.047.023-.047.093 0 .14.047.047.094.07.14.047.024-.023.024-.094 0-.14-.046-.047-.093-.07-.14-.047Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" aria-hidden="true">
                                          <path d="M6.563.75C3.352.75.75 3.375.75 6.563a5.811 5.811 0 0 0 5.813 5.812c3.187 0 5.812-2.602 5.812-5.813C12.375 3.376 9.75.75 6.562.75Zm3.82 2.695a4.818 4.818 0 0 1 1.125 3.094c-.164-.047-1.805-.375-3.445-.164-.141-.328-.258-.61-.446-.984 1.852-.75 2.672-1.805 2.766-1.946Zm-.54-.586C9.75 3 9 4.008 7.244 4.664c-.821-1.5-1.712-2.719-1.852-2.906a4.972 4.972 0 0 1 4.453 1.101ZM4.43 2.086A28.23 28.23 0 0 1 6.28 4.969c-2.32.61-4.36.61-4.593.586a5.03 5.03 0 0 1 2.742-3.47Zm-2.836 4.5v-.164c.21.023 2.625.047 5.086-.703.164.281.28.562.422.843-1.805.516-3.446 1.97-4.243 3.329a4.873 4.873 0 0 1-1.265-3.305ZM3.492 10.5c.54-1.055 1.946-2.438 3.938-3.117a19.382 19.382 0 0 1 1.054 3.773 4.965 4.965 0 0 1-4.992-.656Zm5.836.188c-.047-.282-.328-1.735-.96-3.54 1.546-.234 2.905.165 3.093.211a5.06 5.06 0 0 1-2.133 3.329Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="currentColor" aria-hidden="true">
                                          <path d="M11.508 2.497c.469-.351.89-.773 1.219-1.265a4.613 4.613 0 0 1-1.407.375c.516-.305.89-.774 1.078-1.36a5.197 5.197 0 0 1-1.546.61A2.461 2.461 0 0 0 9.047.083a2.46 2.46 0 0 0-2.461 2.461c0 .188.023.375.07.563A7.14 7.14 0 0 1 1.57.529c-.21.351-.328.773-.328 1.242 0 .844.422 1.594 1.102 2.039-.399-.024-.797-.117-1.125-.305v.024c0 1.195.843 2.18 1.968 2.414a2.748 2.748 0 0 1-.632.093c-.164 0-.305-.023-.47-.046A2.45 2.45 0 0 0 4.384 7.7a4.948 4.948 0 0 1-3.047 1.055c-.211 0-.399-.023-.586-.047A6.857 6.857 0 0 0 4.523 9.81c4.524 0 6.985-3.727 6.985-6.985v-.328Z" />
                                      </svg>
                                  </a>
                                  <a class="transition hover:text-gray-900 dark:hover:text-white" href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="currentColor" aria-hidden="true">
                                          <path d="M12.188 6.203c0-.375-.047-.656-.094-.96H6.563v1.991h3.28c-.116.868-.984 2.508-3.28 2.508-1.993 0-3.61-1.64-3.61-3.68 0-3.257 3.844-4.757 5.906-2.765l1.594-1.524A5.637 5.637 0 0 0 6.563.25 5.797 5.797 0 0 0 .75 6.063a5.782 5.782 0 0 0 5.813 5.812c3.351 0 5.625-2.344 5.625-5.672Z" />
                                      </svg>
                                  </a>
                              </div>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" name="promote">
                                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                              </label>
                          </td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1 text-green-500" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                  </svg>
                                  5
                              </div>
                          </td>
                          <td class="px-4 py-2">20 Nov 2022</td>
                          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <button id="dropdown-button-9" type="button" data-dropdown-toggle="dropdown-9" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                              </button>
                              <div id="dropdown-9" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-9">
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                      </li>
                                      <li>
                                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                      </li>
                                  </ul>
                                  <div class="py-1">
                                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                  </div>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
              <div class="flex items-center space-x-3">
                  <label for="rows" class="text-xs font-normal text-gray-500 dark:text-gray-400">Rows per page</label><select id="rows" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block py-1.5 pl-3.5 pr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"><option selected="" value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>
                  <div class="text-xs font-normal text-gray-500 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                      of
                      <span class="font-semibold text-gray-900 dark:text-white">100</span>
                  </div>
              </div>
              <ul class="inline-flex items-stretch -space-x-px">
                  <li>
                      <a href="#" class="flex text-sm w-20 items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                  </li>
                  <li>
                      <a href="#" class="flex text-sm w-20 items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                  </li>
              </ul>
          </nav>
      </div>
  </div>
</section>
```

## Comparison table

This example can be used to compare multiple data sets such as products inside a table showing the differences in specifications based on rows and columns.

```html
<section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
  <div class="max-w-screen-xl px-4 mx-auto lg:px-12">
    <!-- Start coding here -->
    <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-900 sm:rounded-lg">
      <div
        class="flex flex-col items-start justify-between p-4 space-y-3 dark:bg-gray-800 md:flex-row md:items-center md:space-y-0 md:space-x-4">
        <div class="flex items-center">
          <h5 class="mr-3 font-semibold dark:text-white">Compare Products</h5>
          <div data-tooltip-target="info-tooltip">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" viewbox="0 0 20 20"
                 fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
            </svg>
            <span class="sr-only">More info</span>
          </div>
          <div id="info-tooltip" role="tooltip"
               class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Selected Xbox Series S, PlayStation 5, and Xbox Series X
            <div class="tooltip-arrow" data-popper-arrow=""></div>
          </div>
        </div>
        <div
          class="flex flex-row items-center justify-end flex-shrink-0 w-auto space-x-3">
          <button type="button"
                  class="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
            </svg>
            Add new product
          </button>
          <button type="button"
                  class="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 text-gray-400" viewBox="0 0 20 20"
                 fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
            </svg>
            Reset all
          </button>
        </div>
      </div>
      <div class="mx-4 dark:mx-0 border-t dark:border-gray-700 dark:bg-gray-800"></div>
      <div
        class="flex flex-col items-center justify-between p-4 space-y-3 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4">
        <ul class="flex-wrap hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
          <li class="mr-4">
            <a href="#"
               class="inline-block px-4 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              General Information
            </a>
          </li>
          <li class="mr-4">
            <a href="#" class="inline-block px-4 py-2 text-white rounded-full bg-primary-600 active" aria-current="page">
              Technical Information
            </a>
          </li>
          <li class="mr-4">
            <a href="#"
               class="inline-block px-4 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              Delivery Information
            </a>
          </li>
          <li class="mr-4">
            <a href="#"
               class="inline-block px-4 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              Ratings
            </a>
          </li>
        </ul>

        <select id="list-navigation" class="md:hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option selected>Overview</option>
          <option value="general">General Information</option>
          <option value="technical">Technical Information</option>
          <option value="delivery">Delivery Information</option>
          <option value="ratings">Ratings</option>
        </select>

      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-900 dark:text-white">
          <tr>
            <th scope="col" class="px-4 py-3"></th>
            <th scope="col" class="px-4 py-3">
              <div class="text-lg">
                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png"
                     alt="iMac Front Image" class="w-auto h-32">
                <div class="mt-4">
                  Xbox Series S
                </div>
              </div>
            </th>
            <th scope="col" class="px-4 py-3">
              <div class="text-lg">
                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png"
                     alt="iMac Front Image" class="w-auto h-32">
                <div class="mt-4">
                  PlayStation 5
                </div>
              </div>
            </th>
            <th scope="col" class="px-4 py-3">
              <div class="text-lg">
                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png"
                     alt="iMac Front Image" class="w-auto h-32">
                <div class="mt-4">
                  Xbox Series X
                </div>
              </div>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th colspan="4" scope="row"
                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              General Information
            </th>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Brand</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sony</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Product Name</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series S</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">PlayStation 5</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series X</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Colors</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">White</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">White/Black</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Black</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Category</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Gaming/Console</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Gaming/Console</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Gaming/Console</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Price</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$499</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$599</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$299</td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th colspan="4" scope="row"
                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Technical Information
            </th>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Platform</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series S</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">PlayStation 5 Digital
              Edition
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series X</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">RAM</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">16GB GDDR6</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">16GB GDDR6</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">16GB GDDR</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">CPU</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">8-core, 3.6 GHz AMD
              Zen 2
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">8-core 3.5 GHz AMD Zen
              2
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">8-core 3.8 GHz AMD Zen
              2
            </td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">GPU</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">4 teraflop AMD RDNA 2
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">10.3 teraflop AMD RDNA
              2
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">12 teraflop AMD RDNA 2
            </td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Storage</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">512 GB custom NVMe SSD
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">825 GB custom SSD</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1 TB custom SSD</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Resolution</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Up to 2K</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Up to 8K</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Up to 8K</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Frame Rate</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Up to 120 fps</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Up to 120 fps</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Up to 120 fps</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Optical Drive</th>
            <td class="px-4 py-3 text-red-500 whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                      clip-rule="evenodd"/>
              </svg>
            </td>
            <td class="px-4 py-3 font-medium text-green-500 whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"/>
              </svg>
            </td>
            <td class="px-4 py-3 font-medium text-green-500 whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"/>
              </svg>
            </td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Controller</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
          </tr>
          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Web Connection</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Ethernet/Wi-Fi</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Ethernet/Wi-Fi</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Ethernet/Wi-Fi</td>
          </tr>

          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th colspan="4" scope="row"
                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Delivery
            </th>
          </tr>

          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Country</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Worldwide</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Worldwide</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Worldwide</td>
          </tr>

          <tr class="border-b dark:border-gray-600">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Duration</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">5-10 Days</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">30 Days</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">30 Days</td>
          </tr>

          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Tax</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2.5%</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2.5%</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2.5%</td>
          </tr>

          <tr class="border-b dark:border-gray-700">
            <th scope="row" class="px-4 py-3 font-normal whitespace-nowrap">Tax</th>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2.5%</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2.5%</td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2.5%</td>
          </tr>

          <tr>
            <th scope="row" class="px-4 py-3"></th>
            <td class="px-4 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <button type="button"
                      class="flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     class="w-5 h-5 mr-2">
                  <path
                    d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"/>
                </svg>
                Add to cart
              </button>
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <button type="button"
                      class="flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     class="w-5 h-5 mr-2">
                  <path
                    d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"/>
                </svg>
                Add to cart
              </button>
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <button type="button"
                      class="flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     class="w-5 h-5 mr-2">
                  <path
                    d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"/>
                </svg>
                Add to cart
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
```

## Table with sortable rows

Use this example of a responsive table to show sortable rows and a lift of products with details such as category, price, sales, and status.

```html
<section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
    <div class="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="border-b dark:border-gray-700 mx-4">
                <div class="flex items-center justify-between space-x-4 pt-3">
                    <div class="flex-1 flex items-center space-x-3">
                        <h5 class="dark:text-white font-semibold">All products</h5>
                    </div>
                    <div class="flex-shrink-0 flex flex-row items-center justify-end space-x-3">
                        <button type="button" class="flex-shrink-0 flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View JSON</button>
                        <button type="button" class="flex-shrink-0 flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <svg class="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                            Export
                        </button>
                    </div>
                </div>
                <div class="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
                    <div class="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center">
                        <form class="w-full md:max-w-sm flex-1 md:mr-4">
                            <label for="default-search" class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search..." required="">
                                <button type="submit" class="text-white absolute right-0 bottom-0 top-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
                            </div>
                        </form>
                        <div class="flex items-center space-x-4">
                            <div>
                                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                    </svg>
                                    Filter
                                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                                <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                    <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                                    <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                        <li class="flex items-center">
                                            <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                            <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                        </li>
                                        <li class="flex items-center">
                                            <input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                            <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                                        </li>
                                        <li class="flex items-center">
                                            <input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                            <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                                        </li>
                                        <li class="flex items-center">
                                            <input id="nikon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                            <label for="nikon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                                        </li>
                                        <li class="flex items-center">
                                            <input id="benq" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                            <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <button id="configurationDropdownButton" data-dropdown-toggle="configurationDropdown" type="button" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" class="h-4 w-4 mr-2 text-gray-400" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                                    </svg>
                                    Configurations
                                </button>
                                <div id="configurationDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="configurationDropdownButton">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">By Category</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">By Brand</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Reset</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-auto flex flex-col md:flex-row mb-3 md:mb-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Add new product
                        </button>
                    </div>
                </div>
            </div>
            <div class="mx-4 pb-3 flex flex-wrap">
                <div class="hidden md:flex items-center text-sm font-medium text-gray-900 dark:text-white mr-4 mt-3">Show only:</div>
                <div class="flex flex-wrap">
                    <div class="flex items-center mt-3 mr-4">
                        <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                    </div>
                    <div class="flex items-center mr-4 mt-3">
                        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active products</label>
                    </div>
                    <div class="flex items-center mr-4 mt-3">
                        <input id="inline-3-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-3-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pending products</label>
                    </div>
                    <div class="flex items-center mr-4 mt-3">
                        <input id="inline-4-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inline-4-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive products</label>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-all" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-4 py-3 min-w-[14rem]">Product</th>
                            <th scope="col" class="px-4 py-3 min-w-[10rem]">
                                Category
                                <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                                </svg>
                            </th>
                            <th scope="col" class="px-4 py-3 min-w-[7rem]">
                                Brand
                                <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                                </svg>
                            </th>
                            <th scope="col" class="px-4 py-3 min-w-[6rem]">
                                Price
                                <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                                </svg>
                            </th>
                            <th scope="col" class="px-4 py-3 min-w-[7rem]">
                                Stock
                                <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                                </svg>
                            </th>
                            <th scope="col" class="px-4 py-3 min-w-[12rem]">
                                Total Sales
                                <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                                </svg>
                            </th>
                            <th scope="col" class="px-4 py-3 min-w-[7rem]">
                                Status
                                <svg class="h-4 w-4 ml-1 inline-block" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                                </svg>
                            </th>
                            <th scope="col" class="px-4 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                Apple iMac 27&#34;
                            </th>
                            <td class="px-4 py-3">PC</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$2999</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">200</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">245</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Active</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="apple-imac-27-dropdown-button" type="button" data-dropdown-toggle="apple-imac-27-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                Apple iMac 20&#34;
                            </th>
                            <td class="px-4 py-3">PC</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$1499</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1237</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2000</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Active</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="apple-imac-20-dropdown-button" type="button" data-dropdown-toggle="apple-imac-20-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-20-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-20-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                Apple iPhone 14
                            </th>
                            <td class="px-4 py-3">Phone</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$999</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">300</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">466</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Inactive</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="apple-iphone-14-dropdown-button" type="button" data-dropdown-toggle="apple-iphone-14-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-iphone-14-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-iphone-14-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-ipad-air.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                Apple iPad Air
                            </th>
                            <td class="px-4 py-3">Tablet</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$1199</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">4576</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">90</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Inactive</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="apple-ipad-air-dropdown-button" type="button" data-dropdown-toggle="apple-ipad-air-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-ipad-air-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-ipad-air-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                Xbox Series S
                            </th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$299</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">56</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">3087</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="xbox-series-s-dropdown-button" type="button" data-dropdown-toggle="xbox-series-s-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="xbox-series-s-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-s-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                PlayStation 5
                            </th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sony</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$799</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">78</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2999</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Active</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="playstation-5-dropdown-button" type="button" data-dropdown-toggle="playstation-5-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="playstation-5-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="playstation-5-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                Xbox Series X
                            </th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$699</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">200</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1870</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Active</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="xbox-series-x-dropdown-button" type="button" data-dropdown-toggle="xbox-series-x-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="xbox-series-x-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-x-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-watch-se.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                Apple Watch SE
                            </th>
                            <td class="px-4 py-3">Watch</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$399</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">657</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">5067</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Inactive</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="apple-watch-se-dropdown-button" type="button" data-dropdown-toggle="apple-watch-se-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-watch-se-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-watch-se-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/nikon-d850.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                NIKON D850
                            </th>
                            <td class="px-4 py-3">Photo</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Nikon</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$599</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">465</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1870</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="nikon-d850-dropdown-button" type="button" data-dropdown-toggle="nikon-d850-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="nikon-d850-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="nikon-d850-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-4 py-3 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/benq-ex2710q.png" alt="iMac Front Image" class="h-8 w-auto mr-3">
                                Monitor BenQ EX2710Q
                            </th>
                            <td class="px-4 py-3">TV/Monitor</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">BenQ</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">$499</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">354</td>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">76</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Active</span>
                            </td>
                            <td class="px-4 py-3">
                                <button id="benq-ex2710q-dropdown-button" type="button" data-dropdown-toggle="benq-ex2710q-dropdown" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="benq-ex2710q-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="benq-ex2710q-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-4 pt-3 pb-4" aria-label="Table navigation">
                <div class="text-xs flex items-center space-x-5">
                    <div>
                        <div class="text-gray-500 dark:text-gray-400 mb-1">Purchase price</div>
                        <div class="dark:text-white font-medium">$ 3,567,890</div>
                    </div>
                    <div>
                        <div class="text-gray-500 dark:text-gray-400 mb-1">Total selling price</div>
                        <div class="dark:text-white font-medium">$ 8,489,400</div>
                    </div>
                </div>
                <div class="flex items-center space-x-4"><button type="button" class="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">Print barcodes</button><button type="button" class="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">Duplicate</button><button type="button" class="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Export CSV</button></div>
            </div>
        </div>
    </div>
</section>
```