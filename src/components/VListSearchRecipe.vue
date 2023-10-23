<template>
    <div class="max-w-max mx-5 my-5 bg-gray-100">
        <h2 class="section-title text-left font-bold text-xl mb-4 ml-9">Search results for:</h2>
        <input type="search"
            class="block mx-7 w-96 p-2.5 text-sm text-black bg-gray-300 rounded-2xl border-l-gray-50 border-l-2 border border-gray-300dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-black dark:text-blac"
            :placeholder=searchQuery disabled />
        <div class="recipe-list shadow-md p-4 flex flex-wrap justify-center">
            <VCardRecipe v-for=" recipe  in  recipes " :key="recipe.id" :imageUrl="recipe.image" :category="x"
                :name="recipe.title" :preparationTime="x">
            </VCardRecipe>
        </div>
    </div>
</template>
  
<script>
import VCardRecipe from './VCardRecipe.vue';


export default {
    components: {
        VCardRecipe,
    },
    data() {
        return {
            searchQuery: "",
        };
    },
    beforeMount() {
        console.log("Lista")
        console.log(this.recipes);
        this.searchQuery = localStorage.getItem("inputSearchRecipe")
    },
    props: {
        recipes: Array
    },
    methods: {},
};
</script>

  