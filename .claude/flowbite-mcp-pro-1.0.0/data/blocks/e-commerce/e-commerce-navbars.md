## Default e-commerce navbar

Use this example to show a navigation bar for e-commerce websites including a list of menu items, a shopping cart dropdown, a my account dropdown and a hamburger menu.

```html
<nav class="bg-white dark:bg-gray-800 antialiased">
  <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
    <div class="flex items-center justify-between">

      <div class="flex items-center space-x-8">
        <div class="shrink-0">
          <a href="#" title="" class="">
            <img class="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="">
            <img class="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="">
          </a>
        </div>

        <ul class="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
          <li>
            <a href="#" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Home
            </a>
          </li>
          <li class="shrink-0">
            <a href="#" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Best Sellers
            </a>
          </li>
          <li class="shrink-0">
            <a href="#" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Gift Ideas
            </a>
          </li>
          <li class="shrink-0">
            <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Today's Deals
            </a>
          </li>
          <li class="shrink-0">
            <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Sell
            </a>
          </li>
        </ul>
      </div>

      <div class="flex items-center lg:space-x-2">

        <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
          <span class="sr-only">
            Cart
          </span>
          <svg class="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg> 
          <span class="hidden sm:flex">My Cart</span>
          <svg class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>              
        </button>

        <div id="myCartDropdown1" class="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800">
          <div class="grid grid-cols-2">
            <div>
              <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iPhone 15</a>
              <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$599</p>
            </div>
      
            <div class="flex items-center justify-end gap-6">
              <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
      
              <button data-tooltip-target="tooltipRemoveItem1a" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span class="sr-only"> Remove </span>
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                </svg>
              </button>
              <div id="tooltipRemoveItem1a" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                Remove item
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
      
          <div class="grid grid-cols-2">
            <div>
              <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iPad Air</a>
              <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$499</p>
            </div>
      
            <div class="flex items-center justify-end gap-6">
              <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
      
              <button data-tooltip-target="tooltipRemoveItem2a" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span class="sr-only"> Remove </span>
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                </svg>
              </button>
              <div id="tooltipRemoveItem2a" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                Remove item
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
      
          <div class="grid grid-cols-2">
            <div>
              <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple Watch SE</a>
              <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$598</p>
            </div>
      
            <div class="flex items-center justify-end gap-6">
              <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 2</p>
      
              <button data-tooltip-target="tooltipRemoveItem3b" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span class="sr-only"> Remove </span>
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                </svg>
              </button>
              <div id="tooltipRemoveItem3b" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                Remove item
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
      
          <div class="grid grid-cols-2">
            <div>
              <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Sony Playstation 5</a>
              <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$799</p>
            </div>
      
            <div class="flex items-center justify-end gap-6">
              <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
      
              <button data-tooltip-target="tooltipRemoveItem4b" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span class="sr-only"> Remove </span>
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                </svg>
              </button>
              <div id="tooltipRemoveItem4b" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                Remove item
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
      
          <div class="grid grid-cols-2">
            <div>
              <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iMac 20"</a>
              <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$8,997</p>
            </div>
      
            <div class="flex items-center justify-end gap-6">
              <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 3</p>
      
              <button data-tooltip-target="tooltipRemoveItem5b" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span class="sr-only"> Remove </span>
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                </svg>
              </button>
              <div id="tooltipRemoveItem5b" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                Remove item
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
      
          <a href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> Proceed to Checkout </a>
        </div>

        <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
          <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>              
          Account
          <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg> 
        </button>

        <div id="userDropdown1" class="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
          <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Account </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Orders </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Settings </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Favourites </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Delivery Addresses </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Billing Data </a></li>
          </ul>
      
          <div class="p-2 text-sm font-medium text-gray-900 dark:text-white">
            <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </a>
          </div>
        </div>

        <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" class="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
          <span class="sr-only">
            Open Menu
          </span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>                
        </button>
      </div>
    </div>

    <div id="ecommerce-navbar-menu-1" class="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4">
      <ul class="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3">
        <li>
          <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home</a>
        </li>
        <li>
          <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Best Sellers</a>
        </li>
        <li>
          <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</a>
        </li>
        <li>
          <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Games</a>
        </li>
        <li>
          <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Electronics</a>
        </li>
        <li>
          <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home & Garden</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Centered e-commerce navbar

Use this example to show a double layered navigation bar with the logo centered and with a secondary menu, shopping cart dropdown and user account menu.

```html
<nav class="bg-white dark:bg-gray-800 antialiased">
  <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
      <form action="#" class="hidden md:block">
        <label for="" class="sr-only">
          Search
        </label>
        <div class="relative z-0 w-full group">
          <div class="absolute inset-y-0 flex items-center pointer-events-none start-0">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>              
          </div>

          <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0  appearance-none dark:text-white ps-6  focus:outline-none focus:ring-0 peer" placeholder=" " required />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2.5 ps-6 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search</label>
        </div>
      </form>

      <div class="shrink-0">
        <a href="#" title="" class="">
          <img class="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="">
          <img class="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="">
        </a>
      </div>

      <div class="flex items-center justify-end lg:space-x-2">
        <div class="relative md:hidden">
          <button type="button" data-collapse-toggle="ecommerce-navbar-search-2" class="inline-flex hover:bg-gray-100 items-center rounded-lg justify-center gap-2 p-2 text-gray-900 dark:text-white dark:hover:bg-gray-700">
            <span class="sr-only">
              Search
            </span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path>
            </svg>
          </button>
        </div>

        <button id="cartDropdownButton1" data-dropdown-toggle="cartDropdown1" type="button" class="inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg text-sm font-medium leading-none text-gray-900 dark:text-white dark:hover:bg-gray-700">
          <span class="sr-only">
            Cart
          </span>
          <div class="relative sm:me-2.5">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
            </svg>                
            <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-700 rounded-full -top-1.5 -end-1.5 dark:bg-red-600">2</div>
          </div>
          <span class="hidden sm:flex">$109.12</span>
          <svg class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>              
        </button>
        <div id="cartDropdown1" class="z-10 hidden mx-auto w-[360px] space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-700">
          <dl class="flex items-center justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-600">
            <dt class="font-semibold leading-none text-gray-900 dark:text-white">Your shopping cart</dt>
            <dd class="leading-none text-gray-500 dark:text-gray-400">4 items</dd>
          </dl>
      
          <div class="grid grid-cols-4 items-center justify-between gap-3">
            <div class="col-span-2 flex items-center gap-2">
              <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
              </a>
              <div class="flex-1">
                <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</a>
                <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">Gold Edition, 256GB</p>
              </div>
            </div>
      
            <div class="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">x1</div>
      
            <div class="flex items-center justify-end gap-2">
              <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">$599</p>
              <button data-tooltip-target="tooltipRemoveItem1" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span class="sr-only"> Remove </span>
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                </svg>
              </button>
              <div id="tooltipRemoveItem1" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-600">
                Remove
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 items-center justify-between gap-3">
            <div class="col-span-2 flex items-center gap-2">
              <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="imac image" />
                <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="imac image" />
              </a>
              <div class="flex-1">
                <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad Air</a>
                <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">Silver, 64GB</p>
              </div>
            </div>
      
            <div class="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">x9</div>
      
            <div class="flex items-center justify-end gap-2">
              <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">$38,599</p>
              <button data-tooltip-target="tooltipRemoveItem2" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span class="sr-only"> Remove </span>
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                </svg>
              </button>
              <div id="tooltipRemoveItem2" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-600">
                Remove
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 items-center justify-between gap-3">
            <div class="col-span-2 flex items-center gap-2">
              <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
                <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
              </a>
              <div class="flex-1">
                <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple Watch SE</a>
                <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">Purple, GPS</p>
              </div>
            </div>
      
            <div class="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">x1</div>
      
            <div class="flex items-center justify-end gap-2">
              <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">$199</p>
              <button data-tooltip-target="tooltipRemoveItem3" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span class="sr-only"> Remove </span>
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                </svg>
              </button>
              <div id="tooltipRemoveItem3" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-600">
                Remove
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 items-center justify-between gap-3">
            <div class="col-span-2 flex items-center gap-2">
              <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
              </a>
              <div class="flex-1">
                <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iMac 20”</a>
                <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">512GB, 32GB RAM</p>
              </div>
            </div>
      
            <div class="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">x1</div>
      
            <div class="flex items-center justify-end gap-2">
              <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">$2,999</p>
              <button data-tooltip-target="tooltipRemoveItem4" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                <span class="sr-only"> Remove </span>
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                </svg>
              </button>
              <div id="tooltipRemoveItem4" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-600">
                Remove
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
      
          <dl class="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
            <dt class="font-semibold leading-none text-gray-900 dark:text-white">Total</dt>
      
            <dd class="font-semibold leading-none text-gray-900 dark:text-white">$43,796</dd>
          </dl>
      
          <a href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> See your cart </a>
        </div>

        <button id="accountDropdownButton1" data-dropdown-toggle="accountDropdown1" type="button" class="inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg text-sm font-medium leading-none text-gray-900 dark:text-white dark:hover:bg-gray-700">
          <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>              
          Account
          <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg> 
        </button>
        <!-- Dropdown Menu -->
        <div id="accountDropdown1" class="z-50 hidden w-60 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
          <div>
            <a href="#" title="" class="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
              <img class="h-8 w-8 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="" />
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-semibold leading-tight text-gray-900 dark:text-white">Jese Leos</p>
                <p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">name@example.com</p>
              </div>
            </a>
          </div>
      
          <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                My Account
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.8-3H7.4M11 7H6.3M17 4v6m-3-3h6" />
                </svg>
                My Orders
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0" />
                </svg>
                My Lists
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z" />
                </svg>
                My Wallet
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                </svg>
                Favourites Items
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.9 1.3 3.9 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.2-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
                </svg>
                Vouchers and gift cards
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6.8a3 3 0 0 0-4.2.1M13 20h1a4 4 0 0 0 4-4V9A6 6 0 1 0 6 9v7m7 4v-1c0-.6-.4-1-1-1h-1a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
                </svg>
                Service
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
                </svg>
                My Returns
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-width="2" d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z" />
                </svg>
                My Reviews
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3 .7 2.5 2.8 5 2.8M5 8c3.4 0 2.2-2.1 5-2.8M7 9.6V7.8m0 1.8-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14L7 9.6Zm10 0V7.3m0 2.3-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14l-2-4.3Z" />
                </svg>
                My Guarantees
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-6 4h6m-6 4h6M6 3v18l2-2 2 2 2-2 2 2 2-2 2 2V3l-2 2-2-2-2 2-2-2-2 2-2-2Z" />
                </svg>
                Billing Data
              </a>
            </li>
            <li>
              <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5C11 8.5 9.4 7 7.5 7m3.5 9H4v-5.5C4 8.5 5.6 7 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                </svg>
                Subscriptions
              </a>
            </li>
            <li>
              <a href="#" title="" class="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-500 dark:hover:bg-gray-600">
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                </svg>
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <form action="#" id="ecommerce-navbar-search-2" class="w-full md:w-auto md:flex-1 md:order-2 hidden pt-4">
      <label for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
        <input type="search" id="default-search"
          class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search in all categories" required />
        <button type="submit"
          class="text-white absolute end-1.5 translate-y-1/2 bottom-1/2 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
      </div>
    </form>

    <div class="flex lg:justify-center">
      <ul class="flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
        <li>
          <a href="#" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Home
          </a>
        </li>
        <li class="shrink-0">
          <a href="#" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Best Sellers
          </a>
        </li>
        <li class="shrink-0">
          <a href="#" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Gift Ideas
          </a>
        </li>
        <li class="shrink-0 hidden sm:flex">
          <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Games
          </a>
        </li>
        <li class="shrink-0 hidden sm:flex">
          <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            PC
          </a>
        </li>
        <li class="shrink-0 hidden sm:flex">
          <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Music
          </a>
        </li>
        <li class="shrink-0 hidden lg:flex">
          <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Books
          </a>
        </li>
        <li class="shrink-0 hidden lg:flex">
          <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Electronics
          </a>
        </li>
        <li class="shrink-0 hidden lg:flex">
          <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Home & Garden
          </a>
        </li>
      </ul>
      <div class="py-3 flex items-center">
        <button type="button" data-dropdown-toggle="ecommerce-navbar-menu-2" class="ms-4 inline-flex items-center justify-center lg:hidden hover:bg-gray-100 rounded-md hover:text-gray-900 dark:hover:bg-gray-700 p-1 text-gray-500 dark:text-white">
          <span class="sr-only">Show menu</span>
          <svg class="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
          </svg>
        </button>

        <div id="ecommerce-navbar-menu-2" class="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
          <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Games </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> PC </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Music </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Books </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Electronics </a></li>
            <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Home & Garden </a></li>
          </ul>
      
          <div class="p-2 text-sm font-medium text-gray-900 dark:text-white">
            <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> View all categories </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</nav>
