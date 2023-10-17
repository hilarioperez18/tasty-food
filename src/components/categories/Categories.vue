<template>
    <div @click="findCategories('pasta')" class="category-card p-4">
        <span class="border border-gray-300 inline-block p-2">CARNE</span>
    </div>
    <div @click="findCategories('pasta')" class="category-card p-4">
        <span class="border border-gray-300 inline-block p-2">PESCADO</span>
    </div>
    <div @click="findCategories('chicken')" class="category-card p-4">
        <span class="border border-gray-300 inline-block p-2">POLLO</span>
    </div>
    <div @click="findCategories('pasta')" class="category-card p-4">
        <span class="border border-gray-300 inline-block p-2">PASTA</span>
    </div>
    <div @click="findCategories('pig')" class="category-card p-4">
        <span class="border border-gray-300 inline-block p-2">CERDO</span>
    </div>
    <div @click="findCategories('vegan')" class="category-card p-4">
        <span class="border border-gray-300 inline-block p-2">VEGANO</span>
    </div>
</template>

<script>
export default {
    props: {
    },
    methods:{
        async findCategories(categoria){
            const apiKey = import.meta.env.VITE_API_KEY;
            let urlRecipes = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${categoria}&apiKey=${apiKey}`;

            await fetch(urlRecipes)
                .then((response) => response.json())
                .then((recipe) => {
                    console.log(recipe)
                    this.recipeName = recipe.title;
                    this.categories = recipe.dishTypes;
                    this.image = recipe.image;
                    this.instructions = recipe.instructions;
                    this.time = recipe.readyInMinutes;
                    this.ingredients = recipe.extendedIngredients;
                });
                console.log(this.ingredients);
        }
    }
}
</script>

<style scoped></style>