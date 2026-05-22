## Default faceted search modal

Use this free example to show a list of checkbox components inside a modal to filter results by categories inside your application.

```html
<!-- Modal toggle -->
<div class="flex justify-center m-5">
    <button
        class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button" data-modal-target="defaultModal" data-modal-toggle="defaultModal">
        Toggle modal
    </button>
</div>

<!-- Main modal -->
<form action="#" method="get" id="defaultModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <!-- Modal header -->
            <div class="flex items-start justify-between px-6 py-4 rounded-t">
                <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">
                    Filter by category
                </h3>
                <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="grid grid-cols-2 gap-2 px-4 md:px-6 md:grid-cols-3">
                <div class="flex items-center">
                    <input id="apple" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Apple (56)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="fitbit" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Fitbit (56)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="dell" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="dell" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Dell (56)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="asus" type="checkbox" value="" checked
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="asus" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Asus (97)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="logitech" type="checkbox" value="" checked
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="logitech" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Logitech (97)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="msi" type="checkbox" value="" checked
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="msi" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        MSI (97)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="bosch" type="checkbox" value="" checked
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="bosch" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Bosch (176)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="sony" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="sony" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Sony (234)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="samsung" type="checkbox" value="" checked
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="samsung" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Samsung (76)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="canon" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="canon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Canon (49)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="microsoft" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="microsoft"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Microsoft (45)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="razor" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Razor (49)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="emetec" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="emetec" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Emetec (16)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="nvidia" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="nvidia" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Nvidia (45)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="hp" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="hp" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        HP (234)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="benq" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        BenQ (45)
                    </label>
                </div>

                <div class="flex items-center">
                    <input id="rockstar" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label for="rockstar" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Rockstar (49)
                    </label>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-4 rounded-b dark:border-gray-600">
                <button type="submit"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                    Apply
                </button>
                <button type="button"
                    class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Reset
                </button>
            </div>
        </div>
    </div>
</form>
```

## Faceted search with toggle filters

Use this free example of a modal where you can use a combination of toggle buttons and select inputs to filter search results.

```html
<!-- Modal toggle -->
<div class="flex justify-center m-5">
    <button
        class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button" data-modal-target="defaultModal" data-modal-toggle="defaultModal">
        Toggle modal
    </button>
</div>

<!-- Main modal -->
<form action="#" method="get" id="defaultModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <!-- Modal header -->
            <div class="flex items-start justify-between px-6 py-4 rounded-t">
                <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">
                    Show carriers first by:
                </h3>
                <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-4 space-y-4 md:px-6">
                <div class="flex items-center justify-between">
                    <div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer">
                            <div
                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
                            </div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                The last rate
                            </span>
                        </label>
                    </div>

                    <div>
                        <select id="last-rate-select"
                            class="bg-white border pr-10 pl-2 py-1.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Min</option>
                            <option>Max</option>
                        </select>
                    </div>
                </div>


                <div class="flex items-center justify-between">
                    <div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" checked>
                            <div
                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
                            </div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Number
                                of vehicles</span>
                        </label>
                    </div>

                    <div>
                        <select id="vehicles-select"
                            class="bg-white border pr-10 pl-2 py-1.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Min</option>
                            <option>Max</option>
                        </select>
                    </div>
                </div>


                <div class="flex items-center justify-between">
                    <div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer">
                            <div
                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
                            </div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Number
                                of trips with us</span>
                        </label>
                    </div>

                    <div>
                        <select id="trips-select"
                            class="bg-white border pr-10 pl-2 py-1.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Min</option>
                            <option selected>Max</option>
                        </select>
                    </div>
                </div>


                <div class="flex items-center justify-between">
                    <div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer">
                            <div
                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
                            </div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Number
                                of cars</span>
                        </label>
                    </div>

                    <div>
                        <select id="cars-select"
                            class="bg-white border pr-10 pl-2 py-1.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Min</option>
                            <option>Max</option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-4 rounded-b dark:border-gray-600">
                <button type="submit"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                    Apply
                </button>
                <button type="reset"
                    class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Reset
                </button>
            </div>
        </div>
    </div>
</form>
```

## Faceted search with tabs

