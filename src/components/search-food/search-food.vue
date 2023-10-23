<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex">
            <div class="relative inline-block text-left mr-3">
                <button @click="toggleDropdown"
                    class="inline-flex items-center justify-center w-32 h-10 px-20 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                    {{ selectedCategory || 'FindByRecipie' }}
                    <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                </button>

                <div v-if="showDropdown"
                    class="origin-top-right absolute right-0 mt-1 w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
                    <ul class="py-2">
                        <li>
                            <button type="button"
                                class="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 w-full focus:outline-none"
                                @click="selectCategory('FindByRecipie')">
                                Find by recipe
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                class="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 w-full focus:outline-none"
                                @click="selectCategory('FindByIngredient')">
                                Find by ingredient
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="relative flex-grow">
                <input @keyup.enter="searchRecepie" type="search" id="search-dropdown"
                    class="block w-96 p-2.5 text-sm text-black bg-gray-300 rounded-2xl border-l-gray-50 border-l-2 border border-gray-300dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-black dark:text-blac"
                    placeholder="Find recipe" required v-model="searchQuery" />
                <button @click="searchRecepie"
                    class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-black rounded-2xl borde">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </div>

        <div class="w-96 mt-4" v-if=noResultsFound>
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div class="flex items-center">
                    <div class="py-1">
                        <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                        </svg>
                    </div>
                    <div>
                        <p class="font-bold">no results found for {{ searchQuery }} recipe</p>
                        <p class="text-sm">Make sure you know this recipe exist.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showDropdown: false,
            noResultsFound: false,
            selectedCategory: 'FindByRecipie', // Establece 'FindByRecipie' como valor predeterminado
            searchQuery: '' //valor del campo de búsqueda
        };
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        selectCategory(category) {
            this.selectedCategory = category;
            this.showDropdown = false;
        },
        async searchRecepie() {
            const apiKey = import.meta.env.VITE_API_KEY;
            let urlRecepies = 'https://api.spoonacular.com/recipes/complexSearch';
            let result = [];
            let objeto = {};

            switch (this.selectedCategory) {
                case 'FindByRecipie':
                    if (this.searchQuery) { // Verifica si searchQuery tiene un valor
                        urlRecepies = `https://api.spoonacular.com/recipes/complexSearch?query=${this.searchQuery}&apiKey=${apiKey}`;
                        await fetch(urlRecepies)
                            .then(response => response.json())
                            //recorro el array resultado, lo meto en un objeto para dejarlo más limpio y lo meto en un array que luego devuelvo 
                            .then(results => results.results.forEach(element => {
                                objeto = { "id": element.id, "title": element.title, "image": element.image };
                                result.push(objeto);
                            }));
                    }
                    break;
                //si seleccionado es por ingrediente    
                case 'FindByIngredient':
                    if (this.searchQuery) { // Verifica si searchQuery tiene un valor
                        urlRecepies = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.searchQuery}&apiKey=${apiKey}`;
                        await fetch(urlRecepies)
                            .then(response => response.json())
                            //recorro el array resultado, lo meto en un objeto para dejarlo más limpio y lo meto en un array que luego devuelvo 
                            .then(results => results.forEach(element => {
                                result.push(element);
                            }));
                    }
                    break;
            }
            //si resultado está vacio salta un alert de que no se encuentran resultados
            if (result.length == 0) {
                this.noResultsFound = true;
                setTimeout(() => {
                    this.noResultsFound = false;
                }, 5000);
            } else {
                localStorage.setItem("result", JSON.stringify(result));
                localStorage.setItem("inputSearchRecipe", this.searchQuery);
                this.$router.push({
                    name: 'results',
                });
            }
        }
    }
}
</script>
  