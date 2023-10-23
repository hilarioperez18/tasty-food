<template>
    <div class=" bg-gray-100">
        <h2 class="section-title text-center font-bold text-xl mb-4">SIMILAR RECIPES</h2>
        <div class="shadow-md p-4 flex flex-wrap justify-center">
            <ListSimilarRecipes :recipes="similarRecipes"></ListSimilarRecipes>
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
            similarRecipes: []
        }
    },
    methods: {
        async getSimilarRecipes() {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = `https://api.spoonacular.com/recipes/${this.id}/similar?apiKey=${apiKey}&number=4`;

            await fetch(url)
                .then((response) => response.json())
                .then((recipes) => {
                    this.similarRecipes = recipes;
                });

            console.log("holaaaaa")
            console.log(this.similarRecipes);
        }
    },
    mounted() {
        this.getSimilarRecipes();
    }
}
</script>

<style scoped></style>