```

## Navbar with modal search

Use this example to show an advanced search modal for e-commerce products inside of a navbar with a mega menu, shopping cart and user dropdown.

```html
<nav class="py-4 bg-white dark:bg-gray-800 antialiased">
  <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div class="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
      <div class="lg:order-1 shrink-0">
        <a href="#" title="" class="">
          <img class="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="">
          <img class="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="">
        </a>
      </div>

      <div class="flex items-center justify-end lg:space-x-2 lg:order-3">
        <div class="relative">
          <button id="eCommerceSearchModalButton" type="button" data-modal-toggle="ecommerce-search-modal" data-modal-target="ecommerce-search-modal" class="inline-flex items-center justify-center hover:bg-gray-100 rounded-md text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white p-2">
            <span class="sr-only">
              Search
            </span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </div>

        <div>
          <button id="cartDropdownButton2" data-dropdown-toggle="cartDropdown2" type="button" class="inline-flex hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 items-center justify-center gap-2 p-2 text-gray-900 dark:text-white">
            <span class="sr-only">
              Cart
            </span>
            <div class="relative">
              <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"></path>
              </svg>  
              <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-700 rounded-full -top-1.5 -end-1.5 dark:bg-red-600">
                2</div>
            </div>
          </button>
          <div id="cartDropdown2" class="z-50 mx-auto hidden max-w-sm divide-y divide-gray-200 overflow-hidden rounded-lg bg-white antialiased shadow-lg dark:divide-gray-600 dark:bg-gray-700">
            <div class="p-4 ">
              <dl class="flex items-center gap-2">
                <dt class="font-semibold leading-none text-gray-900 dark:text-white">Your shopping cart</dt>
                <dd class="leading-none text-gray-500 dark:text-gray-400">(5 items)</dd>
              </dl>
            </div>
        
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,299</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                    <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem6" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem6" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad PRO</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,899</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input-2" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button-2" data-input-counter-decrement="counter-input-2" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input-2" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="3" required />
                    <button type="button" id="increment-button-2" data-input-counter-increment="counter-input-2" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem7" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem7" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad PRO</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$899</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input-3" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button-3" data-input-counter-decrement="counter-input-3" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input-3" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                    <button type="button" id="increment-button-3" data-input-counter-increment="counter-input-3" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem8" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem8" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$999</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input-4" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button-4" data-input-counter-decrement="counter-input-4" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input-4" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                    <button type="button" id="increment-button-4" data-input-counter-increment="counter-input-4" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem9" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem9" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple Watch</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,099</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input-4" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button-5" data-input-counter-decrement="counter-input-5" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input-5" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                    <button type="button" id="increment-button-5" data-input-counter-increment="counter-input-5" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem10" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem10" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="space-y-4 p-4">
              <dl class="flex items-center justify-between">
                <dt class="font-semibold leading-none text-gray-900 dark:text-white">Total</dt>
        
                <dd class="font-semibold leading-none text-gray-900 dark:text-white">$6,196</dd>
              </dl>
        
              <a href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> See your cart </a>
            </div>
          </div>
        </div>

        <div class="relative shrink-0">
          <button id="accountDropdownButton2" data-dropdown-toggle="accountDropdown2" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
            <img class="w-6 h-6 rounded-full me-1.5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Rounded avatar">
            <span class="hidden sm:block lg:hidden xl:block">
              My Account
            </span>
            <svg class="w-4 h-4 text-gray-900 dark:text-white sm:ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg>
          </button>

          <div id="accountDropdown2" class="z-10 hidden w-52 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
            <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                  </svg>
                  My Orders
                </a>
              </li>
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z" />
                  </svg>
                  My Wallet
                </a>
              </li>
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                  </svg>
                  Favourites Items
                </a>
              </li>
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
                  </svg>
                  My Returns
                </a>
              </li>
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.9 1.3 3.9 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.2-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
                  </svg>
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5C11 8.5 9.4 7 7.5 7m3.5 9H4v-5.5C4 8.5 5.6 7 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                  </svg>
                  Subscriptions
                </a>
              </li>
            </ul>
        
            <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  Account
                </a>
              </li>
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z"
                    />
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  Settings
                </a>
              </li>
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H7a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z" />
                  </svg>
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.4V3m0 2.4a5.3 5.3 0 0 1 5.1 5.3v1.8c0 2.4 1.9 3 1.9 4.2 0 .6 0 1.3-.5 1.3h-13c-.5 0-.5-.7-.5-1.3 0-1.2 1.9-1.8 1.9-4.2v-1.8A5.3 5.3 0 0 1 12 5.4ZM8.7 18c.1.9.3 1.5 1 2.1a3.5 3.5 0 0 0 4.6 0c.7-.6 1.3-1.2 1.4-2.1h-7Z" />
                  </svg>
                  Notifications
                </a>
              </li>
            </ul>
        
            <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13c-2.8-.8-4.7-1-8-1a1 1 0 0 0-1 1v11c0 .6.5 1 1 1 3.2 0 5 .2 8 1m0-13c2.8-.8 4.7-1 8-1 .6 0 1 .5 1 1v11c0 .6-.5 1-1 1-3.2 0-5 .2-8 1" />
                  </svg>
                  Help Guide
                </a>
              </li>
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 10a2.5 2.5 0 1 1 5 .2 2.4 2.4 0 0 1-2.5 2.4V14m0 3h0m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Help Center
                </a>
              </li>
            </ul>
        
            <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li>
                <span class="group flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                  <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z" />
                  </svg>
                  Dark Mode
        
                  <label class="ml-auto inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" class="peer sr-only" name="dark-mode" />
                    <div
                      class="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-600 dark:peer-focus:ring-primary-800 rtl:peer-checked:after:-translate-x-full"
                    ></div>
                    <span class="sr-only">Toggle</span>
                  </label>
                </span>
              </li>
            </ul>
        
            <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li>
                <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-500 dark:hover:bg-gray-600">
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                  </svg>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-full md:flex md:items-center md:justify-center lg:order-2">
        <div class="sm:flex relative items-center justify-center sm:gap-4 sm:p-2 sm:bg-gray-100 rounded-lg sm:dark:bg-gray-700">
          <button id="categoriesDropdownButton1" data-dropdown-toggle="categoriesDropdown1" type="button" class="w-full sm:w-auto justify-center inline-flex items-center flex-1 px-3 py-2 text-sm font-medium text-gray-900 border border-gray-200 dark:border-gray-700 sm:border-0 bg-white hover:bg-gray-50 rounded-lg md:flex-none dark:bg-gray-800 dark:hover:bg-gray-700 sm:dark:bg-gray-600 sm:dark:hover:bg-gray-500 dark:text-white">
            <svg class="w-4 h-4 me-2 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
            </svg>              
            All categories
            <svg class="w-4 h-4 ms-2 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
            </svg>              
          </button>

          <!-- Mega Menu -->
          <div id="categoriesDropdown1" class="z-50 hidden w-[672px] mx-auto overflow-hidden antialiased bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <div class="sm:flex sm:items-stretch">
              <div class="w-full px-2 py-4 space-y-4 sm:max-w-sm md:max-w-md sm:p-6 shrink-0">
                <a href="#" title="" class="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                  <div class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z" />
                    </svg>
                  </div>
        
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <p class="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                      Fashion
                    </p>
                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Trending designs to inspire you
                    </p>
                  </div>
        
                  <div class="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </a>
        
                <a href="#" title="" class="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                  <div class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
                    </svg>
                  </div>
        
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <p class="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                      Electronics
                    </p>
                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Up-and-coming designers
                    </p>
                  </div>
        
                  <div
                    class="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="flex items-center gap-4 px-2 py-2 bg-gray-100 rounded-lg dark:bg-gray-600 sm:px-4 group">
                  <div
                    class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v5m-3 0h6M4 11h16M5 15h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v9c0 .6.4 1 1 1Z" />
                    </svg>
                  </div>
        
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <p class="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                      Computer & Office
                    </p>
                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Work designers are riffing on
                    </p>
                  </div>
        
                  <div class="transition-all duration-200 translate-x-0 opacity-100">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                  <div
                    class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 4H5a1 1 0 0 0-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z" />
                    </svg>
                  </div>
        
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <p class="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                      Gaming/Consoles
                    </p>
                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Interviews, tutorials, and more
                    </p>
                  </div>
        
                  <div
                    class="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                  <div
                    class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                    </svg>
                  </div>
        
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <p class="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                      Books
                    </p>
                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Prompt to flex your skills
                    </p>
                  </div>
        
                  <div
                    class="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                  <div
                    class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                        d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2c0 1.1.9 2 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
                    </svg>
                  </div>
        
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <p class="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                      Sports & Outdoors
                    </p>
                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Prompt to flex your skills
                    </p>
                  </div>
        
                  <div
                    class="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                  <div
                    class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 12c.3 0 .5 0 .8-.2.2 0 .4-.3.6-.5l.4-.7.2-.9c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6 0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6a2.5 2.5 0 0 0 .6 1.6l.6.5a1.8 1.8 0 0 0 1.6 0l.6-.5.4-.7.2-.9c0-1-1.1-3.8-1.6-5a1 1 0 0 0-1-.7h-11a1 1 0 0 0-.9.6A29 29 0 0 0 4 9.7c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7Zm0 0c.3 0 .7 0 1-.3l.7-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7.2.2.6.3.9.3.4 0 .7-.1 1-.4M6 12a2 2 0 0 1-1.2-.5m.2.5v7c0 .6.4 1 1 1h2v-5h3v5h7c.6 0 1-.4 1-1v-7m-5 3v2h2v-2h-2Z" />
                    </svg>
                  </div>
        
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <p class="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                      Food & Grocery
                    </p>
                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Prompt to flex your skills
                    </p>
                  </div>
        
                  <div
                    class="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                  <div
                    class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 13.9a5 5 0 0 1 2 4V21M7 3v3.2A5 5 0 0 0 8.9 10M17 3v3.2a5 5 0 0 1-2.4 4.3l-5.2 3A5 5 0 0 0 7 17.8V21M7 5h10M7.4 8h9.3M8 16h8.7M7 19h10" />
                    </svg>
                  </div>
        
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <p class="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                      Health & Beauty
                    </p>
                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Prompt to flex your skills
                    </p>
                  </div>
        
                  <div
                    class="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                  <div
                    class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                    </svg>
                  </div>
        
                  <div class="flex-1 min-w-0 space-y-0.5">
                    <p class="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                      Car & Motorbike
                    </p>
                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Prompt to flex your skills
                    </p>
                  </div>
        
                  <div
                    class="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </a>
              </div>
        
              <ul class="w-full p-4 space-y-4 sm:p-6 bg-gray-50 dark:bg-gray-600 text-sm font-medium text-gray-500 dark:text-gray-400">
                <li class="text-sm font-semibold text-gray-900 dark:text-white">Browse Categories</li>
                <li>
                  <a href="#" title="" class="block hover:underline dark:hover:text-white hover:text-gray-900">
                    Laptops
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="block hover:underline dark:hover:text-white hover:text-gray-900">
                    Tablets
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="block hover:underline dark:hover:text-white hover:text-gray-900">
                    Desktop PC
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="block hover:underline dark:hover:text-white hover:text-gray-900">
                    Monitors
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="block hover:underline dark:hover:text-white hover:text-gray-900">
                    Memory & Storage
                  </a>
                </li>
                <li>             
                  <a href="#" title="" class="block hover:underline dark:hover:text-white hover:text-gray-900">
                    Networking
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="block hover:underline dark:hover:text-white hover:text-gray-900">
                    Computer Components
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="block hover:underline dark:hover:text-white hover:text-gray-900">
                    Software
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="block hover:underline dark:hover:text-white hover:text-gray-900">
                    Printers & Ink
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul class="flex items-center space-x-4">
            <li>              
              <a href="#" title="" class="items-center hidden gap-2 px-2 py-1 text-sm hover:text-primary-700 dark:hover:text-primary-500 font-medium text-gray-900 rounded-lg sm:inline-flex dark:text-white">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" title="" class="items-center hidden gap-2 px-2 py-1 text-sm hover:text-primary-700 dark:hover:text-primary-500 font-medium text-gray-900 rounded-lg sm:inline-flex dark:text-white">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" title="" class="items-center hidden gap-2 px-2 py-1 text-sm hover:text-primary-700 dark:hover:text-primary-500 font-medium text-gray-900 rounded-lg sm:inline-flex dark:text-white">
                Gift Ideas
              </a>
            </li>
            <li>
              <a href="#" title="" class="items-center hidden gap-2 px-2 py-1 text-sm hover:text-primary-700 dark:hover:text-primary-500 font-medium text-gray-900 rounded-lg md:inline-flex dark:text-white">
                Deal of the day
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>