Use this example to break up the filtering options into multiple categories by using the tabs components from Flowbite.

```html
<!-- Modal toggle -->
<div class="flex justify-center m-5">
    <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
        Toggle modal
    </button>
</div>

<!-- Main modal -->
<form action="#" method="get" id="defaultModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 rounded-t">
                <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">
                    Filters with tabs
                </h3>
                <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-4 md:px-6">
                <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                        data-tabs-toggle="#myTabContent" role="tablist">
                        <li class="mr-1" role="presentation">
                            <button class="inline-block pb-2 pr-1" id="brand-tab" data-tabs-target="#brand"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">
                                Brand
                            </button>
                        </li>
                        <li class="mr-1" role="presentation">
                            <button
                                class="inline-block px-2 pb-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="advanced-filers-tab" data-tabs-target="#advanced-filters" type="button"
                                role="tab" aria-controls="advanced-filters" aria-selected="false">
                                Advanced Filters
                            </button>
                        </li>
                    </ul>
                </div>
                <div id="myTabContent">
                    <div class="grid grid-cols-2 gap-4 md:grid-cols-3" id="brand" role="tabpanel"
                        aria-labelledby="brand-tab">
                        <div class="space-y-2">
                            <h5 class="text-lg font-medium text-black uppercase dark:text-white">
                                A
                            </h5>

                            <div class="flex items-center">
                                <input id="apple" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="apple"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Apple (56)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="asus" type="checkbox" value="" checked
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="asus"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Asus (97)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="acer" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="acer"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Acer (234)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="allview" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="allview"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Allview (45)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="atari" type="checkbox" value="" checked
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="asus"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Atari (176)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="amd" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="amd"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    AMD (49)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="aruba" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="aruba"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Aruba (16)
                                </label>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <h5 class="text-lg font-medium text-black uppercase dark:text-white">
                                B
                            </h5>

                            <div class="flex items-center">
                                <input id="beats" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="beats"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Beats (56)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="bose" type="checkbox" value="" checked
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="bose"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Bose (97)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="benq" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="benq"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    BenQ (45)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="bosch" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="bosch"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Bosch (176)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="brother" type="checkbox" value="" checked
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="brother"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Brother (176)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="biostar" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="biostar"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Biostar (49)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="braun" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="braun"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Braun (16)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="blaupunkt" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="blaupunkt"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Blaupunkt (45)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="benq2" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="benq2"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    BenQ (23)
                                </label>
                            </div>
                        </div>


                        <div class="space-y-2">
                            <h5 class="text-lg font-medium text-black uppercase dark:text-white">
                                C
                            </h5>

                            <div class="flex items-center">
                                <input id="canon" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="canon"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Canon (49)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="cisco" type="checkbox" value="" checked
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="cisco"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Cisco (97)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="cowon" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="cowon"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Cowon (234)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="clevo" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="clevo"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Clevo (45)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="corsair" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="corsair"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Corsair (15)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="csl" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="csl"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Canon (49)
                                </label>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <h5 class="text-lg font-medium text-black uppercase dark:text-white">
                                D
                            </h5>

                            <div class="flex items-center">
                                <input id="dell" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="dell"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Dell (56)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="dogfish" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="dogfish"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Dogfish (24)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="dyson" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="dyson"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Dyson (234)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="dobe" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="dobe"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Dobe (5)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="digitus" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="digitus"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Digitus (1)
                                </label>
                            </div>

                        </div>

                        <div class="space-y-2">
                            <h5 class="text-lg font-medium text-black uppercase dark:text-white">
                                E
                            </h5>

                            <div class="flex items-center">
                                <input id="emetec" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="emetec"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Emetec (56)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="extreme" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="extreme"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Extreme (10)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="elgato" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="elgato"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Elgato (234)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="emerson" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="emerson"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Emerson (45)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="emi" type="checkbox" value="" checked
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="emi"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    EMI (176)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="fugoo" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="fugoo"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Fugoo (49)
                                </label>
                            </div>

                        </div>

                        <div class="space-y-2">
                            <h5 class="text-lg font-medium text-black uppercase dark:text-white">
                                F
                            </h5>

                            <div class="flex items-center">
                                <input id="fujitsu" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="fujitsu"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Fujitsu (97)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="fitbit" type="checkbox" value="" checked
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="fitbit"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Fitbit (56)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="foxconn" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="foxconn"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Foxconn (234)
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="floston" type="checkbox" value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="floston"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Floston (45)
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="space-y-4" id="advanced-filters" role="tabpanel"
                    aria-labelledby="advanced-filters-tab">

                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label for="min-price"
                                    class="block text-sm font-medium text-gray-900 dark:text-white">
                                    Min Price
                                </label>
                                <input id="min-price" type="range" min="0" max="7000" value="300" step="1"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                            </div>

                            <div>
                                <label for="max-price"
                                    class="block text-sm font-medium text-gray-900 dark:text-white">
                                    Max Price
                                </label>
                                <input id="max-price" type="range" min="0" max="7000" value="3500" step="1"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                            </div>

                            <div class="flex items-center justify-between col-span-2 space-x-2">
                                <input type="number" id="min-price-input" value="300" min="0" max="7000"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                                    placeholder="" required>

                                <div class="flex-shrink-0 text-sm font-medium dark:text-gray-300">
                                    to
                                </div>

                                <input type="number" id="max-price-input" value="3500" min="0" max="7000"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="" required>
                            </div>
                        </div>

                        <div class="space-y-3">
                            <div>
                                <label for="min-delivery-time"
                                    class="block text-sm font-medium text-gray-900 dark:text-white">
                                    Min Delivery Time (Days)
                                </label>

                                <input id="min-delivery-time" type="range" min="3" max="50" value="30"
                                    step="1"
                                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                            </div>

                            <input type="number" id="min-delivery-time-input" value="30" min="3" max="50"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                                placeholder="" required>
                        </div>

                    </div>

                    <div>
                        <h6 class="mb-2 text-sm font-medium text-black dark:text-white">
                            Condition
                        </h6>

                        <ul
                            class="flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-r border-gray-200 dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="condition-all" type="radio" value="" name="list-radio"
                                        checked
                                        class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="condition-all"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        All
                                    </label>
                                </div>
                            </li>
                            <li class="w-full border-r border-gray-200 dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="condition-new" type="radio" value="" name="list-radio"
                                        class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="condition-new"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        New
                                    </label>
                                </div>
                            </li>
                            <li class="w-full">
                                <div class="flex items-center pl-3">
                                    <input id="condition-used" type="radio" value="" name="list-radio"
                                        class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="condition-used"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Used
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div>
                            <h6 class="mb-2 text-sm font-medium text-black dark:text-white">
                                Colour
                            </h6>
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <input id="blue" type="checkbox" value=""
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="blue"
                                        class="flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        <div class="h-3.5 w-3.5 bg-primary-600 rounded-full mr-2"></div>
                                        Blue
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="gray" type="checkbox" value=""
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="gray"
                                        class="flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        <div class="h-3.5 w-3.5 bg-gray-400 rounded-full mr-2"></div>
                                        Gray
                                    </label>
                                </div>


                                <div class="flex items-center">
                                    <input id="green" type="checkbox" value="" checked
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="green"
                                        class="flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        <div class="h-3.5 w-3.5 bg-green-400 rounded-full mr-2"></div>
                                        Green
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="pink" type="checkbox" value=""
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="pink"
                                        class="flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        <div class="h-3.5 w-3.5 bg-pink-400 rounded-full mr-2"></div>
                                        Pink
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="red" type="checkbox" value="" checked
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="red"
                                        class="flex items-center ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        <div class="h-3.5 w-3.5 bg-red-500 rounded-full mr-2"></div>
                                        Red
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h6 class="mb-2 text-sm font-medium text-black dark:text-white">
                                Rating
                            </h6>
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <input id="five-stars" type="radio" value="" name="rating"
                                        class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="five-stars" class="flex items-center ml-2">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>First star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Second star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Third star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Fourth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
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
                                        class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="four-stars" class="flex items-center ml-2">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>First star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Second star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Third star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Fourth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Fifth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="three-stars" type="radio" value="" name="rating" checked
                                        class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="three-stars" class="flex items-center ml-2">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>First star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Second star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Third star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Fourth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Fifth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="two-stars" type="radio" value="" name="rating"
                                        class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="two-stars" class="flex items-center ml-2">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>First star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Second star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Third star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Fourth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Fifth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="one-star" type="radio" value="" name="rating"
                                        class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="one-star" class="flex items-center ml-2">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>First star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Second star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Third star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Fourth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg aria-hidden="true"
                                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Fifth star</title>
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </label>
                                </div>

                            </div>
                        </div>

                        <div>
                            <h6 class="mb-2 text-sm font-medium text-black dark:text-white">
                                Weight
                            </h6>

                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <input id="under-1-kg" type="checkbox" value=""
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="under-1-kg"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Under 1 kg
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="1-1-5-kg" type="checkbox" value="" checked
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="1-1-5-kg"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        1-1,5 kg
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="1-5-2-kg" type="checkbox" value=""
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="1-5-2-kg"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        1,5-2 kg
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="2-5-3-kg" type="checkbox" value=""
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="2-5-3-kg"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        2,5-3 kg
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input id="over-3-kg" type="checkbox" value=""
                                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <label for="over-3-kg"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Over 3 kg
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div>
                        <h6 class="mb-2 text-sm font-medium text-black dark:text-white">
                            Delivery type
                        </h6>

                        <ul class="grid grid-cols-2 gap-4">
                            <li>
                                <input type="radio" id="delivery-usa" name="delivery" value="delivery-usa"
                                    class="hidden peer" checked>
                                <label for="delivery-usa"
                                    class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer md:p-5 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">USA</div>
                                        <div class="w-full">Delivery only for USA</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="delivery-europe" name="delivery"
                                    value="delivery-europe" class="hidden peer">
                                <label for="delivery-europe"
                                    class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer md:p-5 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">Europe</div>
                                        <div class="w-full">Delivery only for USA</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="delivery-asia" name="delivery" value="delivery-asia"
                                    class="hidden peer" checked>
                                <label for="delivery-asia"
                                    class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer md:p-5 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">Asia</div>
                                        <div class="w-full">Delivery only for Asia</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="delivery-australia" name="delivery"
                                    value="delivery-australia" class="hidden peer">
                                <label for="delivery-australia"
                                    class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer md:p-5 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">Australia</div>
                                        <div class="w-full">Delivery only for Australia</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>

            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-4 rounded-b dark:border-gray-600">
                <button type="submit"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                    Show 50 results
                </button>
                <button type="reset"
                    class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Reset
                </button>
            </div>
        </div>
    </div>
</form>
```

