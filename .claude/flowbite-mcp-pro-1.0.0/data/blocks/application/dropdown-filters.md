## Default dropdown filter

Use this free example of a filter component to allow your users to select which categories to filter in the search results using checkbox components.

```html
<div class="flex items-center justify-center p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button">
    Filter by category
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
    <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
      Category
    </h6>
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li class="flex items-center">
        <input id="apple" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Apple (56)
        </label>
      </li>

      <li class="flex items-center">
        <input id="fitbit" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Fitbit (56)
        </label>
      </li>

      <li class="flex items-center">
        <input id="dell" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="dell" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Dell (56)
        </label>
      </li>

      <li class="flex items-center">
        <input id="asus" type="checkbox" value="" checked
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="asus" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Asus (97)
        </label>
      </li>

      <li class="flex items-center">
        <input id="logitech" type="checkbox" value="" checked
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="logitech" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Logitech (97)
        </label>
      </li>

      <li class="flex items-center">
        <input id="msi" type="checkbox" value="" checked
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="msi" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          MSI (97)
        </label>
      </li>

      <li class="flex items-center">
        <input id="bosch" type="checkbox" value="" checked
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="bosch" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Bosch (176)
        </label>
      </li>

      <li class="flex items-center">
        <input id="sony" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="sony" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Sony (234)
        </label>
      </li>

      <li class="flex items-center">
        <input id="samsung" type="checkbox" value="" checked
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="samsung" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Samsung (76)
        </label>
      </li>

      <li class="flex items-center">
        <input id="canon" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="canon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Canon (49)
        </label>
      </li>

      <li class="flex items-center">
        <input id="microsoft" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="microsoft" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Microsoft (45)
        </label>
      </li>

      <li class="flex items-center">
        <input id="razor" type="checkbox" value=""
          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Razor (49)
        </label>
      </li>
    </ul>
  </div>
</div>
```

## Advanced filter by keywords

Use this advanced example to allow users to filter search results via keywords, categories, price, shipping method, and rating inside a dropdown component with an accordion.

