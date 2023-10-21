<template>
    <button @click="getRecipesbyCuisine"
        class="card w-48 p-4 bg-blue-500 text-white rounded  transform transition-transform duration-300 ease-in-out focus:outline-none hover:scale-105 hover:bg-blue-600">
        <div class="font-bold text-xl">
            <h3>{{ cuisine }}</h3>
        </div>
    </button>
</template>

<script>
export default {
    name: "CountryCard",
    props: {
        cuisine: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            recipes: [],
        };
    },
    methods: {
        async getRecipesbyCuisine() {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${this.cuisine}`;

            await fetch(url)
                .then((response) => response.json())
                .then((recipes) => {
                    this.recipes = recipes.results;
                });
            console.log(this.recipes);
        }
    },
};
</script>

<style scoped></style>