## Advanced faceted search

Use this example to show multiple input fields, checkboxes, range sliders, and select inputs to apply filter elements inside a modal.

```html
<!-- Modal toggle -->
<div class="flex justify-center m-5">
    <button
        class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button" data-modal-target="defaultModal" data-modal-toggle="defaultModal">
        Toggle modal
    </button>
</div>

<!-- Main modal -->
<form action="#" method="get" id="defaultModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <!-- Modal header -->
            <div class="flex items-start justify-between px-6 py-4 rounded-t">
                <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">
                    Advanced filters
                </h3>
                <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-4 space-y-4 md:px-6">

                <!-- Age & Experience -->
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label for="min-age"
                                class="block text-sm font-medium text-gray-900 dark:text-white">
                                Min Age
                            </label>
                            <input id="min-age" type="range" min="1" max="100" value="18" step="1"
                                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>

                        <div>
                            <label for="max-age"
                                class="block text-sm font-medium text-gray-900 dark:text-white">
                                Max Age
                            </label>
                            <input id="max-age" type="range" min="1" max="100" value="45" step="1"
                                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>

                        <div class="flex items-center justify-between col-span-2 space-x-3">
                            <div class="w-full">
                                <label for="min-age-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    From
                                </label>

                                <input type="number" id="min-age-input" value="18" min="1" max="100"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                                    placeholder="" required>
                            </div>

                            <div class="w-full">
                                <label for="max-age-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    To
                                </label>

                                <input type="number" id="max-age-input" value="45" min="1" max="100"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="" required>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label for="min-experience"
                                class="block text-sm font-medium text-gray-900 dark:text-white">
                                Min Experience
                            </label>
                            <input id="min-experience" type="range" min="0" max="30" value="5" step="1"
                                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>

                        <div>
                            <label for="max-experience"
                                class="block text-sm font-medium text-gray-900 dark:text-white">
                                Max Experience
                            </label>
                            <input id="max-experience" type="range" min="0" max="100" value="45" step="1"
                                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>

                        <div class="flex items-center justify-between col-span-2 space-x-3">
                            <div class="w-full">
                                <label for="min-experience-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    From
                                </label>

                                <input type="number" id="min-experience-input" value="18" min="1" max="100"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="" required>
                            </div>

                            <div class="w-full">
                                <label for="max-experience-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    To
                                </label>

                                <input type="number" id="max-experience-input" value="45" min="1" max="100"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="" required>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Account type -->
                <div>
                    <h6 class="mb-2 text-sm font-medium text-black dark:text-white">
                        Account type
                    </h6>

                    <ul
                        class="flex flex-col items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:flex-row dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li
                            class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="account-all" type="radio" value="" name="list-radio" checked
                                    class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                <label for="account-all"
                                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    All
                                </label>
                            </div>
                        </li>
                        <li
                            class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="account-administrator" type="radio" value="" name="list-radio"
                                    class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                <label for="account-administrator"
                                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Administrator
                                </label>
                            </div>
                        </li>
                        <li
                            class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="account-moderator" type="radio" value="" name="list-radio"
                                    class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                <label for="account-moderator"
                                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Moderator
                                </label>
                            </div>
                        </li>
                        <li class="w-full">
                            <div class="flex items-center pl-3">
                                <input id="account-viewer" type="radio" value="" name="list-radio"
                                    class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                <label for="account-viewer"
                                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Viewer
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Job title -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Job title
                    </label>
                    <ul class="grid w-full grid-cols-2 gap-3 md:grid-cols-3">
                        <li>
                            <input type="checkbox" id="frontend-developer" name="job_title" value="" class="hidden peer">
                            <label for="frontend-developer"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                Frontend developer
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="ui-ux-designer" name="job_title" value="" class="hidden peer">
                            <label for="ui-ux-designer"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                UI/UX Designer
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="react-developer" name="job_title" value="" class="hidden peer"
                                checked>
                            <label for="react-developer"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                React Developer
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" id="php-developer" name="job_title" value="" class="hidden peer">
                            <label for="php-developer"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                PHP Developer
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="engineer" name="job_title" value="" class="hidden peer" checked>
                            <label for="engineer"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                Engineer
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="marketing" name="job_title" value="" class="hidden peer">
                            <label for="marketing"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                Marketing
                            </label>
                        </li>
                    </ul>
                </div>


                <!-- Add property -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-900 dark:text-white">
                        Properties
                    </label>
                    <div class="flex items-center p-4 space-x-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <div class="grid w-full gap-3 md:grid-cols-3">
                            <select id="country-0"
                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="" disabled>Country</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>

                            <select id="state-0"
                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="" disabled>State</option>
                                <option>Californa</option>
                                <option>Oregon</option>
                                <option>New York</option>
                                <option>Florida</option>
                            </select>

                            <select id="city-0"
                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="" disabled>City</option>
                                <option>Sacramento</option>
                                <option>Los Angeles</option>
                                <option>San Francisco</option>
                                <option>San Diego</option>
                            </select>
                        </div>

                        <button
                            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Delete</span>
                        </button>
                    </div>

                    <div class="flex items-center p-4 space-x-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <div class="grid w-full gap-3 md:grid-cols-3">
                            <select id="country-1"
                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="" selected disabled>Country</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>

                            <select id="state-1"
                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="" selected disabled>State</option>
                                <option>Californa</option>
                                <option>Oregon</option>
                                <option>New York</option>
                                <option>Florida</option>
                            </select>

                            <select id="city-1"
                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="" selected disabled>City</option>
                                <option>Sacramento</option>
                                <option>Los Angeles</option>
                                <option>San Francisco</option>
                                <option>San Diego</option>
                            </select>
                        </div>

                        <button
                            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
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
                        class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd" />
                        </svg>
                        Add Property
                    </a>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-4 rounded-b dark:border-gray-600">
                <button type="submit"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                    Show 32 Results
                </button>
                <button type="reset"
                    class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Reset
                </button>
            </div>
        </div>
    </div>
</form>
```

