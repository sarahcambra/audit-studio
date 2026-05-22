## Default product section

Use this component to show an image of the product, title, description, pricing, rating, and the CTA buttons to purchase the item.

```html
<section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
          <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
          <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" />
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >
            Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
            Mac OS, Pink
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
            >
              $1,249.99
            </p>

            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              <div class="flex items-center gap-1">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </div>
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                (5.0)
              </p>
              <a
                href="#"
                class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
              >
                345 Reviews
              </a>
            </div>
          </div>

          <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <a
              href="#"
              title=""
              class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              role="button"
            >
              <svg
                class="w-5 h-5 -ms-2 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              Add to favorites
            </a>

            <a
              href="#"
              title=""
              class="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
              role="button"
            >
              <svg
                class="w-5 h-5 -ms-2 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>

              Add to cart
            </a>
          </div>

          <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

          <p class="mb-6 text-gray-500 dark:text-gray-400">
            Studio quality three mic array for crystal clear calls and voice
            recordings. Six-speaker sound system for a remarkably robust and
            high-quality audio experience. Up to 256GB of ultrafast SSD storage.
          </p>

          <p class="text-gray-500 dark:text-gray-400">
            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
            Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
            Magic Keyboard or Magic Keyboard with Touch ID.
          </p>
        </div>
      </div>
    </div>
  </section>
```

## Product with image gallery and tabs

Use this example to show a gallery of images of the product, title, description, rating, shipping methods and the CTA buttons to purchase the item and quantity.

