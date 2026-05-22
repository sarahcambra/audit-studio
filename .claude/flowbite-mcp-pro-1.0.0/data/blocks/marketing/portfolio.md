## Default portfolio example

Use this example to show a list of company clients and case study previews inside a website section featuring the client, title of the project, a description and CTA button.

```html
<section class="bg-white dark:bg-gray-900 antialiased">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Our work
      </h2>
      <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Crafted with skill and care to help our clients grow their business!
      </p>
    </div>

    <div class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      <div class="space-y-4">
        <span
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Alphabet Inc.
        </span>
        <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Official website
        </h3>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
          Flowbite helps you connect with friends, family and communities of people who share your interests.
        </p>
        <a href="#" title=""
          class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          role="button">
          View case study
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <div class="space-y-4">
        <span
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Microsoft Corp.
        </span>
        <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Management system
        </h3>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
          Flowbite helps you connect with friends, family and communities of people who share your interests.
        </p>
        <a href="#" title=""
          class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          role="button">
          View case study
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <div class="space-y-4">
        <span
          class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Adobe Inc.
        </span>
        <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Logo design
        </h3>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
          Flowbite helps you connect with friends, family and communities of people who share your interests.
        </p>
        <a href="#" title=""
          class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          role="button">
          View case study
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
```

## Portfolio alternate sections

Use this example to show alternating website sections featuring client work with case studies, a featured image, description, technologies used, and CTA buttons.

