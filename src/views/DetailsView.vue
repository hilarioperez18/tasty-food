<template>
    <div>
        <RecipeInfo :recipeId="idFromRoute" />
    </div>
</template>

<script>
import RecipeInfo from '../components/recipe-info/RecipeInfo.vue';
export default {
    name: 'DetailsView',
    components: {
        RecipeInfo
    },
    computed: {
        idFromRoute() {
            return this.$route.params.id;
        },
    },
}
</script>

<style lang="scss" scoped></style>