<div id="ecommerce-search-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full antialiased">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-800 p-3 sm:p-5">

        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Advanced search</h3>
          <button type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="ecommerce-search-modal">
            <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
            
        <form class="w-full mx-auto pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search in all categories..." required />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
          </div>
        </form>

        <div class="mb-4">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Suggested results</h3>
          <ul class="text-sm font-normal text-gray-500 dark:text-gray-400 space-y-2">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
              <a href="#" class="hover:underline">Apple iMac 2024 (All-in-One PC)</a>
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
              <a href="#" class="hover:underline">Samsung Galaxy S24 Ultra (1Tb, Titanium Violet)</a>
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
              <a href="#" class="hover:underline">MacBook Pro 14-inch M3 - Space Gray - Apple</a>
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">History</h3>
          <ul class="text-sm font-normal text-gray-500 dark:text-gray-400 space-y-2">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <a href="#" class="hover:underline">Microsoft - Surface Laptop, Platinum, 256 GB SSD</a>
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <a href="#" class="hover:underline">Huawei - P40 Lite - Smartphone 128GB, Black</a>
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Featured products</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <a href="#" class="block rounded-lg p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 group space-y-2">
              <div>
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" class="dark:hidden h-16" alt="">
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" class="hidden dark:block h-16" alt="">
              </div>
              <h4 class="group-hover:underline text-sm font-medium dark:text-white text-gray-900">Apple Imac 2024, 27”, 256GB</h4>

              <div class="flex items-center">
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p class="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">4.95</p>
              </div>

              <span class="text-gray-900 dark:text-white text-sm font-bold block">$1,799</span>
            </a>
            <a href="#" class="block rounded-lg p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 group space-y-2">
              <div>
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" class="dark:hidden h-16" alt="">
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" class="hidden dark:block h-16" alt="">
              </div>
              <h4 class="group-hover:underline text-sm font-medium dark:text-white text-gray-900">Apple iPad PRO, 12”, Space Gray</h4>

              <div class="flex items-center">
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p class="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">4.7</p>
              </div>

              <span class="text-gray-900 dark:text-white text-sm font-bold block">$999</span>
            </a>
            <a href="#" class="block rounded-lg p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 group space-y-2">
              <div>
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg" class="dark:hidden h-16" alt="">
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" class="hidden dark:block h-16" alt="">
              </div>
              <h4 class="group-hover:underline text-sm font-medium dark:text-white text-gray-900">Apple MacBook PRO, 1TB</h4>

              <div class="flex items-center">
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p class="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">4.8</p>
              </div>

              <span class="text-gray-900 dark:text-white text-sm font-bold block">$2,999</span>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">All categories</h3>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Computer & Office</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Collectibles & Toys</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Books</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Fashion/Clothes</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Sports & Outdoors</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Painting & Hobby</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Electronics</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Food & Grocery</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Music</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">TV/Projectors</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.041 13.862A4.999 4.999 0 0 1 17 17.831V21M7 3v3.169a5 5 0 0 0 1.891 3.916M17 3v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 7 17.831V21M7 5h10M7.399 8h9.252M8 16h8.652M7 19h10"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Health & beauty</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Home Air Quality</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8 15h7.01v.01H15L8 15Z"/>
                <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/>
                <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Gaming/Consoles</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Car & Motorbike</span>
            </a>
            <a href="#" class="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
              <svg class="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"/>
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Photo/Video</span>
            </a>
          </div>
        </div>

        </div>
    </div>