```html
<div class="flex items-center justify-center p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button">
    Filter by keywords
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden px-3 pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700">
    <div class="flex items-center justify-between pt-2">
      <h6 class="text-sm font-medium text-black dark:text-white">Filters</h6>
      <div class="flex items-center space-x-3">
        <a href="#"
          class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
          Save view
        </a>
        <a href="#"
          class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
          Clear all
        </a>
      </div>
    </div>
    <div class="pt-3 pb-2">
      <label for="input-group-search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <input type="text" id="input-group-search"
          class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search keywords..." />
      </div>
    </div>
    <div id="accordion-flush" data-accordion="collapse" data-active-classes="text-black dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400">
      <!-- Category -->
      <h2 id="category-heading">
        <button type="button"
          class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
          data-accordion-target="#category-body" aria-expanded="true" aria-controls="category-body">
          <span>Category</span>
          <svg aria-hidden="true" data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z">
            </path>
          </svg>
        </button>
      </h2>
      <div id="category-body" class="hidden" aria-labelledby="category-heading">
        <div class="py-2 font-light border-b border-gray-200 dark:border-gray-600">
          <ul class="space-y-2">
            <li class="flex items-center">
              <input id="apple" type="checkbox" value=""
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Apple (56)
              </label>
            </li>

            <li class="flex items-center">
              <input id="microsoft" type="checkbox" value=""
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="microsoft" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Microsoft (45)
              </label>
            </li>

            <li class="flex items-center">
              <input id="logitech" type="checkbox" value="" checked
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="logitech" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Logitech (97)
              </label>
            </li>

            <li class="flex items-center">
              <input id="sony" type="checkbox" value=""
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="sony" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Sony (234)
              </label>
            </li>

            <li class="flex items-center">
              <input id="asus" type="checkbox" value="" checked
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="asus" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Asus (97)
              </label>
            </li>

            <li class="flex items-center">
              <input id="dell" type="checkbox" value=""
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="dell" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Dell (56)
              </label>
            </li>

            <li class="flex items-center">
              <input id="msi" type="checkbox" value=""
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="msi" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                MSI (97)
              </label>
            </li>

            <li class="flex items-center">
              <input id="canon" type="checkbox" value="" checked
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="canon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Canon (49)
              </label>
            </li>

            <li class="flex items-center">
              <input id="benq" type="checkbox" value=""
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                BenQ (23)
              </label>
            </li>

            <li class="flex items-center">
              <input id="razor" type="checkbox" value=""
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

              <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Razor (49)
              </label>
            </li>

            <a href="#"
              class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
              View all
            </a>
          </ul>
        </div>
      </div>

      <!-- Price -->
      <h2 id="price-heading">
        <button type="button"
          class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
          data-accordion-target="#price-body" aria-expanded="true" aria-controls="price-body">
          <span>Price</span>
          <svg aria-hidden="true" data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z">
            </path>
          </svg>
        </button>
      </h2>
      <div id="price-body" class="hidden" aria-labelledby="price-heading">
        <div class="flex items-center py-2 space-x-3 font-light border-b border-gray-200 dark:border-gray-600">
          <select id="price-from"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option disabled selected>From</option>
            <option>$500</option>
            <option>$2500</option>
            <option>$5000</option>
          </select>

          <select id="price-to"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option disabled selected>To</option>
            <option>$500</option>
            <option>$2500</option>
            <option>$5000</option>
          </select>
        </div>
      </div>

      <!-- Worldwide Shipping -->
      <h2 id="worldwide-shipping-heading">
        <button type="button"
          class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
          data-accordion-target="#worldwide-shipping-body" aria-expanded="true"
          aria-controls="worldwide-shipping-body">
          <span>Worldwide Shipping</span>
          <svg aria-hidden="true" data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z">
            </path>
          </svg>
        </button>
      </h2>
      <div id="worldwide-shipping-body" class="hidden" aria-labelledby="worldwide-shipping-heading">
        <div class="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
          <label class="relative flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" name="shipping_method" checked />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
            </div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">North America</span>
          </label>

          <label class="relative flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" name="shipping_method" />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
            </div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">South America</span>
          </label>

          <label class="relative flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" name="shipping_method" />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
            </div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Asia</span>
          </label>

          <label class="relative flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" name="shipping_method" checked />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
            </div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Australia</span>
          </label>

          <label class="relative flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" name="shipping_method" />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
            </div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Europe</span>
          </label>
        </div>
      </div>

      <!-- Rating -->
      <h2 id="rating-heading">
        <button type="button"
          class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
          data-accordion-target="#rating-body" aria-expanded="true" aria-controls="rating-body">
          <span>Rating</span>
          <svg aria-hidden="true" data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z">
            </path>
          </svg>
        </button>
      </h2>
      <div id="rating-body" class="hidden" aria-labelledby="rating-heading">
        <div class="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center">
            <input id="five-stars" type="radio" value="" name="rating"
              class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="five-stars" class="flex items-center ml-2">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </label>
          </div>

          <div class="flex items-center">
            <input id="four-stars" type="radio" value="" name="rating"
              class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="four-stars" class="flex items-center ml-2">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </label>
          </div>

          <div class="flex items-center">
            <input id="three-stars" type="radio" value="" name="rating" checked
              class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="three-stars" class="flex items-center ml-2">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </label>
          </div>

          <div class="flex items-center">
            <input id="two-stars" type="radio" value="" name="rating"
              class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="two-stars" class="flex items-center ml-2">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </label>
          </div>

          <div class="flex items-center">
            <input id="one-star" type="radio" value="" name="rating"
              class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="one-star" class="flex items-center ml-2">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Filter by category

Use this example to show multiple options to filter using checkbox and radio elements split up by category labels.

```html
<div class="flex justify-center items-center p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button">
    Filter by categories
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden p-3 bg-white rounded-lg shadow w-72 dark:bg-gray-700">
    <h6 class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Columns</h6>
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="checkbox" value=""
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          Intent
        </label>
      </li>

      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="checkbox" value=""
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          SERP
        </label>
      </li>

      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="checkbox" value=""
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          SERP features
        </label>
      </li>

      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="checkbox" value=""
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          Position on the start date
        </label>
      </li>

      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="checkbox" value="" checked
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          Volume
        </label>
      </li>

      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="checkbox" value=""
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          CPC
        </label>
      </li>
    </ul>

    <h6 class="mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Additional settings
    </h6>
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="checkbox" value="" checked
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          Show tags in keywords
        </label>
      </li>

      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="checkbox" value="" checked
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          Show SERP feature icons
        </label>
      </li>
    </ul>

    <h6 class="mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Positions Chart
    </h6>
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="checkbox" value=""
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          Smart zoom
        </label>
      </li>
    </ul>

    <h6 class="mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Row height</h6>
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="radio" value="" name="row-height" checked
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          Show tags in keywords
        </label>
      </li>

      <li>
        <label
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md px-1.5 py-1 w-full">
          <input type="radio" value="" name="row-height"
            class="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          Show SERP feature icons
        </label>
      </li>
    </ul>

    <a href="#"
      class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline mt-4 ml-1.5">
      Apply to all projects
    </a>
  </div>