```html
<section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
  <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="max-w-md lg:max-w-lg mx-auto">
        <div id="product-1-tab-content">
            <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-900" id="product-1-image-1" role="tabpanel" aria-labelledby="product-1-image-1-tab">
              <img class="w-full mx-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
              <img class="w-full mx-auto hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" />
            </div>
            <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-900" id="product-1-image-2" role="tabpanel" aria-labelledby="product-1-image-2-tab">
              <img class="w-full mx-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg" alt="" />
              <img class="w-full mx-auto hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg" alt="" />
            </div>
            <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-900" id="product-1-image-3" role="tabpanel" aria-labelledby="product-1-image-3-tab">
              <img class="w-full mx-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg" alt="" />
              <img class="w-full mx-auto hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg" alt="" />
            </div>
            <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-900" id="product-1-image-4" role="tabpanel" aria-labelledby="product-1-image-4-tab">
              <img class="w-full mx-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg" alt="" />
              <img class="w-full mx-auto hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg" alt="" />
            </div>
        </div>

        <ul class="grid grid-cols-4 gap-4 mt-8" id="product-1-tab" data-tabs-toggle="#product-1-tab-content" data-tabs-active-classes="border-gray-200 dark:border-gray-700" data-tabs-inactive-classes="border-transparent hover:border-gray-200 dark:hover:dark:border-gray-700 dark:border-transparent" role="tablist">
          <li class="me-2" role="presentation">
              <button class="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto" id="product-1-image-1-tab" data-tabs-target="#product-1-image-1" type="button" role="tab" aria-controls="product-1-image-1" aria-selected="false">
                <img
                  class="object-contain w-full h-full dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                  alt=""
                />
                <img
                  class="object-contain w-full h-full hidden dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                  alt=""
                />
              </button>
          </li>
          <li class="me-2" role="presentation">
              <button class="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto" id="product-1-image-2-tab" data-tabs-target="#product-1-image-2" type="button" role="tab" aria-controls="product-1-image-2" aria-selected="false">
                <img
                  class="object-contain w-full h-full dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
                  alt=""
                />
                <img
                  class="object-contain w-full h-full hidden dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg"
                  alt=""
                />
              </button>
          </li>
          <li class="me-2" role="presentation">
              <button class="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto" id="product-1-image-3-tab" data-tabs-target="#product-1-image-3" type="button" role="tab" aria-controls="product-1-image-3" aria-selected="false">
                <img
                  class="object-contain w-full h-full dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
                  alt=""
                />
                <img
                  class="object-contain w-full h-full hidden dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
                  alt=""
                />
              </button>
          </li>
          <li class="me-2" role="presentation">
              <button class="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto" id="product-1-image-4-tab" data-tabs-target="#product-1-image-4" type="button" role="tab" aria-controls="product-1-image-4" aria-selected="false">
                <img
                  class="object-contain w-full h-full dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg"
                  alt=""
                />
                <img
                  class="object-contain w-full h-full hidden dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg"
                  alt=""
                />
              </button>
          </li>
        </ul>

      </div>

      <div class="mt-6 md:mt-0">
        <span
          class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
        >
          In stock
        </span>
        <p
          class="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
        >
          Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
          Mac OS, Pink
        </p>
        <div class="mt-4 xl:items-center xl:gap-4 xl:flex">
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-1">
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>
            </div>
            <p
              class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
            >
              (5.0)
            </p>
            <a
              href="#"
              class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
            >
              345 Reviews
            </a>
          </div>

          <div class="flex items-center gap-1 mt-4 xl:mt-0">
            <svg
              class="w-5 h-5 text-primary-700 dark:text-primary-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
              />
            </svg>
            <p
              class="text-sm font-medium text-primary-700 dark:text-primary-500"
            >
              Deliver to Bonnie Green- Sacramento 23647
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between gap-4 mt-6 sm:mt-8">
          <p
            class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
          >
            $1,249.99
          </p>

          <form class="flex items-center gap-2 sm:hidden">
            <div class="flex items-center gap-1">
              <label
                for="quantity"
                class="text-sm font-medium text-gray-900 dark:text-white"
                >Quantity</label
              >
              <button
                data-tooltip-target="quantity-desc-1"
                data-tooltip-trigger="hover"
                class="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="quantity-desc-1"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Quantity: Number of units to purchase.
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <select
              id="quantity"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected>Choose quantity</option>
              <option value="2" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>
        </div>

        <div class="mt-6 sm:gap-4 sm:flex sm:items-center sm:mt-8">
          <div class="sm:gap-4 sm:items-center sm:flex">
            <a
              href="#"
              title=""
              class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              role="button"
            >
              <svg
                class="w-5 h-5 -ms-2 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              Add to favorites
            </a>

            <a
              href="#"
              title=""
              class="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
              role="button"
            >
              <svg
                class="w-5 h-5 -ms-2 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>

              Add to cart
            </a>
          </div>

          <form class="items-center hidden gap-2 sm:flex">
            <div class="flex items-center gap-1">
              <label
                for="quantity"
                class="text-sm font-medium text-gray-900 dark:text-white"
                >Quantity</label
              >
              <button
                data-tooltip-target="quantity-desc-2"
                data-tooltip-trigger="hover"
                class="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="quantity-desc-2"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Quantity: Number of units to purchase.
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <select
              id="quantity"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected>0</option>
              <option value="2" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>
        </div>

        <hr class="mt-6 border-gray-200 sm:mt-8 dark:border-gray-700" />

        <div
          class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 sm:mt-8 sm:gap-y-8"
        >
          <div>
            <p class="text-base font-medium text-gray-900 dark:text-white">
              Colour
            </p>

            <div class="flex flex-wrap items-center gap-2 mt-2">
              <label for="green" class="relative block">
                <input
                  type="radio"
                  name="colour"
                  id="green"
                  class="absolute appearance-none top-2 left-2 peer"
                />
                <div
                  class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                >
                  <p class="text-sm font-medium">Green</p>
                </div>
              </label>

              <label for="pink" class="relative block">
                <input
                  type="radio"
                  name="colour"
                  id="pink"
                  class="absolute appearance-none top-2 left-2 peer"
                />
                <div
                  class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                >
                  <p class="text-sm font-medium">Pink</p>
                </div>
              </label>

              <label for="silver" class="relative block">
                <input
                  type="radio"
                  name="colour"
                  id="silver"
                  class="absolute appearance-none top-2 left-2 peer"
                />
                <div
                  class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                >
                  <p class="text-sm font-medium">Silver</p>
                </div>
              </label>

              <label for="blue" class="relative block">
                <input
                  type="radio"
                  name="colour"
                  id="blue"
                  class="absolute appearance-none top-2 left-2 peer"
                />
                <div
                  class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                >
                  <p class="text-sm font-medium">Blue</p>
                </div>
              </label>
            </div>
          </div>

          <div>
            <p class="text-base font-medium text-gray-900 dark:text-white">
              SSD capacity
            </p>

            <div class="flex flex-wrap items-center gap-2 mt-2">
              <label for="256gb" class="relative block">
                <input
                  type="radio"
                  name="capacity"
                  id="256gb"
                  class="absolute appearance-none top-2 left-2 peer"
                />
                <div
                  class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                >
                  <p class="text-sm font-medium">256GB</p>
                </div>
              </label>

              <label for="512gb" class="relative block">
                <input
                  type="radio"
                  name="capacity"
                  id="512gb"
                  class="absolute appearance-none top-2 left-2 peer"
                />
                <div
                  class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                >
                  <p class="text-sm font-medium">512GB</p>
                </div>
              </label>

              <label for="1tb" class="relative block">
                <input
                  type="radio"
                  name="capacity"
                  id="1tb"
                  class="absolute appearance-none top-2 left-2 peer"
                />
                <div
                  class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                >
                  <p class="text-sm font-medium">1TB</p>
                </div>
              </label>
            </div>
          </div>

          <div class="sm:col-span-2">
            <p class="text-base font-medium text-gray-900 dark:text-white">
              Pickup
            </p>

            <div class="flex flex-col gap-4 mt-2 sm:flex-row">
              <div class="flex">
                <div class="flex items-center h-5">
                  <input
                    id="shipping-checkbox"
                    aria-describedby="shipping-checkbox-text"
                    name="shipping"
                    type="radio"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div class="text-sm ms-2">
                  <label
                    for="shipping-checkbox"
                    class="font-medium text-gray-900 dark:text-white"
                  >
                    Shipping - $19
                  </label>
                  <p
                    id="shipping-checkbox-text"
                    class="text-xs font-normal text-gray-500 dark:text-gray-400"
                  >
                    Arrives Nov 17
                  </p>
                </div>
              </div>

              <div class="flex">
                <div class="flex items-center h-5">
                  <input
                    id="pickup-checkbox"
                    aria-describedby="pickup-checkbox-text"
                    name="shipping"
                    type="radio"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div class="text-sm ms-2">
                  <label
                    for="pickup-checkbox"
                    class="font-medium text-gray-900 dark:text-white"
                  >
                    Pickup from Flowbox- $9
                  </label>
                  <a
                    href="#"
                    title=""
                    id="pickup-checkbox-text"
                    class="block text-xs font-medium underline text-primary-700 hover:no-underline dark:text-primary-500"
                  >
                    Pick a Flowbox near you
                  </a>
                </div>
              </div>

              <div class="flex">
                <div class="flex items-center h-5">
                  <input
                    id="pickup-store-checkbox"
                    aria-describedby="pickup-store-checkbox-text"
                    name="shipping"
                    type="radio"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    disabled
                  />
                </div>
                <div class="text-sm ms-2">
                  <label
                    for="pickup-store-checkbox"
                    class="font-medium text-gray-400 dark:text-gray-500"
                  >
                    Pickup from our store
                  </label>
                  <p
                    id="pickup-store-checkbox-text"
                    class="text-xs font-normal text-gray-400 dark:text-gray-500"
                  >
                    Not available
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <p class="text-base font-medium text-gray-900 dark:text-white">
              Add extra warranty
            </p>

            <div class="flex flex-wrap items-center gap-4 mt-2">
              <div class="flex items-center">
                <input
                  id="1-year"
                  name="warranty"
                  type="radio"
                  value=""
                  class="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="1-year"
                  class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  1 year - $39
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="2-years"
                  type="radio"
                  name="warranty"
                  value=""
                  class="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="2-years"
                  class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  2 years - $69
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="3-years"
                  type="radio"
                  name="warranty"
                  value=""
                  class="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="3-years"
                  class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  3 years - $991
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Product with accordion and sidebar

Use this example to show a list of specifications inside of an accordion below the product image gallery and with a sidebar with more advanced options.

```html
<section class="py-8 bg-white md:py-16 xl:py-24 dark:bg-gray-900 antialiased">
  <div class="max-w-screen-xl mx-auto">
    <div class="lg:flex justify-between">
      <div class="px-4">
        <div class="max-w-md lg:max-w-none mx-auto flex flex-col lg:flex-row justify-center mb-4">
          <ul class="grid grid-cols-4 lg:block gap-4 order-2 lg:order-1 lg:space-y-4 mt-8 lg:mt-0" id="product-2-tab" data-tabs-toggle="#product-2-tab-content" data-tabs-active-classes="border-gray-200 dark:border-gray-700" data-tabs-inactive-classes="border-transparent hover:border-gray-200 dark:hover:dark:border-gray-700 dark:border-transparent" role="tablist">
            <li class="me-2" role="presentation">
                <button class="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto" id="product-2-image-1-tab" data-tabs-target="#product-2-image-1" type="button" role="tab" aria-controls="product-2-image-1" aria-selected="false">
                  <img
                    class="object-contain w-full h-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                    alt=""
                  />
                  <img
                    class="object-contain w-full h-full hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                    alt=""
                  />
                </button>
            </li>
            <li class="me-2" role="presentation">
                <button class="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto" id="product-2-image-2-tab" data-tabs-target="#product-2-image-2" type="button" role="tab" aria-controls="product-2-image-2" aria-selected="false">
                  <img
                    class="object-contain w-full h-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
                    alt=""
                  />
                  <img
                    class="object-contain w-full h-full hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg"
                    alt=""
                  />
                </button>
            </li>
            <li class="me-2" role="presentation">
                <button class="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto" id="product-2-image-3-tab" data-tabs-target="#product-2-image-3" type="button" role="tab" aria-controls="product-2-image-3" aria-selected="false">
                  <img
                    class="object-contain w-full h-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
                    alt=""
                  />
                  <img
                    class="object-contain w-full h-full hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
                    alt=""
                  />
                </button>
            </li>
            <li class="me-2" role="presentation">
                <button class="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto" id="product-2-image-4-tab" data-tabs-target="#product-2-image-4" type="button" role="tab" aria-controls="product-2-image-4" aria-selected="false">
                  <img
                    class="object-contain w-full h-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg"
                    alt=""
                  />
                  <img
                    class="object-contain w-full h-full hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg"
                    alt=""
                  />
                </button>
            </li>
          </ul>

          <div id="product-2-tab-content" class="order-1 lg:order-2">
              <div class="hidden px-4 rounded-lg bg-white dark:bg-gray-900" id="product-2-image-1" role="tabpanel" aria-labelledby="product-2-image-1-tab">
                <img class="w-full mx-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
                <img class="w-full mx-auto hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" />
              </div>
              <div class="hidden px-4 rounded-lg bg-white dark:bg-gray-900" id="product-2-image-2" role="tabpanel" aria-labelledby="product-2-image-2-tab">
                <img class="w-full mx-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg" alt="" />
                <img class="w-full mx-auto hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg" alt="" />
              </div>
              <div class="hidden px-4 rounded-lg bg-white dark:bg-gray-900" id="product-2-image-3" role="tabpanel" aria-labelledby="product-2-image-3-tab">
                <img class="w-full mx-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg" alt="" />
                <img class="w-full mx-auto hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg" alt="" />
              </div>
              <div class="hidden px-4 rounded-lg bg-white dark:bg-gray-900" id="product-2-image-4" role="tabpanel" aria-labelledby="product-2-image-4-tab">
                <img class="w-full mx-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg" alt="" />
                <img class="w-full mx-auto hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg" alt="" />
              </div>
          </div>
        </div>

        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
          <h2 id="accordion-flush-heading-1">
            <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
              <span>Product Details</span>
              <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">The product is a high-quality, durable solution designed to meet the needs of modern consumers. It features advanced technology and ergonomic design for optimal performance and comfort.</p>
              <p class="text-gray-500 dark:text-gray-400">Key features include a sleek interface, customizable settings, and compatibility with various devices. It is ideal for professionals and enthusiasts alike.</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
              <span>Specifications</span>
              <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">Specifications include advanced processor capabilities, extensive storage options, and seamless connectivity. The product is designed to handle demanding tasks efficiently.</p>
              <p class="text-gray-500 dark:text-gray-400">Additional features include high-resolution display, long-lasting battery life, and intuitive user interface for enhanced productivity.</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
              <span>Warranty</span>
              <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">The product comes with a comprehensive warranty that covers manufacturing defects and malfunctions. It provides peace of mind and assurance of product quality.</p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">Customers can enjoy reliable support and prompt assistance for any issues related to the product during the warranty period.</p>
            </div>
          </div>
        </div>
        
      </div>

      <div class="w-full mt-6 lg:max-w-lg lg:mt-0 shrink-0 px-4">
        <div
          class="p-4 border border-gray-200 rounded-lg sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        >
          <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
            Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM
          </h1>

          <div class="mt-4 sm:gap-4 sm:items-center sm:flex">
            <span
              class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
            >
              the last 2 products
            </span>

            <div class="flex items-center gap-2 mt-4 sm:mt-0">
              <div class="flex items-center gap-1">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </div>
              <a
                href="#"
                class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
              >
                345 Reviews
              </a>
            </div>
          </div>

          <div class="flex items-center gap-1 mt-4">
            <svg
              class="w-5 h-5 text-primary-700 dark:text-primary-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
              />
            </svg>
            <p
              class="text-sm font-medium text-primary-700 dark:text-primary-500"
            >
              Deliver to Bonnie Green- Sacramento 23647
            </p>
          </div>

          <div
            class="gap-4 mt-4 md:mt-6 flex items-center justify-between"
          >
            <p
              class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
            >
              $1,249.99
            </p>

            <form class="flex items-center gap-2 mt-0">
              <div class="flex items-center gap-1">
                <label
                  for="quantity"
                  class="text-sm font-medium text-gray-900 dark:text-white"
                  >Quantity</label
                >
                <button
                  data-tooltip-target="quantity-desc-3"
                  data-tooltip-trigger="hover"
                  class="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="quantity-desc-3"
                  role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                Quantity: Number of units to purchase.
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <select
                id="quantity"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected>0</option>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </form>
          </div>

          <div class="gap-4 mt-4 md:mt-6 sm:flex sm:items-center lg:flex-col">
            <a
              href="#"
              title=""
              class="flex items-center w-full justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              role="button"
            >
              <svg
                class="w-5 h-5 -ms-2 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              Add to favorites
            </a>

            <a
              href="#"
              title=""
              class="text-white w-full mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
              role="button"
            >
              <svg
                class="w-5 h-5 -ms-2 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>

              Add to cart
            </a>
          </div>

          <p class="mt-4 md:mt-6 text-sm font-normal text-gray-500 dark:text-gray-400">
            Also available at competitive prices from
            <a href="#" title="" class="font-medium underline text-primary-700 hover:no-underline dark:text-primary-500">authorized retailers</a>,
            with optional Premium delivery for expedited shipping.
          </p>

          <div
            class="pt-8 mt-8 space-y-6 border-t border-gray-200 dark:border-gray-700"
          >
            <div>
              <p class="text-base font-medium text-gray-900 dark:text-white">
                Colour
              </p>

              <div class="flex flex-wrap items-center gap-2 mt-2">
                <label for="green2" class="relative block">
                  <input
                    type="radio"
                    name="colour2"
                    id="green2"
                    class="absolute appearance-none top-2 left-2 peer"
                  />
                  <div
                    class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-white peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                  >
                    <p class="text-sm font-medium">Green</p>
                  </div>
                </label>

                <label for="pink2" class="relative block">
                  <input
                    type="radio"
                    name="colour2"
                    id="pink2"
                    class="absolute appearance-none top-2 left-2 peer"
                  />
                  <div
                    class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-white peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                  >
                    <p class="text-sm font-medium">Pink</p>
                  </div>
                </label>

                <label for="silver2" class="relative block">
                  <input
                    type="radio"
                    name="colour2"
                    id="silver2"
                    class="absolute appearance-none top-2 left-2 peer"
                  />
                  <div
                    class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-white peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                  >
                    <p class="text-sm font-medium">Silver</p>
                  </div>
                </label>

                <label for="blue2" class="relative block">
                  <input
                    type="radio"
                    name="colour2"
                    id="blue2"
                    class="absolute appearance-none top-2 left-2 peer"
                  />
                  <div
                    class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-white peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                  >
                    <p class="text-sm font-medium">Blue</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <p class="text-base font-medium text-gray-900 dark:text-white">
                SSD capacity
              </p>

              <div class="flex flex-wrap items-center gap-2 mt-2">
                <label for="256gb2" class="relative block">
                  <input
                    type="radio"
                    name="capacity2"
                    id="256gb2"
                    class="absolute appearance-none top-2 left-2 peer"
                  />
                  <div
                    class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-white peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                  >
                    <p class="text-sm font-medium">256GB</p>
                  </div>
                </label>

                <label for="512gb2" class="relative block">
                  <input
                    type="radio"
                    name="capacity2"
                    id="512gb2"
                    class="absolute appearance-none top-2 left-2 peer"
                  />
                  <div
                    class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-white peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                  >
                    <p class="text-sm font-medium">512GB</p>
                  </div>
                </label>

                <label for="1tb2" class="relative block">
                  <input
                    type="radio"
                    name="capacity2"
                    id="1tb2"
                    class="absolute appearance-none top-2 left-2 peer"
                  />
                  <div
                    class="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-white peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                  >
                    <p class="text-sm font-medium">1TB</p>
                  </div>
                </label>
              </div>
            </div>

            <div class="sm:col-span-2">
              <p class="text-base font-medium text-gray-900 dark:text-white">
                Pickup
              </p>

              <div class="flex flex-col gap-4 mt-2">
                <div class="flex">
                  <div class="flex items-center h-5">
                    <input
                      id="shipping-checkbox2"
                      aria-describedby="shipping-checkbox-text2"
                      type="radio"
                      value=""
                      name="shipping-2"
                      class="w-4 h-4 bg-white border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div class="text-sm ms-2">
                    <label
                      for="shipping-checkbox2"
                      class="font-medium text-gray-900 dark:text-white"
                    >
                      Shipping - $19
                    </label>
                    <p
                      id="shipping-checkbox-text2"
                      class="text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      Arrives Nov 17
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex items-center h-5">
                    <input
                      id="pickup-checkbox2"
                      aria-describedby="pickup-checkbox-text2"
                      type="radio"
                      value=""
                      name="shipping-2"
                      class="w-4 h-4 bg-white border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div class="text-sm ms-2">
                    <label
                      for="pickup-checkbox2"
                      class="font-medium text-gray-900 dark:text-white"
                    >
                      Pickup from Flowbox- $9
                    </label>
                    <a
                      href="#"
                      title=""
                      id="pickup-checkbox-text2"
                      class="block text-xs font-medium underline text-primary-700 hover:no-underline dark:text-primary-500"
                    >
                      Pick a Flowbox near you
                    </a>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex items-center h-5">
                    <input
                      id="pickup-store-checkbox2"
                      aria-describedby="pickup-store-checkbox-text2"
                      type="radio"
                      value=""
                      name="shipping-2"
                      class="w-4 h-4 bg-white border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      disabled
                    />
                  </div>
                  <div class="text-sm ms-2">
                    <label
                      for="pickup-store-checkbox2"
                      class="font-medium text-gray-400 dark:text-gray-500"
                    >
                      Pickup from our store
                    </label>
                    <p
                      id="pickup-store-checkbox-text2"
                      class="text-xs font-normal text-gray-400 dark:text-gray-500"
                    >
                      Not available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="sm:col-span-2">
              <p class="text-base font-medium text-gray-900 dark:text-white">
                Add extra warranty
              </p>

              <div class="flex flex-wrap items-center gap-4 mt-2">
                <div class="flex items-center">
                  <input
                    id="1-year2"
                    type="radio"
                    value=""
                    name="warranty-2"
                    class="w-4 h-4 bg-white border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="1-year2"
                    class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                  >
                    1 year - $39
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="2-years2"
                    type="radio"
                    value=""
                    name="warranty-2"
                    class="w-4 h-4 bg-white border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="2-years2"
                    class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                  >
                    2 years - $69
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="3-years2"
                    type="radio"
                    name="warranty-2"
                    value=""
                    class="w-4 h-4 bg-white border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="3-years2"
                    class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                  >
                    3 years - $991
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
```

## Product with image carousel

Use this example to show the product images inside of a carousel component and show two more columns of product information and CTA buttons.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink, MJVA3LL/A</h1>

      <div class="mt-4 sm:flex sm:items-center sm:gap-4">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1">
            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
          </div>
          <p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(5.0)</p>
          <a href="#" class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"> 345 Reviews </a>
        </div>

        <div class="mt-4 flex items-center gap-1 sm:mt-0">
          <svg class="h-5 w-5 text-primary-700 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
          </svg>
          <p class="text-sm font-medium text-primary-700 dark:text-primary-500">Deliver to Bonnie Green- Sacramento 23647</p>
        </div>
      </div>

      <div class="mt-8 lg:flex lg:items-start lg:gap-8">
        <div class="lg:w-full lg:max-w-xl">
          <div id="controls-carousel" class="relative w-full" data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative mb-5 h-80 overflow-hidden rounded-lg lg:h-[340px] xl:h-[400px]">
              <!-- Item 1 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" class="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden" alt="..." />
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" class="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 hidden dark:block" alt="..." />
              </div>
              <!-- Item 2 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg" class="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden" alt="..." />
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg" class="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 hidden dark:block" alt="..." />
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg" class="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden" alt="..." />
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg" class="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 hidden dark:block" alt="..." />
              </div>
              <!-- Item 4 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg" class="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden" alt="..." />
                <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg" class="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 hidden dark:block" alt="..." />
              </div>
            </div>
            <div class="flex items-center justify-center gap-4">
              <button type="button" class="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800" data-carousel-prev>
                <span class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <svg class="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                  </svg>
                  <span class="hidden">Previous</span>
                </span>
              </button>
              <span class="text-base font-medium text-gray-500 dark:text-gray-400"><span id="carousel-current-item">1</span> of <span id="carousel-total-items">5</span></span>
              <button type="button" class="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800" data-carousel-next>
                <span class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <svg class="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                  <span class="hidden">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-6 grid md:min-w-72 shrink-0 grid-cols-1 gap-6 dark:border-gray-700 sm:mt-8 sm:grid-cols-2 lg:mt-0 lg:w-48 lg:grid-cols-1 lg:border-r lg:border-gray-200 lg:pr-8">
          <div class="space-y-2">
            <p class="text-sm font-semibold text-gray-900 dark:text-white">Personal pick up from:</p>
            <div class="space-y-1 rounded-lg border border-gray-100 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800">
              <p class="text-sm font-medium text-gray-900 dark:text-white">Sacramento Post Office</p>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Thursday, Nov 23 - Friday, Nov 24</p>
              <p class="text-sm font-medium text-green-600 dark:text-green-400">Free of charge</p>
            </div>
            <a href="#" title="" class="flex items-center gap-1 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
              See all delivery options
              <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
              </svg>
            </a>
          </div>

          <div>
            <p class="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Benefits</p>
            <ul class="mb-2 space-y-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
                Free return within 30 days
              </li>
              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
                Warranty included
              </li>
              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
                Damage and theft insurance
              </li>
            </ul>
            <a href="#" title="" class="text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"> More details </a>
          </div>
        </div>

        <div class="mt-6 md:min-w-96 space-y-6 sm:mt-8 lg:mt-0">
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="flex items-center gap-2">
                <p class="text-xl font-bold text-gray-900 dark:text-white">
                  <strike> $1,499.00 </strike>
                </p>
                <span class="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"> -15% </span>
              </div>
              <p class="text-3xl font-extrabold text-gray-900 dark:text-white">$1,274.00</p>
            </div>

            <ul class="shrink-0 space-y-1 text-sm font-medium">
              <li class="flex items-center gap-1 text-green-600 dark:text-green-400">
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                  />
                </svg>
                In Stock
              </li>

              <li class="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                Free Delivery
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-1">
            <label for="one-time-payment" class="relative flex">
              <input type="radio" name="payment-type" id="one-time-payment" class="peer absolute left-4 top-4 z-10 h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <div class="relative flex-1 cursor-pointer space-y-0.5 overflow-hidden rounded-lg border border-gray-200 py-4 pl-10 pr-4 peer-checked:border-primary-700 dark:border-gray-700 dark:peer-checked:border-primary-600">
                <p class="text-sm font-medium leading-none text-gray-900 dark:text-white">$1,249.00</p>
                <p class="text-xs font-normal text-gray-500 dark:text-gray-400">One Time Payment</p>
              </div>
            </label>

            <label for="financing" class="relative flex">
              <input type="radio" name="payment-type" id="financing" class="peer absolute left-4 top-4 z-10 h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
              <div class="relative flex-1 cursor-pointer space-y-0.5 overflow-hidden rounded-lg border border-gray-200 py-4 pl-10 pr-4 peer-checked:border-primary-700 dark:border-gray-700 dark:peer-checked:border-primary-600">
                <p class="text-sm font-medium leading-none text-gray-900 dark:text-white">$45.13/mo</p>
                <p class="text-xs font-normal text-gray-500 dark:text-gray-400">24-Month Financing with Flowbite Banking+</p>
              </div>
            </label>

            <label for="installments" class="relative flex">
              <input type="radio" name="payment-type" id="installments" class="peer absolute left-4 top-4 z-10 h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <div class="relative flex-1 cursor-pointer space-y-0.5 overflow-hidden rounded-lg border border-gray-200 py-4 pl-10 pr-4 peer-checked:border-primary-700 dark:border-gray-700 dark:peer-checked:border-primary-600">
                <p class="text-sm font-medium leading-none text-gray-900 dark:text-white">$312.25/mo</p>
                <p class="text-xs font-normal text-gray-500 dark:text-gray-400">
                  4 equal installments, with
                  <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">My Wallet</a>
                </p>
              </div>
            </label>
          </div>

          <div class="flex items-center space-x-4">
            <a href="#" title="" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button">
              <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>

              Add to cart
            </a>

            <button type="button" data-tooltip-target="tooltip-add-to-favorites" class="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" role="button">
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
              </svg>
            </button>
            <div id="tooltip-add-to-favorites" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Add to favorites
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <hr class="border-gray-200 dark:border-gray-700" />

          <div>
            <p class="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              Sold and shipped by
              <span class="font-semibold text-gray-900 dark:text-white">Flowbite</span>
            </p>

            <div class="mb-2 flex items-center gap-2">
              <div class="flex items-center gap-1">
                <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>
              <p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(5.0)</p>
              <a href="#" class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"> 345 Reviews </a>
            </div>

            <a href="#" title="" class="text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"> View seller information </a>
          </div>
        </div>
      </div>
    </div>
  </section>
```