```html
<section class="bg-white dark:bg-gray-900 antialiased">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Our work
      </h2>
      <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Flowbite helps you connect with friends, family and communities of people who share your interests.
      </p>
    </div>

    <div class="mt-12 space-y-16 sm:mt-16">
      <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
        <div>
          <img class="object-cover w-full rounded-lg shadow-lg dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard.jpg" alt="">
          <img class="object-cover w-full rounded-lg shadow-lg dark:block hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard-dark.jpg" alt="">
        </div>

        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
          <div class="space-y-3">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              Flowbite's dashboard
            </h3>
            <a href="https://flowbite.com" title=""
              class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
              https://flowbite.com
              <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of people who share your interests.
              Connecting with your
              friends and family as well as discovering new ones is easy with features like Groups.
            </p>
          </div>

          <div class="flex items-center gap-2.5">
            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
            </div>
            <div id="tooltip-logo-html5" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              HTML5
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-css3" class="object-contain w-auto h-8"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" alt="">
            </div>
            <div id="tooltip-logo-css3" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              CSS3
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-javascript" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/javascript.svg" alt="">
            </div>
            <div id="tooltip-logo-javascript" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              JavaScript
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
            </div>
            <div id="tooltip-logo-tailwind-css" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Tailwind CSS
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-typescript" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" alt="">
            </div>
            <div id="tooltip-logo-typescript" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              TypeScript
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <a href="#" title=""
            class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            View case study
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
        <div class="lg:order-2">
          <img class="object-cover w-full rounded-lg shadow-lg dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg" alt="">
          <img class="object-cover w-full rounded-lg shadow-lg dark:block hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg" alt="">
        </div>

        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl lg:order-1">
          <div class="space-y-3">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              Agency Landing Page
            </h3>
            <a href="https://themesberg.com" title=""
              class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
              https://themesberg.com
              <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of people who share your interests.
              Connecting with your
              friends and family as well as discovering new ones is easy with features like Groups.
            </p>
          </div>

          <div class="flex items-center gap-2.5">
            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-wordpress" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/wordpress.svg" alt="">
            </div>
            
            <div id="tooltip-logo-wordpress" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              WordPress
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
            </div>
            <div id="tooltip-logo-html5" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              HTML5
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-css3" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" alt="">
            </div>
            <div id="tooltip-logo-css3" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              CSS3
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-woocommerce" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/woocommerce.svg" alt="">
            </div>
            <div id="tooltip-logo-woocommerce" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              WooCommerce
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <a href="#" title=""
            class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            View case study
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
        <div>
          <img class="object-cover w-full rounded-lg shadow-lg dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg"
            alt="">
          <img class="object-cover w-full rounded-lg shadow-lg dark:block hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg"
            alt="">
        </div>

        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
          <div class="space-y-3">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              Mail management system
            </h3>
            <a href="https://ui.glass" title=""
              class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
              https://ui.glass
              <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of people who share your interests.
              Connecting with your
              friends and family as well as discovering new ones is easy with features like Groups.
            </p>
          </div>

          <div class="flex items-center gap-2.5">
            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-typescript" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" alt="">
            </div>
            <div id="tooltip-logo-typescript" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              TypeScript
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-java" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg" alt="">
            </div>
            <div id="tooltip-logo-java" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Java
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
            </div>
            <div id="tooltip-logo-tailwind-css" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Tailwind CSS
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-react" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" alt="">
            </div>
            <div id="tooltip-logo-react" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              React
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
            </div>
            <div id="tooltip-logo-html5" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              HTML5
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-amazon-web-services" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg" alt="">
            </div>
            <div id="tooltip-logo-amazon-web-services" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Amazon Web Services
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <a href="#" title=""
            class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            View case study
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Grid layout with image and CTA and preview

This example can be used to show three projects on a row featuring an image, title, description, and two CTA buttons for the project case study and live preview of the website.

```html
<section class="bg-white dark:bg-gray-900 antialiased">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Custom works
      </h2>
      <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Flowbite helps you connect with friends, family and communities of people who share your interests.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-12 mt-12 sm:gap-8 lg:gap-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <img class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg"
          alt="">
        <img class="object-cover w-full rounded-lg shadow-lg hidden dark:block mb-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg"
          alt="">
        <div class="space-y-3 mb-6">
          <span
            class="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clip-rule="evenodd" />
            </svg>
            Figma design
          </span>
          <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#" class="hover:underline">Agency Landing Page</a>
          </h3>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of people who share your interests.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <a href="#" title=""
            class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Case study
          </a>

          <a href="#" title=""
            class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button">
            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Live preview
          </a>
        </div>
      </div>

      <div>
        <img class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool.jpg"
          alt="">
        <img class="object-cover w-full rounded-lg shadow-lg mb-6 dark:block hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool-dark.jpg"
          alt="">
        <div class="space-y-3 mb-6">
          <span
            class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
            Front-end
          </span>
          <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#" class="hover:underline">Analytics tool</a>
          </h3>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of people who share your interests.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <a href="#" title=""
            class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Case study
          </a>

          <a href="#" title=""
            class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button">
            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Live preview
          </a>
        </div>
      </div>

      <div>
        <img class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management.jpg"
          alt="">
        <img class="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management-dark.jpg"
          alt="">
        <div class="space-y-3 mb-6">
          <span
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                clip-rule="evenodd" />
            </svg>
            Back-end
          </span>
          <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#" class="hover:underline">Task management system</a>
          </h3>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of people who share your interests.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <a href="#" title=""
            class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Case study
          </a>

          <a href="#" title=""
            class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button">
            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Live preview
          </a>
        </div>
      </div>

      <div>
        <img class="object-cover w-full rounded-lg shadow-lg mb-6 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard.jpg"
          alt="">
        <img class="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard-dark.jpg"
          alt="">
        <div class="space-y-3 mb-6">
          <span
            class="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clip-rule="evenodd" />
            </svg>
            Figma design
          </span>
          <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#" class="hover:underline">Flowbite's dashboard</a>
          </h3>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of people who share your interests.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <a href="#" title=""
            class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Case study
          </a>

          <a href="#" title=""
            class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button">
            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Live preview
          </a>
        </div>
      </div>

      <div>
        <img class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo.jpg"
          alt="">
        <img class="object-cover w-full rounded-lg shadow-lg mb-6 dark:block hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo-dark.jpg"
          alt="">
        <div class="space-y-3 mb-6">
          <span
            class="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clip-rule="evenodd" />
            </svg>
            Figma design
          </span>
          <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#" class="hover:underline">NGO Landing Page</a>
          </h3>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of people who share your interests.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <a href="#" title=""
            class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Case study
          </a>

          <a href="#" title=""
            class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button">
            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Live preview
          </a>
        </div>
      </div>

      <div>
        <img class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg"
          alt="">
        <img class="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg"
          alt="">
        <div class="space-y-3 mb-6">
          <span
            class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
            Front-end
          </span>
          <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#" class="hover:underline">Mail management system</a>
          </h3>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of people who share your interests.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <a href="#" title=""
            class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Case study
          </a>

          <a href="#" title=""
            class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button">
            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Live preview
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Project portfolio with carousel

This example can be used to show a list of clients and case studies inside a carousel slider component featuring client logo, project name, description, technologies used and a CTA button.