</div>
```

## Dropdown filter with tabs options

Use this example to break up your filter options into multiple tabs such as price, shipping method, and categories.

```html
<div class="flex items-center justify-center p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button">
    Filter with tabs
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden p-3 bg-white rounded-lg shadow w-72 dark:bg-gray-700">
    <div class="mb-4 border-b border-gray-200 dark:border-gray-600">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent"
        role="tablist">
        <li class="mr-1" role="presentation">
          <button class="inline-block pb-2 pr-1" id="price-tab" data-tabs-target="#price" type="button" role="tab"
            aria-controls="price" aria-selected="false">
            Price
          </button>
        </li>
        <li class="mr-1" role="presentation">
          <button class="inline-block pb-2 pr-1" id="shipping-tab" data-tabs-target="#shipping" type="button"
            role="tab" aria-controls="shipping" aria-selected="false">
            Shipping
          </button>
        </li>
        <li class="mr-1" role="presentation">
          <button class="inline-block pb-2 pr-1" id="brand-tab" data-tabs-target="#brand" type="button" role="tab"
            aria-controls="brand" aria-selected="false">
            Brands
          </button>
        </li>
      </ul>
    </div>

    <div id="myTabContent">
      <div class="grid grid-cols-2 gap-4" id="price" role="tabpanel" aria-labelledby="price-tab">
        <div class="flex items-center justify-between col-span-2 space-x-3">
          <div class="w-full">
            <label for="min-experience-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              From
            </label>

            <input type="number" id="price-from" value="300" min="1" max="10000"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="" required />
          </div>

          <div class="w-full">
            <label for="price-to" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              To
            </label>

            <input type="number" id="max-experience-input" value="3500" min="1" max="10000"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="" required />
          </div>
        </div>
      </div>
      <div class="space-y-2" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
        <div class="flex items-center">
          <input id="worldwide" type="checkbox" value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <label for="worldwide" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">
            Worldwide
          </label>
        </div>
        <div class="flex items-center">
          <input id="america" type="checkbox" value="" checked
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <label for="america" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">
            America
          </label>
        </div>
        <div class="flex items-center">
          <input id="europe" type="checkbox" value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <label for="europe" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">
            Europe
          </label>
        </div>
        <div class="flex items-center">
          <input id="asia" type="checkbox" value="" checked
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <label for="asia" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">
            Asia
          </label>
        </div>
        <div class="flex items-center">
          <input id="australia-oceania" type="checkbox" value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <label for="australia-oceania" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">
            Australia/Oceania
          </label>
        </div>
      </div>
      <div id="brand" role="tabpanel" aria-labelledby="brand-tab">
        <ul class="space-y-2 text-sm">
          <li class="flex items-center">
            <input id="apple" type="checkbox" value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

            <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Apple (56)
            </label>
          </li>

          <li class="flex items-center">
            <input id="dell" type="checkbox" value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

            <label for="dell" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Dell (56)
            </label>
          </li>

          <li class="flex items-center">
            <input id="asus" type="checkbox" value="" checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

            <label for="asus" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Asus (97)
            </label>
          </li>

          <li class="flex items-center">
            <input id="logitech" type="checkbox" value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

            <label for="logitech" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Logitech (97)
            </label>
          </li>

          <li class="flex items-center">
            <input id="msi" type="checkbox" value="" checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

            <label for="msi" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              MSI (97)
            </label>
          </li>

          <li class="flex items-center">
            <input id="sony" type="checkbox" value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

            <label for="sony" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Sony (234)
            </label>
          </li>

          <li class="flex items-center">
            <input id="canon" type="checkbox" value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

            <label for="canon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Canon (49)
            </label>
          </li>

          <li class="flex items-center">
            <input id="microsoft" type="checkbox" value="" checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

            <label for="microsoft" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Microsoft (45)
            </label>
          </li>

          <li class="flex items-center">
            <input id="razor" type="checkbox" value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

            <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Razor (49)
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