## Faceted search with datepicker

This example can be used to filter based on a date range using the Flowbite datepicker together with checkbox and toggle input elements.

```html
<!-- Modal toggle -->
<div class="flex justify-center m-5">
    <button
        class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button" data-modal-target="defaultModal" data-modal-toggle="defaultModal">
        Toggle modal
    </button>
</div>

<!-- Main modal -->
<form action="#" method="get" id="defaultModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <!-- Modal header -->
            <div class="flex items-start justify-between px-6 py-4 rounded-t">
                <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">
                    Filter by date
                </h3>
                <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-4 space-y-4 md:px-6">

                <!-- Date -->
                <div>
                    <label for="start" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Date
                    </label>

                    <div date-rangepicker class="flex items-center w-full">
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input name="start" type="text" id="start"
                                class="bg-gray-50 z-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Select start date">
                        </div>
                        <span class="mx-4 text-gray-500">to</span>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input name="end" type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Select end date">
                        </div>
                    </div>
                </div>

                <!-- Duration -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Duration
                    </label>
                    <ul class="grid w-full grid-cols-3 gap-3">
                        <li>
                            <input type="checkbox" id="hours-1" value="" class="hidden peer" name="duration">
                            <label for="hours-1"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                1 hour
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="hours-2" value="" class="hidden peer" name="duration">
                            <label for="hours-2"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                <div class="block">
                                    <div class="w-full text-sm">2 hours</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="hours-3" value="" class="hidden peer" name="duration" checked>
                            <label for="hours-3"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                <div class="block">
                                    <div class="w-full text-sm">3 hours</div>
                                </div>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" id="hours-4" value="" class="hidden peer" name="duration">
                            <label for="hours-4"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                <div class="block">
                                    <div class="w-full text-sm">4 hours</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="hours-57" value="" class="hidden peer" name="duration" checked>
                            <label for="hours-57"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                <div class="block">
                                    <div class="w-full text-sm">5-7 hours</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="hours-all" value="" class="hidden peer" name="duration">
                            <label for="hours-all"
                                class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border-2 rounded-lg cursor-pointer text-primary-600 border-primary-600 dark:hover:text-white dark:border-primary-500 dark:peer-checked:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-primary-500 dark:bg-gray-800 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-500">
                                <div class="block">
                                    <div class="w-full text-sm">All day</div>
                                </div>
                            </label>
                        </li>
                    </ul>

                    <label class="relative inline-flex items-center mt-4 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" name="google_meet">
                        <div
                            class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
                        </div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Google Meet
                        </span>
                    </label>
                </div>


                <!-- Event type -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Event type
                    </label>
                    <div class="space-y-2">
                        <div class="flex items-center">
                            <input id="industry-conferences" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                            <label for="industry-conferences"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Industry Conferences
                            </label>
                        </div>

                        <div class="flex items-center">
                            <input id="webinars" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                            <label for="webinars"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Webinars
                            </label>
                        </div>

                        <div class="flex items-center">
                            <input id="sales-kick-offs" type="checkbox" value="" checked
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                            <label for="sales-kick-offs"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Sales Kick-Offs
                            </label>
                        </div>

                        <div class="flex items-center">
                            <input id="user-conferences" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                            <label for="user-conferences"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                User Conferences
                            </label>
                        </div>

                        <div class="flex items-center">
                            <input id="private-events" type="checkbox" value="" checked
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                            <label for="private-events"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Private Events
                            </label>
                        </div>

                        <div class="flex items-center">
                            <input id="field-marketing-events" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                            <label for="field-marketing-events"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Field Marketing Events
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-4 rounded-b dark:border-gray-600">
                <button type="submit"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                    Apply filters
                </button>
                <button type="reset"
                    class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Reset
                </button>
            </div>
        </div>
    </div>
</form>
<!-- End modal -->

<script src="https://unpkg.com/flowbite@2.2.1/dist/datepicker.min.js"></script>
```
