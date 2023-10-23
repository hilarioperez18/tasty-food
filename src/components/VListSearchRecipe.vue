<template>
    <div class="max-w-max mx-5 my-5 bg-gray-100">
        <div class="recipe-list shadow-md p-4 flex flex-wrap justify-center">
            <VCardRecipe v-for=" recipe  in  recipes " :key="recipe.id" :id="String(recipe.id)" :imageUrl="recipe.image"
                :name="recipe.title" :preparationTime="String(recipe.readyInMinutes)">
            </VCardRecipe>
        </div>
    </div>
</template>
  
<script>
import VCardRecipe from './VCardRecipe.vue';


export default {
    data() {
        return {
            image: '',
        };
    },
    components: {
        VCardRecipe,
    },

    beforeMount() {
        console.log("Lista")
        console.log(this.recipes);
    },
    props: {
        recipes: Array,
    },
};
</script>

  