## Filter by properties

This advanced example can be used to add multiple properties and options to the current filtering feature inside a dropdown component.

```html
<div class="flex justify-center items-center p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button">
    Filter by properties
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <!-- Dropdown menu -->
  <form action="#" method="get" id="dropdown"
    class="z-10 hidden w-full max-w-screen-md p-3 space-y-3 bg-white rounded-lg shadow dark:bg-gray-700"
    aria-labelledby="dropdownDefault">
    <div class="flex items-center space-x-3 rounded-lg">
      <div class="grid w-full grid-cols-2 gap-2 md:gap-3 md:grid-cols-4">
        <select id="include"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option value="" selected disabled>Include</option>
          <option>All</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>

        <select id="referring-domain"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option value="" selected disabled>Referring domain</option>
          <option>Flowbite.com</option>
          <option>Facebook.com</option>
          <option>Twitter.com</option>
          <option>Google.com</option>
        </select>

        <input type="text" placeholder="Exactly matching"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />

        <input type="text" placeholder="Enter domain"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
      </div>

      <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20"
          fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
        </svg>
        <span class="sr-only">Delete</span>
      </button>
    </div>

    <div class="flex items-center space-x-3 rounded-lg">
      <div class="grid w-full grid-cols-2 gap-2 md:gap-3 md:grid-cols-4">
        <select id="include-1"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option value="" selected disabled>Include</option>
          <option>All</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>

        <select id="referring-domain-1"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option value="" selected disabled>Referring domain</option>
          <option>Flowbite.com</option>
          <option>Facebook.com</option>
          <option>Twitter.com</option>
          <option>Google.com</option>
        </select>

        <input type="text" placeholder="Exactly matching"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />

        <input type="text" placeholder="Enter domain"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
      </div>

      <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20"
          fill="currentColor">
          <path fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd" />
        </svg>
        <span class="sr-only">Delete</span>
      </button>
    </div>
    <a href="#"
      class="flex items-center pb-2 text-sm font-medium border-b dark:border-gray-600 text-primary-600 dark:text-primary-500 hover:underline">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clip-rule="evenodd" />
      </svg>
      Add Property
    </a>
    <div class="flex items-center justify-between">
      <button type="submit"
        class="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">
        Apply
      </button>
      <button type="reset"
        class="py-2.5 px-5 flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 text-sm font-medium text-gray-900 focus:outline-none rounded-lg hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
        </svg>
        Clear all
      </button>
    </div>
  </form>
</div>
```

