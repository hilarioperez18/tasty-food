<template>
    <div class="max-w-max mx-5 my-5 bg-gray-100 text-center rounded-lg">
        <h2 class="section-title text-center font-bold text-xl mb-4">NUESTROS RECOMENDADOS</h2>
        <div class="recipe-list shadow-md p-4 flex flex-wrap justify-center rounded-lg">
            <VCardRecipe v-for="recipe in recipes" :key="recipe.id" :imageUrl="recipe.image" :category="recipe.cuisine"
                :name="recipe.name" :preparationTime="recipe.readyInMinutes">
            </VCardRecipe>
        </div>
    </div>
</template>
  
<script>
import VCardRecipe from "@/components/VCardRecipe.vue";
// import axios from "axios";

// export default {
//     components: {
//         VCardRecipe,
//     },
//     data() {
//         return {
//             placeholderImageUrl: "URL de una imagen de ejemplo",
//             recipes: [],
//         };
//     },
//     created() {
//         axios
//             .get("https://api.spoonacular.com/recipes/complexSearch", {
//                 params: {
//                     apiKey: "ca178e9c6d2f49e895d04d240b0e377f",
//                     number: 5,
//                     sort: "random",
//                 },
//             })
//             .then((response) => {
//                 this.recipes = response.data.results.map((recipe) => ({
//                     id: recipe.id,
//                     image: recipe.image,
//                     category: recipe.cuisine,
//                     name: recipe.title,
//                     preparationTime: recipe.readyInMinutes,
//                 }));
//             })
//             .catch((error) => {
//                 console.error("Error al obtener recetas:", error);
//             });
//     },
// };
export default {
    name: 'RecipeInfo',
    components: {
        VCardRecipe,
    },
    props: {
        recipeId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            ingredients: [],
            recipeName: '',
            categories: [],
            image: '',
            instructions: '',
            time: '',
        };
    },
    methods: {
        async getRecipeInfo() {
            const apiKey = "ca178e9c6d2f49e895d04d240b0e377f";
            let urlRecipes = `https://api.spoonacular.com/recipes/${this.recipeId}/information?apiKey=${apiKey}`;

            await fetch(urlRecipes)
                .then((response) => response.json())
                .then((recipe) => {
                    this.recipeName = recipe.title;
                    this.categories = recipe.dishTypes;
                    this.image = recipe.image;
                    this.instructions = recipe.instructions;
                    this.time = recipe.readyInMinutes;
                    this.ingredients = recipe.extendedIngredients;
                });

            console.log(this.ingredients);
        },
    },
    mounted() {
        this.getRecipeInfo();
    },
};
</script>
  



