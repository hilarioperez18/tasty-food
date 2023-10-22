<template>
    <div class="max-w-max mx-5 my-5 bg-gray-100 text-center rounded-lg">
        <h2 class="section-title text-center font-bold text-xl mb-4">OUR RECOMMENDED</h2>
        <div class="recipe-list shadow-md p-4 flex flex-wrap justify-center rounded-lg">
            <VCardRecipe v-for="recipe in recipes" :key="recipe.id" :imageUrl="recipe.image" :category="recipe.category"
                :name="recipe.name" :preparationTime="recipe.preparationTime">
            </VCardRecipe>
        </div>
    </div>
</template>
  
<script>
import VCardRecipe from "@/components/VCardRecipe.vue";

export default {
    components: {
        VCardRecipe
    },
    data() {
        return {
            placeholderImageUrl: "URL de una imagen de ejemplo",
            recipes: [],
        };
    },
    methods: {
        async getRecipeInfo(recipeId) {
            const apiKey = "ca178e9c6d2f49e895d04d240b0e377f";
            const urlRecipes = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

            try {
                const response = await fetch(urlRecipes);
                const recipe = await response.json();

                this.recipes.push({
                    id: recipe.id,
                    image: recipe.image,
                    category: recipe.sourceName,
                    name: recipe.title,
                    preparationTime: recipe.readyInMinutes,
                });
            } catch (error) {
                console.error("Error al obtener recetas:", error);
            }
        },
    },
    created() {
        const recipeIds = [1, 2, 3, 4, 5];
        recipeIds.forEach((recipeId) => {
            this.getRecipeInfo(recipeId);
        });
    },
};
</script>

  



