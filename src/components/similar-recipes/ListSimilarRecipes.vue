<template>
    <div class="max-w-max mx-5 my-5 bg-gray-100">
        <div class="recipe-list shadow-md p-4 flex flex-wrap justify-center">
            <VCardRecipe v-for=" recipe  in  recipes.slice(0,4) " :key="recipe.id" :id="String(recipe.id)"
                :imageUrl="recipe.image" :name="recipe.title" :preparationTime="String(recipe.readyInMinutes)">
            </VCardRecipe>
        </div>
    </div>
</template>
  
<script>
import VCardRecipe from '../VCardRecipe.vue';


export default {
    data() {
        return {
            image: '',
            recipeImages: {},
        };
    },
    components: {
        VCardRecipe,
    },

    beforeMount() {
        console.log("Lista")
        console.log(this.recipes);
        this.recipes.forEach((recipe) => {

            const apiKey = import.meta.env.VITE_API_KEY;
            const urlRecipes = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`;

            fetch(urlRecipes)
                .then((response) => response.json())
                .then((recipe) => {
                    this.recipeImages[recipe.id] = recipe.image;
                });
        });

        console.log(this.recipeImages);
    },
    props: {
        recipes: Array,
    },
    methods: {
        // getRecipeInfo(id) {

        //     const apiKey = import.meta.env.VITE_API_KEY;
        //     const urlRecipes = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

        //     fetch(urlRecipes)
        //         .then((response) => response.json())
        //         .then((recipe) => {
        //             this.image = recipe.image;
        //         });

        //     console.log(this.image);
        // }
    },
};
</script>

  