## Filter by status

This example can be used to filter search results by status using checkbox elements and indicators inside the dropdown component.

```html
<div class="flex justify-center items-center p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button">
    Filter by status
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden p-3 bg-white rounded-lg shadow w-72 dark:bg-gray-700">
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="all" type="checkbox" value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <div class="w-3 h-3 ml-2 border-2 rounded-full"></div>
          <label for="all" class="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
            All
          </label>
        </div>
        <div class="text-gray-400">244</div>
      </li>

      <li class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="admitted" type="checkbox" value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <div class="w-3 h-3 ml-2 bg-green-400 border-2 border-green-400 rounded-full"></div>
          <label for="admitted"
            class="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
            Admitted
          </label>
        </div>
        <div class="text-gray-400">123</div>
      </li>

      <li class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="temporarily-admitted" type="checkbox" value="" checked
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <div class="w-3 h-3 ml-2 border-2 rounded-full border-primary-500 bg-primary-500"></div>
          <label for="temporarily-admitted"
            class="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
            Temporarily admitted
          </label>
        </div>
        <div class="text-gray-400">22</div>
      </li>

      <li class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="awaiting-verification" type="checkbox" value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <div class="w-3 h-3 ml-2 bg-gray-200 border-2 border-gray-200 rounded-full"></div>
          <label for="awaiting-verification"
            class="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
            Awaiting verification
          </label>
        </div>
        <div class="text-gray-400">12</div>
      </li>

      <li class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="requires-recheck" type="checkbox" value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <div class="w-3 h-3 ml-2 bg-orange-300 border-2 border-orange-300 rounded-full"></div>
          <label for="requires-recheck"
            class="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
            Requires recheck
          </label>
        </div>
        <div class="text-gray-400">56</div>
      </li>

      <li class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="rejected" type="checkbox" value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

          <div class="w-3 h-3 ml-2 bg-red-500 border-2 border-red-500 rounded-full"></div>
          <label for="rejected"
            class="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
            Rejected
          </label>
        </div>
        <div class="text-gray-400">6</div>
      </li>
    </ul>
  </div>
</div>
```

## Advanced filter options

Use this example to show multiple filter option filters inside a dropdown include price range sliders, text input fields, checkboxes and radio input elements.

