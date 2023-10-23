<template>
    <div class="container bg-gray-200 md:rounded-3xl mx-auto lg:mt-5">
        <div class="lg:flex lg:items-center">
            <div class="lg:mx-6 md:mt-6 lg:w-auto">
                <img :src="image" alt="Imagen de receta" class="w-full h-auto object-cover lg:rounded-3xl">
            </div>
            <div class="lg:w-1/2 m-6 ">
                <h2 class="text-2xl font-semibold mb-4">{{ recipeName }}</h2>
                <div class="categories flex lg:flex-row gap-4 mb-4">
                    <span class="bg-yellow-500 text-white px-2 py-1 rounded-lg mb-2 lg:mb-0 w-auto">
                        ⏱️{{ time }} min
                    </span>
                    <span v-for="(category, index) in categories" :key="index"
                        class="bg-blue-500 text-white px-2 py-1 rounded-lg mb-2 lg:mb-0 lg:w-auto">
                        {{ category }}
                    </span>
                </div>
                <div class="ingredients m-4">
                    <ul class="gap-2 list-disc m-6">
                        <li v-for="(ingredient, index) in ingredients" :key="index">
                            {{ ingredient.original }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="instructions m-6">
            <h3 class="text-xl font-semibold mb-4 text-center">Instructions</h3>
            <p class="text-lg font-normal text-justify" v-html="processedInstructions"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeInfo',
    props: {
        recipeId: {
            type: String,
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
            const apiKey = import.meta.env.VITE_API_KEY;
            const urlRecipes = `https://api.spoonacular.com/recipes/${this.recipeId}/information?apiKey=${apiKey}`;

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

        },
    },
    computed: {
        processedInstructions() {
            // Utiliza DOMParser para convertir el HTML en texto
            const parser = new DOMParser();
            const doc = parser.parseFromString(this.instructions, 'text/html');
            return doc.body.textContent;
        },
    },
    mounted() {
        this.getRecipeInfo();
    },
};
</script>

<style scoped></style>