```html
<section class="bg-white dark:bg-gray-900 antialiased">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="max-w-2xl space-y-6">
      <div>
        <p class="text-lg font-medium leading-none text-primary-600 dark:text-primary-500">
          Trusted Worldwide
        </p>
        <h2 class="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Trusted by over 100 companies and 10,000+ freelancers
        </h2>
        <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
          Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect
          you
          and your
          customers.
        </p>
      </div>

      <div class="space-y-4">
        <a href="#" title=""
          class="flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500">
          View all projects
          <svg aria-hidden="true" class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>

        <a href="#" title=""
          class="flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500">
          View all testimonials
          <svg aria-hidden="true" class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>

    <div id="animation-carousel" data-carousel="slide" class="mt-8 sm:mt-12 lg:mt-16">
      <div class="relative overflow-hidden h-[400px]">

        <!-- Carousel item 1 -->
        <div class="hidden duration-700 ease-in-out bg-white dark:bg-gray-900" data-carousel-item>
          <div class="grid grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3">
            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/ford.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Official website
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-flowbite" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/flowbite.svg" alt="">
                </div>
                
                <div id="tooltip-logo-flowbite" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Flowbite
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
                </div>
                
                <div id="tooltip-logo-tailwind-css" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Tailwind CSS
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
                </div>
                
                <div id="tooltip-logo-html5" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  HTML5
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-css3" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" alt="">
                </div>
                
                <div id="tooltip-logo-css3" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  CSS3
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>

            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/fedex.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Management system
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-typescript" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" alt="">
                </div>
                
                <div id="tooltip-logo-typescript" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  TypeScript
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-java" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg" alt="">
                </div>
                
                <div id="tooltip-logo-java" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Java
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
                </div>
                
                <div id="tooltip-logo-tailwind-css" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Tailwind CSS
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-react" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" alt="">
                </div>
                
                <div id="tooltip-logo-react" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  React
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
                </div>
                
                <div id="tooltip-logo-html5" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  HTML5
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-amazon-web-services" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg" alt="">
                </div>
                
                <div id="tooltip-logo-amazon-web-services" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Amazon Web Services
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>

            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/intel.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Logo design
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-figma" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/figma.svg" alt="">
                </div>
                
                <div id="tooltip-logo-figma" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Figma
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-illustrator" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/illustrator.svg" alt="">
                </div>
                
                <div id="tooltip-logo-illustrator" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Adobe Illustrator
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>
          </div>
        </div>

         <!-- Carousel item 2 -->
        <div class="hidden duration-700 ease-in-out bg-white dark:bg-gray-900" data-carousel-item>
          <div class="grid grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3">
            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Official website
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-flowbite" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/flowbite.svg" alt="">
                </div>
                
                <div id="tooltip-logo-flowbite" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Flowbite
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
                </div>
                
                <div id="tooltip-logo-tailwind-css" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Tailwind CSS
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
                </div>
                
                <div id="tooltip-logo-html5" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  HTML5
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-css3" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" alt="">
                </div>
                
                <div id="tooltip-logo-css3" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  CSS3
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>

            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/netflix.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Management system
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-typescript" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" alt="">
                </div>
                
                <div id="tooltip-logo-typescript" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  TypeScript
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-java" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg" alt="">
                </div>
                
                <div id="tooltip-logo-java" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Java
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
                </div>
                
                <div id="tooltip-logo-tailwind-css" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Tailwind CSS
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-react" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" alt="">
                </div>
                
                <div id="tooltip-logo-react" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  React
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
                </div>
                
                <div id="tooltip-logo-html5" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  HTML5
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-amazon-web-services" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg" alt="">
                </div>
                
                <div id="tooltip-logo-amazon-web-services" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Amazon Web Services
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>

            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Logo design
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-figma" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/figma.svg" alt="">
                </div>
                
                <div id="tooltip-logo-figma" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Figma
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-illustrator" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/illustrator.svg" alt="">
                </div>
                
                <div id="tooltip-logo-illustrator" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Adobe Illustrator
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>
          </div>
        </div>

        <!-- Carousel item 3 -->
        <div class="hidden duration-700 ease-in-out bg-white dark:bg-gray-900" data-carousel-item>
          <div class="grid grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3">
            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/ford.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Official website
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-flowbite" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/flowbite.svg" alt="">
                </div>
                
                <div id="tooltip-logo-flowbite" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Flowbite
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
                </div>
                
                <div id="tooltip-logo-tailwind-css" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Tailwind CSS
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
                </div>
                
                <div id="tooltip-logo-html5" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  HTML5
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-css3" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" alt="">
                </div>
                
                <div id="tooltip-logo-css3" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  CSS3
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>

            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/fedex.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Management system
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-typescript" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" alt="">
                </div>
                
                <div id="tooltip-logo-typescript" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  TypeScript
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-java" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg" alt="">
                </div>
                
                <div id="tooltip-logo-java" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Java
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
                </div>
                
                <div id="tooltip-logo-tailwind-css" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Tailwind CSS
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-react" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" alt="">
                </div>
                
                <div id="tooltip-logo-react" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  React
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
                </div>
                
                <div id="tooltip-logo-html5" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  HTML5
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-amazon-web-services" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg" alt="">
                </div>
                
                <div id="tooltip-logo-amazon-web-services" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Amazon Web Services
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>

            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/intel.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Logo design
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-figma" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/figma.svg" alt="">
                </div>
                
                <div id="tooltip-logo-figma" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Figma
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-illustrator" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/illustrator.svg" alt="">
                </div>
                
                <div id="tooltip-logo-illustrator" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Adobe Illustrator
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>
          </div>
        </div>

         <!-- Carousel item 4 -->
        <div class="hidden duration-700 ease-in-out bg-white dark:bg-gray-900" data-carousel-item>
          <div class="grid grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3">
            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Official website
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-flowbite" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/flowbite.svg" alt="">
                </div>
                
                <div id="tooltip-logo-flowbite" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Flowbite
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
                </div>
                
                <div id="tooltip-logo-tailwind-css" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Tailwind CSS
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
                </div>
                
                <div id="tooltip-logo-html5" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  HTML5
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-css3" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" alt="">
                </div>
                
                <div id="tooltip-logo-css3" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  CSS3
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>

            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/netflix.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Management system
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">
                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-typescript" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" alt="">
                </div>
                
                <div id="tooltip-logo-typescript" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  TypeScript
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-java" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg" alt="">
                </div>
                
                <div id="tooltip-logo-java" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Java
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
                </div>
                
                <div id="tooltip-logo-tailwind-css" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Tailwind CSS
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-react" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" alt="">
                </div>
                
                <div id="tooltip-logo-react" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  React
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
                </div>
                
                <div id="tooltip-logo-html5" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  HTML5
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-amazon-web-services" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg" alt="">
                </div>
                
                <div id="tooltip-logo-amazon-web-services" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Amazon Web Services
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>

            <div class="space-y-4">
              <img class="object-contain w-auto h-12" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft.svg" alt="">

              <div class="space-y-1">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Logo design
                </h3>
                <a href="#" title=""
                  class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Live preview
                  <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>

              <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities of people who share your interests.
              </p>

              <div class="flex items-center gap-2.5">

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-figma" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/figma.svg" alt="">
                </div>
                
                <div id="tooltip-logo-figma" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Figma
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <img data-tooltip-target="tooltip-logo-illustrator" class="object-contain w-auto h-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/illustrator.svg" alt="">
                </div>
                
                <div id="tooltip-logo-illustrator" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Adobe Illustrator
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <a href="#" title=""
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button">
                View case study
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center mt-2">
        <button type="button"
          class="flex items-center justify-center h-full mr-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>

        <button type="button" class="flex items-center justify-center h-full cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
```