```html
<div class="flex justify-center items-center p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button">
    Advanced filter
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  <!-- Dropdown menu -->
  <form action="#" method="get" id="dropdown" class="z-10 hidden max-w-screen-sm p-3 space-y-4 bg-white rounded-lg shadow dark:bg-gray-700"
    aria-labelledby="dropdownDefault">
    <h5 id="drawer-label" class="inline-flex items-center text-gray-500 dark:text-gray-400">
      Filter
    </h5>

    <!-- Price -->
    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Price Range
      </label>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <input id="min-price" type="range" min="0" max="7000" value="300" step="1"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600" />
        </div>

        <div>
          <input id="max-price" type="range" min="0" max="7000" value="3500" step="1"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600" />
        </div>

        <div class="flex items-center justify-between space-x-2 md:col-span-2">
          <div class="w-full">
            <label for="min-price-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
            <input type="number" id="min-price-input" value="300" min="0" max="7000"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="" />
          </div>

          <div class="w-full">
            <label for="max-price-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
            <input type="number" id="max-price-input" value="3500" min="0" max="7000"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Sales -->
    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Sales
      </label>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <input id="min-sales" type="range" min="0" max="7000" value="300" step="1"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600" />
        </div>

        <div>
          <input id="max-sales" type="range" min="0" max="7000" value="3500" step="1"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600" />
        </div>

        <div class="flex items-center justify-between space-x-2 md:col-span-2">
          <div class="w-full">
            <label for="min-sales-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
            <input type="number" id="min-sales-input" value="1" min="0" max="300"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="" />
          </div>

          <div class="w-full">
            <label for="max-sales-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
            <input type="number" id="max-sales-input" value="100" min="0" max="300"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Job title -->
    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Category
      </label>
      <ul class="grid w-full grid-cols-2 gap-3">
        <li>
          <input type="checkbox" id="gaming" name="category" value="" class="hidden peer" />
          <label for="gaming"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
            Gaming
          </label>
        </li>
        <li>
          <input type="checkbox" id="electronics" name="category" value="" class="hidden peer" />
          <label for="electronics"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
            Electronics
          </label>
        </li>
        <li>
          <input type="checkbox" id="phone" name="category" value="" class="hidden peer" checked />
          <label for="phone"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
            Phone
          </label>
        </li>

        <li>
          <input type="checkbox" id="tv-monitor" name="category" value="" class="hidden peer" />
          <label for="tv-monitor"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
            TV/Monitor
          </label>
        </li>
        <li>
          <input type="checkbox" id="laptop" name="category" value="" class="hidden peer" />
          <label for="laptop"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
            Laptop
          </label>
        </li>
        <li>
          <input type="checkbox" id="watch" name="category" value="" class="hidden peer" checked />
          <label for="watch"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
            Watch
          </label>
        </li>
      </ul>
    </div>

    <!-- State -->
    <div>
      <h6 class="mb-2 text-sm font-medium text-black dark:text-white">
        State
      </h6>

      <ul
        class="flex flex-col items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input id="state-all" type="radio" value="" name="list-radio" checked
              class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="state-all" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              All
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input id="state-new" type="radio" value="" name="list-radio"
              class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="state-new" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              New
            </label>
          </div>
        </li>
        <li class="w-full">
          <div class="flex items-center pl-3">
            <input id="state-used" type="radio" value="" name="list-radio"
              class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="state-used" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Refurbished
            </label>
          </div>
        </li>
      </ul>
    </div>

    <div class="flex mt-6 space-x-4">
      <button type="submit"
        class="px-2.5 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Show 32 Results
      </button>
      <button type="reset"
        class="px-2.5 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Reset
      </button>
    </div>
  </form>
</div>
```

## Filter by range

Use this example to filter search results based on a price range using buttons and input field elements inside a dropdown.

```html
<div class="flex items-center justify-center p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="button">
    Filter by range
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  <!-- Dropdown menu -->
  <form action="#" method="get" id="dropdown" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
    aria-labelledby="dropdownDefault">
    <ul class="space-y-2 text-sm">
      <li class="flex items-center">
        <button type="button"
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 w-full px-1.5 py-1 rounded-md">
          100,001+
        </button>
      </li>

      <li class="flex items-center">
        <button type="button"
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 w-full px-1.5 py-1 rounded-md">
          10,001-100,000
        </button>
      </li>

      <li class="flex items-center">
        <button type="button"
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 w-full px-1.5 py-1 rounded-md">
          1001-10,000
        </button>
      </li>

      <li class="flex items-center">
        <button type="button"
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 w-full px-1.5 py-1 rounded-md">
          101-1,000
        </button>
      </li>

      <li class="flex items-center">
        <button type="button"
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 w-full px-1.5 py-1 rounded-md">
          11-100
        </button>
      </li>

      <li class="flex items-center">
        <button type="button"
          class="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 w-full px-1.5 py-1 rounded-md">
          1-10
        </button>
      </li>
      <div class="py-2 font-light border-t border-gray-200 dark:border-gray-600">
        <h6 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Custom range
        </h6>

        <div class="flex items-center space-x-3">
          <input type="number" id="price-from" placeholder="From"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />

          <input type="number" id="price-to" placeholder="To"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
        </div>
      </div>
      <button type="submit"
        class="w-full px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800">
        Apply 
      </button>
    </ul>
  </form>
</div>
```