## Product overview with background cover

Use this example to show an overview of the product with a background cover and a detailed description with CTA buttons.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-800 md:pb-16 lg:pt-0 lg:dark:bg-gray-900">
  <div class="hidden h-[448px] overflow-hidden lg:block">
    <img class="h-full w-full object-cover dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/playstation-cover.png" alt="" />
    <img class="hidden h-full w-full object-cover dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/playstation-cover-dark.png" alt="" />
  </div>

  <div class="relative mx-auto max-w-screen-xl px-4 lg:-mt-48">
    <div class="border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:rounded-lg lg:rounded-b-none lg:border lg:p-8">
      <div class="gap-12 lg:flex">
        <div class="min-w-0 flex-1 gap-8 sm:flex sm:items-start">
          <div class="shrink-0">
            <div class="w-36 shrink-0 overflow-hidden rounded-lg">
              <img class="h-full w-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/playstation.png" alt="" />
            </div>
            <button type="button" class="mt-2 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 lg:w-full">
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd" />
              </svg>
              Open gallery
            </button>
          </div>

          <div class="mt-4 min-w-0 flex-1 sm:mt-0">
            <span class="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"> Save $50.00 </span>

            <h1 class="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">PlayStation®5 Console</h1>

            <div class="mt-4 flex flex-wrap items-center gap-4">
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                  <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>
                <p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(5.0)</p>
                <a href="#" class="cursor-pointer text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">34.5k Reviews</a>
              </div>

              <div class="flex items-center gap-1.5">
                <svg class="h-5 w-5 text-primary-700 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                <p class="text-sm font-medium text-primary-700 dark:text-primary-500">Free delivery</p>
              </div>

              <div class="flex items-center gap-1.5">
                <svg class="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
                </svg>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Free returns</p>
              </div>
            </div>

            <div class="mt-4 hidden space-y-2 sm:block">
              <p class="text-base font-semibold text-gray-900 dark:text-white">Quick description:</p>
              <div class="space-y-4">
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">The PS5® console* unleashes new gaming possibilities that you never anticipated.</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio**, and an all-new generation of incredible PlayStation® games.</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, the PS5 is offered in two models: with and without a 4K Blu-ray drive. Supporting a 120Hz video refresh, the PS5 is more powerful than the PS4 Pro. Rather than GDDR5 memory, GDDR6 is supported with capacity doubled from 8 to 16GB. Storage is an NVMe 825GB SSD rather than a hard drive.</p>
              </div>
            </div>
          </div>
        </div>

        <hr class="hidden border-gray-200 dark:border-gray-700 sm:mt-8 sm:block lg:hidden" />

        <div class="mt-6 shrink-0 space-y-8 sm:mt-8 lg:mt-0 lg:w-full lg:max-w-xs">
          <div>
            <p class="text-2xl font-medium leading-none text-gray-900 dark:text-white">Starting from <span class="font-extrabold">$499</span></p>
            <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">Flexible payments available with PayPal and VISA or Mastercard.</p>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div class="space-y-4">
              <a href="#" title="" class="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-full" role="button">
                <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2" />
                </svg>
                Customize your device
              </a>

              <a href="#" title="" class="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0" role="button">
                <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                </svg>

                Buy now
              </a>

              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Available at a lower price from
                <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">other sellers</a>.
              </p>
            </div>

            <div class="sm:hidden">
              <p class="text-base font-semibold text-gray-900 dark:text-white lg:mt-4">Quick description:</p>
              <div class="mt-2 space-y-4">
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">The PS5® console* unleashes new gaming possibilities that you never anticipated.</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio**, and an all-new generation of incredible PlayStation® games.</p>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, the PS5 is offered in two models: with and without a 4K Blu-ray drive. Supporting a 120Hz video refresh, the PS5 is more powerful than the PS4 Pro. Rather than GDDR5 memory, GDDR6 is supported with capacity doubled from 8 to 16GB. Storage is an NVMe 825GB SSD rather than a hard drive.</p>
              </div>
            </div>

            <hr class="hidden border-gray-200 dark:border-gray-700 lg:block" />

            <ul class="hidden list-outside list-disc space-y-2 pl-4 text-sm font-normal text-gray-500 dark:text-gray-400 sm:block">
              <li>Due to high demand, there is a limit of 1 console per order.</li>
              <li>Only 1 DualSense included.</li>
              <li>PS5 consoles will ship separately.</li>
              <li>A signature will be required upon delivery for this product.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

