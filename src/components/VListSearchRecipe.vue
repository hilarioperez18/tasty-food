<template>
    <div class="max-w-max mx-5 my-5 bg-gray-100">
        <h2 class="section-title text-left font-bold text-xl mb-4 ml-9">Resultados de búsqueda para: </h2>
        <div class="recipe-list shadow-md p-4 flex flex-wrap justify-center">
            <VCardRecipe v-for="recipe in recipes" :key="recipe.id" :imageUrl="recipe.image" :category="x"
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
        return {};
    },
    beforeMount() {
        console.log("Lista")
        console.log(this.recipes);
    },
    props: {
        recipes: Array
    },
    methods: {},
};
</script>

  