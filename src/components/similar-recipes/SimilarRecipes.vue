<template>
    <div class=" bg-gray-100">
        <h2 class="section-title text-center font-bold text-xl mb-4">SIMILAR RECIPES</h2>
        <div class="shadow-md p-4 flex flex-wrap justify-center">
            <VCardRecipe v-for="recipe in similarRecipes.slice(0, 4)" :key="recipe.id" :recipe="recipe" class="m-2">
            </VCardRecipe>
        </div>
    </div>
</template>

<script>
import VCardRecipe from '@/components/VCardRecipe.vue'

export default {
    components: {
        VCardRecipe
    },
    data() {
        return {
            id: this.$route.params.id,
            similarRecipes: []
        }
    },
    methods: {
        getSimilarRecipes() {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = `https://api.spoonacular.com/recipes/${this.id}/similar?apiKey=${apiKey}`;

            fetch(url)
                .then((response) => response.json())
                .then((recipes) => {
                    this.similarRecipes = recipes;
                });
        }
    },
    mounted() {
        this.getSimilarRecipes();
    }
}
</script>

<style scoped></style>