## Project portfolio with featured image

This example can be used to show large featured images as screenshots for the client work together with a title, description, technologies that have been used and a CTA button to the case study page.

```html
<section class="bg-white dark:bg-gray-900 antialiased">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="max-w-2xl mx-auto space-y-4 text-center">
      <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Our work
      </h2>
      <p class="text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Flowbite helps you connect with friends, family and communities of people who share your interests.
      </p>

      <div class="flex items-center justify-center gap-6 mt-4">
        <a href="#" title=""
          class="inline-flex items-center text-base font-medium shrink-0 text-primary-600 hover:underline dark:text-primary-500">
          <svg aria-hidden="true" class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd" />
          </svg>
          View all projects
        </a>

        <a href="#" title=""
          class="inline-flex items-center text-base font-medium shrink-0 text-primary-600 hover:underline dark:text-primary-500">
          Let's work together
          <svg aria-hidden="true" class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>

    <div class="max-w-5xl mx-auto mt-8 space-y-16 sm:mt-12 lg:mt-16">
      <div class="space-y-8 lg:space-y-12">
        <img class="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/dashboard.png" alt="">
        <img class="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:block hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/dashboard-dark.png" alt="">

        <div class="space-y-6">
          <div class="space-y-4">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              Creating Flowbite's dashboard
            </h3>
            <a href="#" title=""
              class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
              See the live website
              <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
              The first step in creating a dashboard is to determine who will be using it and what their needs are. Are
              you creating a
              dashboard for your team to track progress on a project, or for executives to monitor key performance
              indicators (KPIs)
              for the company? What specific data points do they need to see in order to make decisions? Understanding
              your audience
              and their needs will help you determine what data to include on the dashboard.
            </p>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
              Use charts, graphs, and other visual elements to help users quickly understand the data, making sure to
              label all
              elements clearly and provide context for the data being presented.
            </p>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
              Test the dashboard with a few users before launching it to ensure that it is meeting their needs and is
              easy
              to use.
            </p>
          </div>

          <div class="flex items-center gap-2.5">
            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
            </div>
            
            <div id="tooltip-logo-html5" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              HTML5
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-css3" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" alt="">
            </div>
            
            <div id="tooltip-logo-css3" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              CSS3
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-javascript" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/javascript.svg" alt="">
            </div>
            
            <div id="tooltip-logo-javascript" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              JavaScript
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
            </div>
            
            <div id="tooltip-logo-tailwind-css" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Tailwind CSS
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-typescript" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" alt="">
            </div>
            
            <div id="tooltip-logo-typescript" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              TypeScript
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <a href="#" title=""
            class="text-white inline-flex items-center bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            View case study
            <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="space-y-8 lg:space-y-12">
          <img class="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/ngo-landing.jpg" alt="">
          <img class="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:block hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/ngo-landing-dark.jpg" alt="">

        <div class="space-y-6">
          <div class="space-y-4">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              Flowbite's landing page
            </h3>
            <a href="#" title=""
              class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
              See the live website
              <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
              What action do you want visitors to take after they arrive on the page? Are you trying to sell a product,
              capture leads,
              or promote an event? Once you know your goal, you can identify your target audience and create a message
              that speaks
              directly to their needs and interests.
            </p>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
              Keep the design simple and focused on your goal, using clear headlines and calls-to-action to guide
              visitors
              towards the
              desired action. Use high-quality images and graphics to make the page visually appealing and highlight the
              benefits of
              your offer. Make sure the page is mobile-friendly and loads quickly to provide a good user experience.
            </p>
          </div>

          <div class="flex items-center gap-2.5">

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-wordpress" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/wordpress.svg" alt="">
            </div>
            
            <div id="tooltip-logo-wordpress" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              WordPress
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
            </div>
            
            <div id="tooltip-logo-html5" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              HTML5
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-css3" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" alt="">
            </div>
            
            <div id="tooltip-logo-css3" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              CSS3
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-woocommerce" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/woocommerce.svg" alt="">
            </div>
            
            <div id="tooltip-logo-woocommerce" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              WooCommerce
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <a href="#" title=""
            class="text-white inline-flex items-center bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            View case study
            <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="space-y-8 lg:space-y-12">
          <img class="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/gallery.jpg" alt="">
          <img class="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:block hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/gallery-dark.jpg" alt="">

        <div class="space-y-6">
          <div class="space-y-4">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              Innovative Gallery API
            </h3>
            <a href="#" title=""
              class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
              See the live website
              <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
              Determine what kind of emails you will be managing, who will be using the system, and what features are
              necessary,
              considering features like search, filtering, categorization, and sorting, as well as security and privacy
              requirements.
            </p>
          </div>

          <div class="flex items-center gap-2.5">

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-typescript" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" alt="">
            </div>
            
            <div id="tooltip-logo-typescript" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              TypeScript
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-java" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg" alt="">
            </div>
            
            <div id="tooltip-logo-java" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Java
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-tailwind-css" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" alt="">
            </div>
            
            <div id="tooltip-logo-tailwind-css" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Tailwind CSS
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-react" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" alt="">
            </div>
            
            <div id="tooltip-logo-react" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              React
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" alt="">
            </div>
            
            <div id="tooltip-logo-html5" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              HTML5
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img data-tooltip-target="tooltip-logo-amazon-web-services" class="object-contain w-auto h-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg" alt="">
            </div>
            
            <div id="tooltip-logo-amazon-web-services" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Amazon Web Services
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <a href="#" title=""
            class="text-white inline-flex items-center bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            View case study
            <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```
