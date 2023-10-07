<template>
    <div class="flex">
        <div class="relative inline-block text-left mr-4">
            <button @click="toggleDropdown"
                class="inline-flex items-center justify-center w-32 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                {{ selectedCategory || 'Mockups' }}
                <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
            </button>

            <div v-if="showDropdown"
                class="origin-top-right absolute right-0 mt-10 w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
                <ul class="py-2">
                    <li>
                        <button type="button"
                            class="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 w-full focus:outline-none"
                            @click="selectCategory('Mockups')">Mockups</button>
                    </li>
                    <li>
                        <button type="button"
                            class="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 w-full focus:outline-none"
                            @click="selectCategory('Templates')">Templates</button>
                    </li>
                    <li>
                        <button type="button"
                            class="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 w-full focus:outline-none"
                            @click="selectCategory('Design')">Design</button>
                    </li>
                    <li>
                        <button type="button"
                            class="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 w-full focus:outline-none"
                            @click="selectCategory('Logos')">Logos</button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Texto de búsqueda -->
        <div class="relative flex-grow">
            <input type="search" id="search-dropdown"
                class="block w-96 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Recepies" required>
            <button type="submit"
                class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-gray-700 rounded-r-lg border border-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-30">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showDropdown: false,
            selectedCategory: 'Mockups' // Establece 'Mockups' como valor predeterminado
        };
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        selectCategory(category) {
            this.selectedCategory = category;
            this.showDropdown = false;
        }
    }
}
</script>
  