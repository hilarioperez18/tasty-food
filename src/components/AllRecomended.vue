<!-- <template>
    <section class="recommended bg-gray-100 p-5 text-center">
        <h2 class="text-2xl font-bold mb-6">Our recommendations</h2>
        <div class="cards flex justify-around flex-wrap">
            <VCardRecipe v-for="recipe in  recommendedRecipeComplete " :key="recipe.id" :id="String(recipe.id)"
                :imageUrl="recipe.image" :name="recipe.title" :preparationTime="String(recipe.readyInMinutes)">
            </VCardRecipe>
        </div>
    </section>
</template>
  
<script>
import VCardRecipe from './VCardRecipe.vue';

export default {
    data() {
        return {
            id: 1,
            preparationTime: '',
            recipes: [],
            recommendedRecipeComplete: [],
        };
    },
    components: {
        VCardRecipe,
    },

    async created() {
        this.recipes = await this.getRecommendRecipes();
        this.recommendedRecipeComplete = await this.getRecipesInfo(this.recipes);
    },
    methods: {
        async getRecommendRecipes() {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = `https://api.spoonacular.com/recipes/complexSearch?number=3&sort=random&apiKey=${apiKey}&number=4`;

            const response = await fetch(url);
            const recipes = await response.json();

            return recipes;
        },
        async getRecipesInfo(recipes) {
            const apiKey = import.meta.env.VITE_API_KEY;
            const promiseList = recipes.map((recipe) => {
                const request = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`;
                return fetch(request).then((response) => response.json());
            });

            return Promise.all(promiseList);
        },
    },
};
</script>
   -->

<template>
    <section class="recommended bg-gray-100 p-5 text-center">
        <h2 class="text-2xl font-bold mb-6">Our recommendations</h2>
        <div class="cards flex justify-around flex-wrap">
            <VCardRecipe v-for=" recipe  in  recipes " :key="recipe.id" :id="String(recipe.id)" :imageUrl="recipe.image"
                :name="recipe.title" :preparationTime="String(recipe.readyInMinutes)">
            </VCardRecipe>
        </div>
    </section>
</template>

<script>
import VCardRecipe from './VCardRecipe.vue';

export default {
    data() {
        return {
            id: 1,
            recipes: []
        }
    },
    components: {
        VCardRecipe,
    },
    beforeMount() {
        this.getRecommend();
    },
    methods: {
        async getRecommend() {
            const apiKey = import.meta.env.VITE_API_KEY;
            let urlRecipes = `https://api.spoonacular.com/recipes/complexSearch?number=15&sort=random&apiKey=${apiKey}`;

            await fetch(urlRecipes)
                .then((response) => response.json())
                .then((recipe) => {
                    this.recipes = recipe.results;
                    console.log(recipe)
                })
        }
    },

}
</script>

<style lang="scss" scoped></style>