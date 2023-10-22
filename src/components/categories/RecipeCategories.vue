<template>
    <div class="container">
        <h2 class="text-2xl font-bold mb-6 text-center">Categories</h2>
        <div class="grid grid-cols-3 gap-4 md:grid-cols-4 w-100">
            <button
                class="p-4 bg-blue-500 font-bold text-white rounded transform transition-transform duration-300 ease-in-out focus:outline-none hover:scale-105 hover:bg-blue-600"
                @click="findCategories(ingredient)" v-for="(ingredient, index) in recipeCategories" :key="index">
                {{ ingredient }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecipeCategories",
    data() {
        return {
            recipeCategories: ["MEAT", "FISH", "VEGETABLES", "PASTA", "RICE", "EGGS", "JAM", "DESSERT", "CHICKEN", "BREAKFAST", "DINNER", "SEAFOOD"],
            recipes: []
        }
    },
    methods: {
        async findCategories(categoria) {
            const apiKey = import.meta.env.VITE_API_KEY;
            let urlRecipes = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${categoria}&apiKey=${apiKey}`;

            await fetch(urlRecipes)
                .then((response) => response.json())
                .then((recipe) => {
                    this.recipes = recipe;
                    console.log(this.recipes);
                });
        }
    }
}
</script>

<style scoped></style>