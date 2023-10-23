<template>
    <section class="recommended bg-gray-100 p-5 text-center">
        <h2 class="text-2xl font-bold mb-6">Our recommendations</h2>
        <div class="cards flex justify-around flex-wrap">
            <VListSearchRecipe :recipes="recipes"></VListSearchRecipe> 
        </div>
    </section>
</template>

<script>

import VListSearchRecipe from './VListSearchRecipe.vue';


export default {
    components: {
        VListSearchRecipe,
    },
    data() {
        return {
            id: 1,
            recipes: []
        }
    },
    beforeMount() {
        this.getRecommend();
    },
    methods: {
        getRecommend() {
            const apiKey = import.meta.env.VITE_API_KEY;
            let urlRecipes = `https://api.spoonacular.com/recipes/complexSearch?number=3&sort=random&apiKey=${apiKey}`;
            
            fetch(urlRecipes)
                .then((response) => response.json())
                .then((recipe) => {
                    this.recipes = recipe.results;
                })
        }
    },

}
</script>

<style lang="scss" scoped></style>