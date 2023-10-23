<template>
    <div class="container">
        <RecipeInfo :recipeId="idFromRoute" />
        <SimilarRecipes :recipeId="idFromRoute" />
    </div>
</template>

<script>
import RecipeInfo from '../components/recipe-info/RecipeInfo.vue';
import SimilarRecipes from '../components/similar-recipes/SimilarRecipes.vue';
export default {
    name: 'DetailsView',
    components: {
        RecipeInfo,
        SimilarRecipes,
    },
    computed: {
        idFromRoute() {
            return String(this.$route.params.id);
        },
    },
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1600px;
    gap: 2rem;

}
</style>