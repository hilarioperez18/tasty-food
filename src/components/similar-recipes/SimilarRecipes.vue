<template>
    <div class=" bg-gray-100">
        <h2 class="section-title text-center font-bold text-xl mb-4">SIMILAR RECIPES</h2>
        <div class="shadow-md p-4 flex flex-wrap justify-center">
            <ListSimilarRecipes></ListSimilarRecipes>
        </div>
    </div>
</template>

<script>
import ListSimilarRecipes from './ListSimilarRecipes.vue';

export default {
    components: {
        ListSimilarRecipes,
    },
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    beforeCreate(){
    },
    methods: {
        
    }
}
</script>

<style scoped></style>