</div>
```

## Navbar with search bar and submenu

Use this example to show a navbar for e-commerce websites with a search bar, dropdown menus, delivery location selectors, language selectors and a submenu list.

```html
<nav class="bg-white dark:bg-gray-800 antialiased">
  <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div class="py-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <div class="flex items-center flex-1 gap-4">
          <a href="#" title="" class="shrink-0">
            <img class="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="">
            <img class="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="">
          </a>

          <form class="flex-1 hidden max-w-lg lg:block">
            <div class="flex -space-x-0.5">
              <label for="search-dropdown" class="sr-only">Search</label>

              <button id="categoriesDropdownButton3" data-dropdown-toggle="categoriesDropdown3" class="z-10 flex-shrink-0 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                All categories 
                <svg class="w-4 h-4 ms-2 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                </svg>                  
              </button>

              <div id="categoriesDropdown3" class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700">
                <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white" aria-labelledby="categoriesDropdownButton3">
                  <li>
                    <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                      <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
                      </svg>                        
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">     
                      <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"/>
                      </svg>                                                                  
                      Sports & Outdoors
                    </a>
                  </li>
                  <li>
                    <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">   
                      <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                      </svg>                                             
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">     
                      <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
                      </svg>                                                                                        
                      Food & Grocery
                    </a>
                  </li>
                  <li>
                    <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">     
                      <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.041 13.862A4.999 4.999 0 0 1 17 17.831V21M7 3v3.169a5 5 0 0 0 1.891 3.916M17 3v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 7 17.831V21M7 5h10M7.399 8h9.252M8 16h8.652M7 19h10"/>
                      </svg>                                                                                         
                      Health & Beauty
                    </a>
                  </li>
                  <li>
                    <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">   
                      <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
                      </svg>                                                                     
                      Books & School
                    </a>
                  </li>
                </ul>
              </div>
              <div class="relative w-full">
                <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500" placeholder="What can we help you find today?" required />
                <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary-700 rounded-e-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                  </svg>                    
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="flex items-center justify-end lg:space-x-2">
          <div class="relative md:hidden">
            <button type="button" data-collapse-toggle="ecommerce-navbar-search-4" class="inline-flex items-center justify-center rounded-lg p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="sr-only">
                Search
              </span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path>
              </svg>
            </button>
          </div>

          <div class="relative hidden md:block">
            <button type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
              <span class="sr-only">
                Favorites
              </span>
              <div class="relative me-2.5">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                </svg>                  
                <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-700 rounded-full -top-1.5 -end-1.5 dark:bg-red-600">
                  6
                </div>
              </div>
              Favorites
            </button>
          </div>

          <div>
            <button id="cartDropdownButton3" data-dropdown-toggle="cartDropdown3" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
              <span class="sr-only">
                Cart
              </span>
              <div class="relative sm:me-2.5">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                </svg>                  
                <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-700 rounded-full -top-1.5 -end-1.5 dark:bg-red-600 ">
                  2
                </div>
              </div>
              <span class="hidden sm:flex">
                My Cart
              </span>
              <svg class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
              </svg>
            </button>
            <!-- Dropdown Menu -->
            <div id="cartDropdown3" class="mx-auto hidden z-50 max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-700">
              <div class="border-b border-gray-200 pb-4 dark:border-gray-700">
                <p class="text-center text-base font-semibold leading-none text-gray-900 dark:text-white">Your shopping cart</p>
              </div>
          
              <div class="border-b border-gray-200 pb-4 dark:border-gray-700">
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Receive <span class="font-medium text-gray-900 dark:text-white">free shipping</span> for products worth <span class="font-medium text-gray-900 dark:text-white">$9000</span>.</p>
          
                <div class="mt-2 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div class="h-1.5 rounded-full bg-green-500" style="width: 80%"></div>
                </div>
              </div>
          
              <div class="grid grid-cols-2 items-center">
                <div class="flex items-center gap-2">
                  <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                    <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                    <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                  </a>
                  <div>
                    <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,299</p>
                  </div>
                </div>
          
                <div class="flex items-center justify-end gap-3">
                  <form action="#">
                    <label for="counter-input-6" class="sr-only">Choose quantity:</label>
                    <div class="relative flex items-center">
                      <button type="button" id="decrement-button-6" data-input-counter-decrement="counter-input-6" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input type="text" id="counter-input-6" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                      <button type="button" id="increment-button-6" data-input-counter-increment="counter-input-6" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <button data-tooltip-target="tooltipRemoveItem11" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem11" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 items-center">
                <div class="flex items-center gap-2">
                  <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                    <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="imac image" />
                    <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="imac image" />
                  </a>
                  <div>
                    <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad PRO</a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,899</p>
                  </div>
                </div>
          
                <div class="flex items-center justify-end gap-3">
                  <form action="#">
                    <label for="counter-input-7" class="sr-only">Choose quantity:</label>
                    <div class="relative flex items-center">
                      <button type="button" id="decrement-button-7" data-input-counter-decrement="counter-input-7" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input type="text" id="counter-input-7" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="3" required />
                      <button type="button" id="increment-button-7" data-input-counter-increment="counter-input-7" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <button data-tooltip-target="tooltipRemoveItem12" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem12" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 items-center">
                <div class="flex items-center gap-2">
                  <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                    <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="imac image" />
                    <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="imac image" />
                  </a>
                  <div>
                    <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad PRO</a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$899</p>
                  </div>
                </div>
                <div class="flex items-center justify-end gap-3">
                  <form action="#">
                    <label for="counter-input-8" class="sr-only">Choose quantity:</label>
                    <div class="relative flex items-center">
                      <button type="button" id="decrement-button-8" data-input-counter-decrement="counter-input-8" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input type="text" id="counter-input-8" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                      <button type="button" id="increment-button-8" data-input-counter-increment="counter-input-8" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <button data-tooltip-target="tooltipRemoveItem13" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem13" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 items-center">
                <div class="flex items-center gap-2">
                  <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                    <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                    <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                  </a>
                  <div>
                    <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$999</p>
                  </div>
                </div>
          
                <div class="flex items-center justify-end gap-3">
                  <form action="#">
                    <label for="counter-input-9" class="sr-only">Choose quantity:</label>
                    <div class="relative flex items-center">
                      <button type="button" id="decrement-button-9" data-input-counter-decrement="counter-input-9" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input type="text" id="counter-input-9" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                      <button type="button" id="increment-button-9" data-input-counter-increment="counter-input-9" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <button data-tooltip-target="tooltipRemoveItem14" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem14" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 items-center">
                <div class="flex items-center gap-2">
                  <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                    <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
                    <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
                  </a>
                  <div>
                    <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple Watch</a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,099</p>
                  </div>
                </div>
          
                <div class="flex items-center justify-end gap-3">
                  <form action="#">
                    <label for="counter-input-10" class="sr-only">Choose quantity:</label>
                    <div class="relative flex items-center">
                      <button type="button" id="decrement-button-10" data-input-counter-decrement="counter-input-10" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input type="text" id="counter-input-10" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                      <button type="button" id="increment-button-10" data-input-counter-increment="counter-input-10" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <button data-tooltip-target="tooltipRemoveItem15" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                    <span class="sr-only"> Remove </span>
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                  </button>
                  <div id="tooltipRemoveItem15" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Remove
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
          
              <div class="space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                <dl class="space-y-2.5 text-center">
                  <dt class="leading-none text-gray-500 dark:text-gray-400">Total payment</dt>
          
                  <dd class="text-lg font-semibold leading-none text-gray-900 dark:text-white">$6,796</dd>
                </dl>
          
                <a href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> See your cart </a>
              </div>
            </div>
          </div>

          <div>
            <button id="accountDropdownButton3" data-dropdown-toggle="accountDropdown3" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
              <img class="w-6 h-6 rounded-full sm:me-1.5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Rounded avatar">
              <span class="hidden sm:flex">
                My Account
              </span>
              <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1 hidden sm:flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
              </svg>
            </button>
            <!-- Dropdown Menu -->
            <div id="accountDropdown3" class="z-50 hidden w-52 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
              <div class="space-y-2 px-2 pb-4 pt-2 text-center">
                <img class="mx-auto h-8 w-8 shrink-0 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="" />
          
                <div>
                  <p class="truncate text-sm font-semibold leading-tight text-gray-900 dark:text-white">Hello, Jese Leos</p>
                  <p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">name@example.com</p>
                </div>
          
                <a href="#" title="" class="mb-2 me-2 block w-full rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-700" role="button"> View Profile </a>
              </div>
          
              <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                <li>
                  <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <img class="h-4 w-4 shrink-0" src="/images/logo.svg" alt="" />
                    Flowbite
                    <span class="me-2 ml-auto rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium uppercase text-primary-800 dark:bg-primary-900 dark:text-primary-300"> Pro </span>
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z" />
                    </svg>
                    My Wallet
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.8-3H7.4M11 7H6.3M17 4v6m-3-3h6" />
                    </svg>
                    My Orders
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5" />
                    </svg>
                    Delivery Addresses
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z"
                      />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 10a2.5 2.5 0 1 1 5 .2 2.4 2.4 0 0 1-2.5 2.4V14m0 3h0m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Helpdesk
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-500 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                    </svg>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form action="#" id="ecommerce-navbar-search-4" class="w-full md:w-auto md:flex-1 md:order-2 hidden pt-4">
      <label for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
        <input type="search" id="default-search"
          class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search in all categories" required />
        <button type="submit"
          class="text-white absolute end-1.5 translate-y-1/2 bottom-1/2 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
      </div>
    </form>

    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 py-3 sm:gap-4">
      <div class="flex items-center">
        <button type="button" data-collapse-toggle="ecommerce-navbar-menu-4" class="flex md:hidden items-center rounded-lg justify-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
          <svg class="w-5 h-5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>            
          Menu
        </button>

        <ul class="items-center hidden gap-8 md:flex">
          <li>
            <a href="#" title="" class="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" title="" class="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Best Sellers
            </a>
          </li>
          <li>
            <a href="#" title="" class="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Gift Ideas
            </a>
          </li>
          <li class="hidden lg:flex">
            <a href="#" title="" class="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Games
            </a>
          </li>
          <li class="hidden lg:flex">
            <a href="#" title="" class="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              PC
            </a>
          </li>
          <li class="hidden lg:flex">
            <a href="#" title="" class="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Music
            </a>
          </li>
          <li class="hidden xl:flex">
            <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Books
            </a>
          </li>
          <li class="hidden xl:flex">
            <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Electronics
            </a>
          </li>
          <li class="hidden xl:flex">
            <a href="#" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Home & Garden
            </a>
          </li>
        </ul>
      </div>

      <div class="relative shrink-0 sm:ml-auto">
        <button id="locationDropdownButton1" data-dropdown-toggle="locationDropdown1" type="button" class="inline-flex hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 items-center justify-center px-3 font-medium text-sm py-2 text-gray-900 dark:text-white">
          <svg class="w-5 h-5 text-gray-900 dark:text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
          </svg>            
          Deliver to: United States
          <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
          </svg>
        </button>
        <!-- Dropdown Menu-->
        <div id="locationDropdown1" class="z-50 hidden w-52 overflow-hidden overflow-y-auto rounded-lg bg-white shadow dark:bg-gray-700">
          <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
            <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
              <input id="country-checkbox-2" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="country-checkbox-2" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/ca.svg" alt="" /> Canada</label>
            </li>
            <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
              <input id="country-checkbox-3" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="country-checkbox-3" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/gb.svg" alt="" /> United Kingdom</label>
            </li>
            <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
              <input id="country-checkbox-1" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked/>
              <label for="country-checkbox-1" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg" alt="" /> United States</label>
            </li>
            <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
              <input id="country-checkbox-5" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="country-checkbox-5" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/de.svg" alt="" /> Germany</label>
            </li>
            <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
              <input id="country-checkbox-6" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="country-checkbox-6" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/fr.svg" alt="" /> France</label>
            </li>
            <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
              <input id="country-checkbox-7" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="country-checkbox-7" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/cn.svg" alt="" /> China</label>
            </li>
            <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
              <input id="country-checkbox-8" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="country-checkbox-8" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/jp.svg" alt="" /> Japan</label>
            </li>
            <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
              <input id="country-checkbox-9" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="country-checkbox-9" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/it.svg" alt="" /> Italy</label>
            </li>
            <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
              <input id="country-checkbox-10" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="country-checkbox-10" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/es.svg" alt="" /> Spain</label>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full sm:w-auto sm:shrink-0">
        <button id="languageDropdownButton1" data-dropdown-toggle="languageDropdown1" type="button" class="inline-flex items-center justify-center w-full py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <img class="object-cover w-4 rounded-sm me-2" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg" alt="">
          English (USA)
          <svg class="w-4 h-4 ms-2 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>            
        </button>

        <!-- Dropdown Menu -->
        <div id="languageDropdown1" class="z-50 w-52 hidden overflow-hidden overflow-y-auto rounded-lg bg-white shadow dark:bg-gray-700">
          <div class="px-2 pt-2">
            <form class="mx-auto max-w-md">
              <label for="default-search" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search" required />
              </div>
            </form>
          </div>
      
          <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
            <li>
              <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg" alt="" />
                English (U.S.)
              </a>
            </li>
            <li>
              <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/ca.svg" alt="" />
                English (Canada)
              </a>
            </li>
            <li>
              <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/gb.svg" alt="" />
                English (U.K)
              </a>
            </li>
            <li>
              <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/de.svg" alt="" />
                Deutsch
              </a>
            </li>
            <li>
              <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/fr.svg" alt="" />
                Français
              </a>
            </li>
            <li>
              <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/cn.svg" alt="" />
                中國人
              </a>
            </li>
            <li>
              <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/jp.svg" alt="" />
                日本語
              </a>
            </li>
            <li>
              <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/it.svg" alt="" />
                Italiano
              </a>
            </li>
            <li>
              <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/es.svg" alt="" />
                Español
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="ecommerce-navbar-menu-4" class="w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-2">
        <ul class="text-gray-900 dark:text-white text-sm font-medium space-y-3">
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Best Sellers</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Games</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Electronics</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home & Garden</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</nav>
```

## Navbar with advanced user dropdown

Use this example to show three levels inside of a navbar component including a promotional banner, shopping cart and user dropdowns, a search bar and a mega menu with categories.

```html
<nav class="bg-white dark:bg-gray-800 antialiased">
  <div class="py-2.5 bg-gray-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="flex items-center justify-between">
        <div class="items-center hidden gap-1 lg:inline-flex text-gray-500 dark:text-gray-400">
          <svg class="w-5 h-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
          </svg>            
          <a href="#" class="text-sm font-medium hover:underline">
            (555) 555-1234
          </a>
        </div>

        <div class="items-center justify-center hidden space-x-2 sm:flex divide-x divide-gray-300">
          <p class="text-sm text-gray-900 dark:text-white">
            Get 50% off on Member Exclusive Month
          </p>
          <a href="#" title="" class="ps-2 text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
            Shop Now
          </a>
        </div>

        <div class="flex items-center justify-between w-full gap-4 sm:justify-end sm:w-auto">
          <button id="languageDropdownButton2" data-dropdown-toggle="languageDropdown2" type="button" class="inline-flex items-center text-sm font-medium hover:underline text-gray-900 dark:text-white">
            <img class="w-4 h-auto rounded-sm me-2" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg" alt="">
            English (USA)
            <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <div id="languageDropdown2" class="z-50 hidden w-56 overflow-hidden overflow-y-auto rounded-lg bg-white shadow dark:bg-gray-700">
            <div class="px-2 pt-2">
              <form class="mx-auto max-w-md">
                <label for="default-search" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search" required />
                </div>
              </form>
            </div>
        
            <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg" alt="" />
                  English (U.S.)
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/ca.svg" alt="" />
                  English (Canada)
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/gb.svg" alt="" />
                  English (U.K)
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/de.svg" alt="" />
                  Deutsch
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/fr.svg" alt="" />
                  Français
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/cn.svg" alt="" />
                  中國人
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/jp.svg" alt="" />
                  日本語
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/it.svg" alt="" />
                  Italiano
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/es.svg" alt="" />
                  Español
                </a>
              </li>
            </ul>
          </div>

          <button id="locationDropdownButton2" data-dropdown-toggle="locationDropdown2" type="button" class="inline-flex items-center text-sm font-medium hover:underline text-gray-900 dark:text-white">
            <svg class="w-5 h-5 text-gray-900 dark:text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"></path>
            </svg>
            Location
            <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div id="locationDropdown2" class="z-50 hidden w-72 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
            <div class="flex flex-wrap items-center gap-x-4 gap-y-3 p-5">
              <div class="flex items-center">
                <input id="continents-checkbox" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> All </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-2" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Europe </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-3" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                <label for="continents-checkbox-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Americas </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-4" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Asia </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-5" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-5" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Oceania </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-6" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-6" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Africa </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-7" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-7" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Antarctica </label>
              </div>
            </div>
        
            <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li class="py-2">
                <form class="mx-auto max-w-md">
                  <label for="country-search" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                      <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="search" id="country-search" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search for country" required />
                  </div>
                </form>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-11" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-11" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg" alt="" /> United States</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-12" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-12" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/ca.svg" alt="" /> Canada</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-13" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-13" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/gb.svg" alt="" /> United Kingdom</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-14" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-14" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/de.svg" alt="" /> Germany</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-15" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-15" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/fr.svg" alt="" /> France</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-16" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-16" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/cn.svg" alt="" /> China</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-17" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-17" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/jp.svg" alt="" /> Japan</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-18" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-18" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/it.svg" alt="" /> Italy</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-19" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-19" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/es.svg" alt="" /> Spain</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-4 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="flex items-center justify-between gap-8">
        <div class="shrink-0">
          <a href="#" title="" class="">
            <img class="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="">
            <img class="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="">
          </a>
        </div>

        <form action="#" class="flex-1 hidden lg:block">
          <div class="flex -space-x-1">
            <label for="search-dropdown" class="sr-only">Search</label>

            <button id="categoriesDropdownButton4" data-dropdown-toggle="categoriesDropdown4" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
              Electronics
              <svg class="w-4 h-4 ms-2 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
              </svg>
            </button>

            <div id="categoriesDropdown4" class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700">
              <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white" aria-labelledby="categoriesDropdownButton3">
                <li>
                  <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
                    </svg>                        
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">     
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"/>
                    </svg>                                                                  
                    Sports & Outdoors
                  </a>
                </li>
                <li>
                  <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">   
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                    </svg>                                             
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">     
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
                    </svg>                                                                                        
                    Food & Grocery
                  </a>
                </li>
                <li>
                  <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">     
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.041 13.862A4.999 4.999 0 0 1 17 17.831V21M7 3v3.169a5 5 0 0 0 1.891 3.916M17 3v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 7 17.831V21M7 5h10M7.399 8h9.252M8 16h8.652M7 19h10"/>
                    </svg>                                                                                         
                    Health & Beauty
                  </a>
                </li>
                <li>
                  <a href="#" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">   
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
                    </svg>                                                                     
                    Books & School
                  </a>
                </li>
              </ul>
            </div>
            <div class="relative w-full">
              <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500" placeholder="What can we help you find today?" required />
              <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary-700 rounded-e-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        <div class="flex items-center justify-end lg:space-x-2">
          <div class="relative lg:hidden">
            <button data-collapse-toggle="ecommerce-navbar-search-5" type="button" class="inline-flex items-center justify-center gap-2 p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <span class="sr-only">
                Search
              </span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path>
              </svg>
            </button>
          </div>

          <button id="cartDropdownButton4" data-dropdown-toggle="cartDropdown4" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
            <span class="sr-only">
              Cart
            </span>
            <div class="relative sm:me-2.5">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"></path>
              </svg>                  
              <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-700 rounded-full -top-1.5 -end-1.5 dark:bg-red-600 ">
                2
              </div>
            </div>
            <span class="hidden sm:flex">
              My Cart
            </span>
            <svg class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div id="cartDropdown4" class="hidden z-50 max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-700">
            <dl class="flex items-center justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-700">
              <dt class="font-semibold leading-none text-gray-900 dark:text-white">Your shopping cart</dt>
        
              <dd class="leading-none text-gray-500 dark:text-gray-400">4 items</dd>
            </dl>
            <div class="grid grid-cols-4 items-center justify-between gap-3">
              <div class="col-span-2 flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                </a>
                <div class="flex-1">
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iMac 20”</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">512GB, 32GB RAM</p>
                </div>
              </div>
        
              <div class="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">x1</div>
        
              <div class="flex items-center justify-end gap-2">
                <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">$2,999</p>
                <button data-tooltip-target="tooltipRemoveItem16" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem16" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 items-center justify-between gap-3">
              <div class="col-span-2 flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                </a>
                <div class="flex-1">
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">Gold Edition, 256GB</p>
                </div>
              </div>
        
              <div class="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">x1</div>
        
              <div class="flex items-center justify-end gap-2">
                <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">$599</p>
                <button data-tooltip-target="tooltipRemoveItem17" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem17" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 items-center justify-between gap-3">
              <div class="col-span-2 flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="imac image" />
                </a>
                <div class="flex-1">
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad Air</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">Silver, 64GB</p>
                </div>
              </div>
        
              <div class="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">x9</div>
        
              <div class="flex items-center justify-end gap-2">
                <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">$38,599</p>
                <button data-tooltip-target="tooltipRemoveItem18" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem18" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 items-center justify-between gap-3">
              <div class="col-span-2 flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
                </a>
                <div class="flex-1">
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple Watch SE</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">Purple, GPS</p>
                </div>
              </div>
        
              <div class="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">x1</div>
        
              <div class="flex items-center justify-end gap-2">
                <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">$199</p>
                <button data-tooltip-target="tooltipRemoveItem19" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem19" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

        
            <dl class="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <dt class="font-semibold leading-none text-gray-900 dark:text-white">Total</dt>
        
              <dd class="font-semibold leading-none text-gray-900 dark:text-white">$43,796</dd>
            </dl>
        
            <a href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> See your cart </a>
          </div>

          <button id="accountDropdownButton4" data-dropdown-toggle="accountDropdown4" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
            <svg class="w-5 h-5 me-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
            </svg>              
            Account
            <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg> 
          </button>
          <!-- Dropdown Menu -->
          <div id="accountDropdown4" class="hidden z-50 w-full max-w-lg divide-y divide-gray-100 overflow-hidden rounded-md bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
            <div>
              <button id="dropdownUserNameButton" data-dropdown-toggle="dropdownUserName" type="button" class="dark:hover-bg-gray-700 flex w-full items-center justify-between bg-white p-4 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600" type="button">
                <span class="sr-only">Open user menu</span>
                <div class="flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" class="mr-3 h-8 w-8 rounded-md" alt="Jese avatar" />
                    <div class="text-left">
                      <div class="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">Jese Leos (Personal)</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">jese@flowbite.com</div>
                    </div>
                  </div>
                  <svg class="h-5 w-5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                  </svg>
                </div>
              </button>
              <!-- Dropdown menu -->
              <div id="dropdownUserName" class="z-10 hidden w-[510px] divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700" data-popper-placement="bottom">
                <a href="#" class="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8 w-8 rounded" alt="Michael avatar" />
                  <div class="text-left">
                    <div class="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">Flowbite LLC (Company)</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">company@flowbite.com</div>
                  </div>
                </a>
              </div>
            </div>
        
            <div class="grid items-stretch py-4 sm:grid-cols-2">
              <ul class="mb-4 border-b border-gray-100 pb-4 text-sm font-medium sm:mb-0 sm:border-0 sm:pb-0">
                <li class="px-4 pb-2">
                  <p class="text-base text-gray-900 dark:text-white">My Wish Lists</p>
                </li>
                <li>
                  <a href="#" title="" class="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"> Family gifts </a>
                </li>
                <li>
                  <a href="#" title="" class="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"> Beauty </a>
                </li>
                <li>
                  <a href="#" title="" class="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"> Gaming/Relax </a>
                </li>
                <li>
                  <a href="#" title="" class="flex items-center gap-1 px-4 py-2 text-primary-700 hover:bg-primary-50 dark:text-primary-500 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                    </svg>
                    Create a new list
                  </a>
                </li>
              </ul>
        
              <ul class="border-l border-gray-100 text-sm font-medium dark:border-gray-600">
                <li class="px-4 pb-2">
                  <p class="text-base font-medium text-gray-900 dark:text-white">My Account</p>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                    </svg>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.8-3H7.4M11 7H6.3M17 4v6m-3-3h6"></path>
                    </svg>
                    My Orders
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z" />
                    </svg>
                    My Wallet
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                    </svg>
                    Favourite Items
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.9 1.3 3.9 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.2-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
                    </svg>
                    Vouchers and gift cards
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6.8a3 3 0 0 0-4.2.1M13 20h1a4 4 0 0 0 4-4V9A6 6 0 1 0 6 9v7m7 4v-1c0-.6-.4-1-1-1h-1a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
                    </svg>
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
                    </svg>
                    My Returns
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2" d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z" />
                    </svg>
                    My Reviews
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3 .7 2.5 2.8 5 2.8M5 8c3.4 0 2.2-2.1 5-2.8M7 9.6V7.8m0 1.8-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14L7 9.6Zm10 0V7.3m0 2.3-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14l-2-4.3Z" />
                    </svg>
                    My Guarantees
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-6 4h6m-6 4h6M6 3v18l2-2 2 2 2-2 2 2 2-2 2 2V3l-2 2-2-2-2 2-2-2-2 2-2-2Z" />
                    </svg>
                    Billing Data
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5C11 8.5 9.4 7 7.5 7m3.5 9H4v-5.5C4 8.5 5.6 7 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                    </svg>
                    Plans & Subscriptions
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:text-red-500 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                    </svg>
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <form action="#" id="ecommerce-navbar-search-5" class="w-full md:w-auto md:flex-1 md:order-2 pt-4 px-4 hidden">
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
      <input type="search" id="default-search" class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search in all categories" required="">
      <button type="submit" class="text-white absolute end-1.5 translate-y-1/2 bottom-1/2 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
    </div>
  </form>

  <div class="py-3">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="flex items-center gap-4 lg:gap-8">
        <div class="flex items-center gap-4 lg:gap-8">
          <button id="categoriesDropdownButton5" data-dropdown-toggle="categoriesDropdown5" type="button" title="" class="inline-flex items-center text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 group">
            <svg class="w-4 h-4 me-2 group-hover:text-primary-700 dark:group-hover:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
            </svg>                
            All categories
            <svg class="w-4 h-4 ms-1 group-hover:text-primary-700 dark:group-hover:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Mega Menu -->
          <div id="categoriesDropdown5" class="w-full xl:w-[1280px] hidden z-50 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <div class="lg:flex lg:items-stretch">
              <div class="p-4 space-y-2 border-gray-200 lg:border-r lg:w-72 dark:border-gray-600 shrink-0 sm:p-6">
                <a href="#" title="" class="flex items-center justify-between gap-4 px-4 py-2 text-sm font-semibold leading-none text-gray-900 bg-gray-100 rounded-lg dark:text-white dark:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v5m-3 0h6M4 11h16M5 15h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v9c0 .6.4 1 1 1Z" />
                  </svg>
                  Computer & Office
        
                  <svg class="w-4 h-4 text-gray-900 dark:text-white ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                  </svg>
                </a>
        
                <div class="p-4 rounded-lg lg:hidden dark:bg-gray-700 bg-gray-50">
                  <div class="grid grid-cols sm:grid-cols-2 gap-4 md:grid-cols-3">
                    <div class="space-y-6">
                      <ul class="space-y-2">
                        <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Laptops
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Gaming
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            2 in 1
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Business
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Home Office
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Ultrabook
                          </a>
                        </li>
                      </ul>
        
                      <ul class="space-y-2">
                        <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">Monitors</li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Build-In Speakers
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Audio & HiFi
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Audio & HiFi
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Home Cinema
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Sat Nav & Car Electronics
                          </a>
                        </li>
                      </ul>
                      <ul class="space-y-2">
                        <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Desktop PC
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Gaming PC
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Home Office
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Servers
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Mini PC
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            All in One PC
                          </a>
                        </li>
                      </ul>
                    </div>
        
                    <div class="space-y-6">
                      <ul class="space-y-2">
                        <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Tablets
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Best Sellers
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Phone Call Functionality
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Supports USB OTG
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            IOS
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Android
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Flowbite Global Store
                          </a>
                        </li>
                      </ul>
        
                      <ul class="space-y-2">
                        <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Memory & Storage
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Primary Storage Devices
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Magnetic Storage Devices
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Flash Memory Devices
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Optical Storage Devices
                          </a>
                        </li>
                        <li>
                          <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                            Cloud and Virtual Storage
                          </a>
                        </li>
                      </ul>
        
                      <ul class="space-y-2">
                        <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Printers & Ink
                        </p>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Best Sellers
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Laser Printers
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Inkjet Printers
                        </a>
                      </ul>
                    </div>
        
                    <div class="space-y-6">
                      <div class="space-y-2">
                        <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Computer Components
                        </p>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Graphics Cards
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Memory
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Motherboards
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Computer Cases
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Power Supplies
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          CPUS
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Network Cards
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          External Optical Drives
        
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          External Sound Cards
        
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Fans & Cooling
                        </a>
                      </div>
        
                      <div class="space-y-2">
                        <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Software
                        </p>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Operating Systems
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Antivirus & Security
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Home & Hobbies
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Language & Travel
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Programming & Web Development
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Music
                        </a>
                        <a href="#" title=""
                          class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Photography & Graphic Design
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z" />
                  </svg>
                  Fashion/Clothes
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
                  </svg>
                  Electronics
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 9h0M9 9h0m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM6.6 13a5.5 5.5 0 0 0 10.8 0H6.6Z" />
                  </svg>
                  Gaming/Consoles
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 16H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
                  </svg>
                  TV/Projectors
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16.9 9.7 20 6.6 17.4 4 4 17.4 6.6 20 16.9 9.7Zm0 0L14.3 7M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h0v0h0v0Zm2 2h0v0h0v0Zm2-2h0v0h0v0Zm8 8h0v0h0v0Zm-2 2h0v0h0v0Zm2 2h0v0h0v0Z" />
                  </svg>
                  Collectibles & Toys
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                      d="M4.4 7.7c2 .5 2.4 2.8 3.2 3.8 1 1.4 2 1.3 3.2 2.7 1.8 2.3 1.3 5.7 1.3 6.7M20 15h-1a4 4 0 0 0-4 4v1M8.6 4c0 .8.1 1.9 1.5 2.6 1.4.7 3 .3 3 2.3 0 .3 0 2 1.9 2 2 0 2-1.7 2-2 0-.6.5-.9 1.2-.9H20m1 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Sports & Outdoors
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M6 12c.3 0 .5 0 .8-.2.2 0 .4-.3.6-.5l.4-.7.2-.9c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6 0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6a2.5 2.5 0 0 0 .6 1.6l.6.5a1.8 1.8 0 0 0 1.6 0l.6-.5.4-.7.2-.9c0-1-1.1-3.8-1.6-5a1 1 0 0 0-1-.7h-11a1 1 0 0 0-.9.6A29 29 0 0 0 4 9.7c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7Zm0 0c.3 0 .7 0 1-.3l.7-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7.2.2.6.3.9.3.4 0 .7-.1 1-.4M6 12a2 2 0 0 1-1.2-.5m.2.5v7c0 .6.4 1 1 1h2v-5h3v5h7c.6 0 1-.4 1-1v-7m-5 3v2h2v-2h-2Z" />
                  </svg>
                  Food & Grocery
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 13.9a5 5 0 0 1 2 4V21M7 3v3.2A5 5 0 0 0 8.9 10M17 3v3.2a5 5 0 0 1-2.4 4.3l-5.2 3A5 5 0 0 0 7 17.8V21M7 5h10M7.4 8h9.3M8 16h8.7M7 19h10" />
                  </svg>
                  Health & Beauty
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                  </svg>
                  Car & Motorbike
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                  </svg>
                  Books
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5" />
                  </svg>
                  Home Air Quality
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
        
                <a href="#" title=""
                  class="group flex items-center justify-between gap-4 text-gray-900 dark:text-white px-4 py-2 text-sm font-semibold leading-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                      d="M4 18V8c0-.6.4-1 1-1h1.5l1.7-1.7c.2-.2.4-.3.7-.3h6.2c.3 0 .5.1.7.3L17.5 7H19c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1Z" />
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  Photo/Video
        
                  <div class="ml-auto transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                    </svg>
                  </div>
                </a>
              </div>
        
              <div class="flex-1 hidden min-w-0 lg:block bg-gray-50 dark:bg-gray-700 sm:p-6">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div class="space-y-6">
                    <ul class="space-y-2">
                      <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Laptops
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Gaming
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          2 in 1
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Business
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Home Office
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Ultrabook
                        </a>
                      </li>
                    </ul>
        
                    <ul class="space-y-2">
                      <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">Monitors</p>
                      <li>
                        <a href="#" title=""class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Build-In Speakers
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Audio & HiFi
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Audio & HiFi
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Headphones
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Home Cinema
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Sat Nav & Car Electronics
                        </a>
                      </li>
                    </ul>
        
                    <ul class="space-y-2">
                      <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Desktop PC
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Gaming PC
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Home Office
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Servers
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Mini PC
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          All in One PC
                        </a>
                      </li>
                    </ul>
                  </div>
        
                  <div class="space-y-6">
                    <ul class="space-y-2">
                      <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Tablets
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Best Sellers
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Phone Call Functionality
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Supports USB OTG
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          IOS
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Android
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Flowbite Global Store
                        </a>
                      </li>
                    </ul>
        
                    <ul class="space-y-2">
                      <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Memory & Storage
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Primary Storage Devices
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Magnetic Storage Devices
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Flash Memory Devices
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Optical Storage Devices
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Cloud and Virtual Storage
                        </a>
                      </li>
                    </ul>
        
                    <ul class="space-y-2">
                      <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Printers & Ink
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Best Sellers
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Laser Printers
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Inkjet Printers
                        </a>
                      </li>
                    </ul>
                  </div>
        
                  <div class="space-y-6">
                    <ul class="space-y-2">
                      <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Computer Components
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Graphics Cards
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Memory
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Motherboards
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Computer Cases
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Power Supplies
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          CPUS
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Network Cards
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          External Optical Drives
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          External Sound Cards
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Fans & Cooling
                        </a>
                      </li>
                    </ul>
        
                    <ul class="space-y-2">
                      <li class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Software
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Operating Systems
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Antivirus & Security
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Home & Hobbies
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Language & Travel
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Programming & Web 
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Music 
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" class="block text-sm font-normal text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900">
                          Photography & Graphic Design
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" title="" class="hidden text-sm font-medium text-gray-900 lg:block hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Best Sellers
          </a>

          <a href="#" title="" class="hidden text-sm font-medium text-gray-900 lg:block hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Gift Cards
          </a>

          <a href="#" title="" class="hidden text-sm font-medium text-gray-900 lg:block hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Gift Ideas
          </a>

          <a href="#" title="" class="hidden text-sm font-medium text-gray-900 lg:block hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Deal of the day
          </a>

          <a href="#" title="" class="hidden text-sm font-medium text-gray-900 lg:block hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Top Deals
          </a>

          <a href="#" title="" class="hidden text-sm font-medium text-gray-900 lg:block hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Membership Deals
          </a>

          <a href="#" title="" class="hidden text-sm font-medium text-gray-900 lg:block hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            New Releases
          </a>
        </div>

        <a href="#" title="" class="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 lg:hidden">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.9 1.3 3.9 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.2-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
          </svg>
          Deals
        </a>

        <div class="flex items-center ml-auto">
          <button type="button" data-collapse-toggle="ecommerce-navbar-menu-5" class="flex lg:hidden items-center rounded-lg justify-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
            <svg class="w-5 h-5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>            
            Menu
          </button>
        </div>
      </div>

      <div id="ecommerce-navbar-menu-5" class="hidden w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-2">
        <ul class="text-gray-900 dark:text-white text-sm font-medium space-y-3">
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Best Sellers</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Games</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Electronics</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home &amp; Garden</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
```

## Advanced navigation bar with mega menu

Use this example to show a four layered navigation that includes an announcement banner, dropdown menus for language, shopping cart, user settings, a search bar and a mega menu.

```html
<nav class="bg-white dark:bg-gray-800 antialiased">
  <div class="py-3 bg-primary-50 dark:bg-primary-900">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <a href="#" title="" class="flex items-center justify-center gap-2 text-sm hover:underline text-primary-700 dark:text-primary-300">
        🎮 Don't miss out on our Haloween Game Sale! Level up your collection!
        <svg class="w-4 h-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
        </svg>            
      </a>
    </div>
  </div>

  <div class="py-2.5 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="flex items-center justify-between">
        <div class="items-center hidden gap-4 sm:flex">
          <div class="items-center hidden gap-1 lg:inline-flex">
            <svg class="w-5 h-5 text-gray-500 dark:text-garay-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
            </svg>                
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Fast & Free Delivery
            </p>
          </div>

          <div class="items-center hidden gap-1 lg:inline-flex">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
            </svg>                
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Fair Prices
            </p>
          </div>

          <div class="inline-flex items-center gap-2">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            </div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
              5.0
            </p>
          </div>
        </div>

        <div class="flex flex-wrap sm:flex-nowrap items-center justify-normal w-full gap-4 sm:w-auto sm:justify-end">
          <button id="languageDropdownButton3" data-dropdown-toggle="languageDropdown3" type="button" class="inline-flex items-center text-sm font-medium hover:underline text-gray-900 dark:text-white">
            <img class="w-4 h-auto rounded-sm me-2" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg" alt="">
            English (USA)
            <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <div id="languageDropdown3" class="z-50 hidden w-56 overflow-hidden overflow-y-auto rounded-lg bg-white shadow dark:bg-gray-700">
            <div class="px-2 pt-2">
              <form class="mx-auto max-w-md">
                <label for="default-search" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search" required />
                </div>
              </form>
            </div>
        
            <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg" alt="" />
                  English (U.S.)
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/ca.svg" alt="" />
                  English (Canada)
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/gb.svg" alt="" />
                  English (U.K)
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/de.svg" alt="" />
                  Deutsch
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/fr.svg" alt="" />
                  Français
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/cn.svg" alt="" />
                  中國人
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/jp.svg" alt="" />
                  日本語
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/it.svg" alt="" />
                  Italiano
                </a>
              </li>
              <li>
                <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/es.svg" alt="" />
                  Español
                </a>
              </li>
            </ul>
          </div>

          <button id="locationDropdownButton3" data-dropdown-toggle="locationDropdown3" type="button" class="inline-flex items-center text-sm font-medium hover:underline text-gray-900 dark:text-white">
            <svg class="w-5 h-5 text-gray-900 dark:text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"></path>
            </svg>
            Location
            <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div id="locationDropdown3" class="z-50 hidden w-72 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
            <div class="flex flex-wrap items-center gap-x-4 gap-y-3 p-5">
              <div class="flex items-center">
                <input id="continents-checkbox" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> All </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-2" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Europe </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-3" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                <label for="continents-checkbox-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Americas </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-4" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Asia </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-5" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-5" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Oceania </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-6" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-6" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Africa </label>
              </div>
        
              <div class="flex items-center">
                <input id="continents-checkbox-7" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="continents-checkbox-7" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Antarctica </label>
              </div>
            </div>
        
            <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li class="py-2">
                <form class="mx-auto max-w-md">
                  <label for="country-search" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                      <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="search" id="country-search" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search for country" required />
                  </div>
                </form>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-11" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-11" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg" alt="" /> United States</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-12" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-12" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/ca.svg" alt="" /> Canada</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-13" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-13" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/gb.svg" alt="" /> United Kingdom</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-14" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-14" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/de.svg" alt="" /> Germany</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-15" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-15" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/fr.svg" alt="" /> France</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-16" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-16" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/cn.svg" alt="" /> China</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-17" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-17" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/jp.svg" alt="" /> Japan</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-18" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-18" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/it.svg" alt="" /> Italy</label>
              </li>
              <li class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="country-checkbox-19" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="country-checkbox-19" class="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"><img class="h-auto w-4 shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/es.svg" alt="" /> Spain</label>
              </li>
            </ul>
          </div>

          <a href="#" title="" class="inline-flex items-center gap-1 text-sm font-medium hover:underline text-gray-900 dark:text-white">
            <svg class="w-5 h-5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>                
            Support
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="py-4 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="flex flex-wrap items-center justify-between gap-x-16 gap-y-4 md:gap-x-8 lg:flex-nowrap">
        <div class="shrink-0 md:order-1">
          <a href="#" title="" class="">
            <img class="w-auto sm:flex h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="">
            <img class="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="">
          </a>
        </div>

        <div class="flex items-center justify-end md:order-3 lg:space-x-2">
          <button id="cartDropdownButton5" data-dropdown-toggle="cartDropdown5" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
            <span class="sr-only">
              Cart
            </span>
            <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
            </svg>                  
            <span class="hidden sm:flex me-1.5">4 items ($106.7)</span>
            <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg>
          </button>

          <div id="cartDropdown5" class="hidden z-50 mx-auto max-w-sm divide-y divide-gray-200 overflow-hidden rounded-lg bg-white antialiased shadow-lg dark:divide-gray-600 dark:bg-gray-700">
            <div class="p-4 ">
              <dl class="flex items-center gap-2">
                <dt class="font-semibold leading-none text-gray-900 dark:text-white">Your shopping cart</dt>
                <dd class="leading-none text-gray-500 dark:text-gray-400">(5 items)</dd>
              </dl>
            </div>
        
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,299</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button-20" data-input-counter-decrement="counter-input-20" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input-20" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                    <button type="button" id="increment-button-20" data-input-counter-increment="counter-input-20" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem20" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem20" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad PRO</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,899</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input-21" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button-21" data-input-counter-decrement="counter-input-21" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input-21" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="3" required />
                    <button type="button" id="increment-button-21" data-input-counter-increment="counter-input-21" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem21" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem21" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad PRO</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$899</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input-22" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button-22" data-input-counter-decrement="counter-input-22" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input-22" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                    <button type="button" id="increment-button-22" data-input-counter-increment="counter-input-22" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem22" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem22" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$999</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input-23" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button-23" data-input-counter-decrement="counter-input-23" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input-23" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                    <button type="button" id="increment-button-23" data-input-counter-increment="counter-input-23" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem23" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem23" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center gap-2">
                <a href="#" class="flex aspect-square h-9 w-9 shrink-0 items-center">
                  <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
                  <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
                </a>
                <div>
                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple Watch</a>
                  <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,099</p>
                </div>
              </div>
        
              <div class="flex items-center justify-end gap-3">
                <form action="#">
                  <label for="counter-input-24" class="sr-only">Choose quantity:</label>
                  <div class="relative flex items-center">
                    <button type="button" id="decrement-button-24" data-input-counter-decrement="counter-input-24" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input-24" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                    <button type="button" id="increment-button-24" data-input-counter-increment="counter-input-24" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </form>
                <button data-tooltip-target="tooltipRemoveItem24" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem24" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <div class="space-y-4 p-4">
              <dl class="flex items-center justify-between">
                <dt class="font-semibold leading-none text-gray-900 dark:text-white">Total</dt>
        
                <dd class="font-semibold leading-none text-gray-900 dark:text-white">$6,196</dd>
              </dl>
        
              <a href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> See your cart </a>
            </div>
          </div>

          <div class="block">
            <button id="accountDropdownButton5" data-dropdown-toggle="accountDropdown5" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
              <svg class="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>                  
              <span class="hidden lg:block">
                Account
              </span>
              <svg class="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- Dropdown Menu -->
            <div id="accountDropdown5" class="z-50 hidden w-60 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
              <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                    </svg>
                    My Orders
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z" />
                    </svg>
                    My Wallet
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                    </svg>
                    Favourites Items
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
                    </svg>
                    My Returns
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.9 1.3 3.9 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.2-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
                    </svg>
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5C11 8.5 9.4 7 7.5 7m3.5 9H4v-5.5C4 8.5 5.6 7 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                    </svg>
                    Subscriptions
                  </a>
                </li>
              </ul>
          
              <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z"
                      />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H7a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z" />
                    </svg>
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.4V3m0 2.4a5.3 5.3 0 0 1 5.1 5.3v1.8c0 2.4 1.9 3 1.9 4.2 0 .6 0 1.3-.5 1.3h-13c-.5 0-.5-.7-.5-1.3 0-1.2 1.9-1.8 1.9-4.2v-1.8A5.3 5.3 0 0 1 12 5.4ZM8.7 18c.1.9.3 1.5 1 2.1a3.5 3.5 0 0 0 4.6 0c.7-.6 1.3-1.2 1.4-2.1h-7Z" />
                    </svg>
                    Notifications
                  </a>
                </li>
              </ul>
          
              <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13c-2.8-.8-4.7-1-8-1a1 1 0 0 0-1 1v11c0 .6.5 1 1 1 3.2 0 5 .2 8 1m0-13c2.8-.8 4.7-1 8-1 .6 0 1 .5 1 1v11c0 .6-.5 1-1 1-3.2 0-5 .2-8 1" />
                    </svg>
                    Help Guide
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 10a2.5 2.5 0 1 1 5 .2 2.4 2.4 0 0 1-2.5 2.4V14m0 3h0m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Help Center
                  </a>
                </li>
              </ul>
          
              <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                <li>
                  <span class="group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    <svg class="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z" />
                    </svg>
                    Dark Mode
          
                    <label class="ml-auto inline-flex cursor-pointer items-center">
                      <input type="checkbox" value="" class="peer sr-only" name="dark-mode" />
                      <div
                        class="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-600 dark:peer-focus:ring-primary-800 rtl:peer-checked:after:-translate-x-full"
                      ></div>
                      <span class="sr-only">Toggle dark mode</span>
                    </label>
                  </span>
                </li>
              </ul>
          
              <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                <li>
                  <a href="#" title="" class="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-500 dark:hover:bg-gray-600">
                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                    </svg>
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="relative md:hidden">
            <button type="button"
              data-collapse-toggle="ecommerce-navbar-menu-5"
              class="inline-flex items-center justify-center p-2 text-sm rounded-lg font-medium leading-none text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="sr-only">
                Menu
              </span>
              <svg class="w-5 h-5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          </div>
        </div>

        <form class="w-full md:w-auto md:flex-1 md:order-2">
          <label for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search"
              class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search in all categories" required />
            <button type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
          </div>
        </form>

        <div id="ecommerce-navbar-menu-5" class="w-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4">
          <ul class="text-gray-900 dark:text-white text-sm font-medium space-y-3">
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Best Sellers</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Games</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Electronics</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-700 dark:hover:text-primary-500">Home & Garden</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="py-3 ">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <ul class="flex items-center gap-8">
        <li>
          <button id="dropdownMegaMenuButton" data-dropdown-toggle="dropdownMegaMenu" type="button" title="" class="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            All categories
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
            </svg>
          </button>
        </li>
        <!-- Mega menu -->
        <div id="dropdownMegaMenu" class="z-50 hidden w-full p-4 bg-white shadow-lg sm:py-8 dark:bg-gray-800">
          <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div class="grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div class="flex items-center gap-2">
                  <svg class="w-6 h-6 text-gray-900 shrink-0 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 16H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
                  </svg>
                  <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Electronics
                  </p>
                </div>
      
                <ul class="mt-4 space-y-2 overflow-y-auto max-h-72 lg:max-h-[420px]">
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      TV & Home Cinema
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Phones
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Computers
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Consoles/Gaming
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Camera & Photo
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Monitors
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Audio & HiFi
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Headphones
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Computer Components
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Headphones
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Home Cinema
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Sat Nav & Car Electronics
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Video Hardware
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Office Electronics
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Smart Home
                    </a>
                  </li>
                </ul>
              </div>
      
              <div>
                <div class="flex items-center gap-2">
                  <svg class="w-6 h-6 text-gray-900 shrink-0 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M6 12c.3 0 .5 0 .8-.2.2 0 .4-.3.6-.5l.4-.7.2-.9c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6 0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6a2.5 2.5 0 0 0 .6 1.6l.6.5a1.8 1.8 0 0 0 1.6 0l.6-.5.4-.7.2-.9c0-1-1.1-3.8-1.6-5a1 1 0 0 0-1-.7h-11a1 1 0 0 0-.9.6A29 29 0 0 0 4 9.7c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7Zm0 0c.3 0 .7 0 1-.3l.7-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7.2.2.6.3.9.3.4 0 .7-.1 1-.4M6 12a2 2 0 0 1-1.2-.5m.2.5v7c0 .6.4 1 1 1h2v-5h3v5h7c.6 0 1-.4 1-1v-7m-5 3v2h2v-2h-2Z" />
                  </svg>
                  <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Food & Grocery
                  </p>
                </div>
      
                <ul class="mt-4 space-y-2 overflow-y-auto max-h-72 lg:max-h-[420px]">
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Bakery and Bread
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Meat and Seafood
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Pasta and Rice
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Cereals and Breakfast Foods
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Frozen Foods
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Dairy, Cheese, and Eggs
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Snacks and Crackers
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Fruits
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Soup & Canned Goods
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Beer, Wine & Spirits
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Luxury Food & Drink
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Petshop
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Kitchen detergents
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Non-Alcoholic Drinks
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Vouchers
                    </a>
                  </li>
                </ul>
              </div>
      
              <div>
                <div class="flex items-center gap-2">
                  <svg class="w-6 h-6 text-gray-900 shrink-0 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z" />
                  </svg>
                  <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Fashion
                  </p>
                </div>
      
                <ul class="mt-4 space-y-2 overflow-y-auto max-h-72 lg:max-h-[420px]">
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Women's Clothing
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Women's Shoes
                    </a>  
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Women's Accessories
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Children's Clothing
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Children's Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Children's Accessories
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Men's Clothing
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Men's Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Men's Accessories
                    </a>
                  </li>
                </ul>
              </div>
      
              <div>
                <div class="flex items-center gap-2">
                  <svg class="w-6 h-6 text-gray-900 shrink-0 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                  </svg>
                  <p class="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Sports & Outdoors
                  </p>
                </div>
      
                <ul class="mt-4 space-y-2 overflow-y-auto max-h-72 lg:max-h-[420px]">
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Sport Clothes
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Sport Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Cycling
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Football
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Camping
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Fishing
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Paddle sports
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Team Sports
                    </a>  
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Hike
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Running
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Fitness & Nutrition
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Sports Accessories
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Tents
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      Other Sport activities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
      
            <div class="mt-8 lg:mt-12">
              <a href="#" title="" class="inline-flex items-center justify-center w-full py-2.5 px-5 gap-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" role="button">
                See all categories
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <li class="hidden sm:flex">
          <button type="button" title="" class="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Best Sellers
          </button>
        </li>
        <li class="hidden sm:flex">
          <button type="button" title="" class="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Today's Deals
          </button>
        </li>
        <li class="hidden sm:flex">
          <button type="button" title="" class="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Gift Ideas 
          </button>
        </li>
        <li class="hidden md:flex">
          <button type="button" title="" class="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Membership
          </button>
        </li>
        <li class="hidden sm:flex lg:hidden">
          <button type="button" title="" class="inline-flex items-center gap-1 text-sm font-medium text-gray-900 lg:hidden hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            More
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
            </svg>
          </button>
        </li>
        <li class="hidden md:flex">
          <button type="button" title="" class="items-center hidden gap-1 text-sm font-medium text-gray-900 lg:inline-flex hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Gift Cards
          </button>
        </li>
        <li class="hidden lg:flex">
          <button type="button" title="" class="items-center hidden gap-1 text-sm font-medium text-gray-900 lg:inline-flex hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Customer Service
          </button>
        </li>
        <li class="hidden md:flex">
          <button type="button" title="" class="items-center hidden gap-1 text-sm font-medium text-gray-900 lg:inline-flex hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
            Open a Shop
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
```