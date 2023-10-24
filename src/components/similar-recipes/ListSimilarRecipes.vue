<template>
    <div class="max-w-max mx-5 my-5 bg-gray-100">
        <div class="recipe-list shadow-md p-4 flex flex-wrap justify-center">
            <VCardRecipe v-for=" recipe  in  infoRecipeComplete " :key="recipe.id" :id="String(recipe.id)"
                :imageUrl="recipe.image" :name="recipe.title" :preparationTime="String(recipe.readyInMinutes)">
            </VCardRecipe>
        </div>
    </div>
</template>
  
<script>
import VCardRecipe from '../VCardRecipe.vue';


export default {
    data() {
        return {
            id: this.$route.params.id,
            image: '',
            recipes: [],
            infoRecipeComplete: [],
        };
    },
    components: {
        VCardRecipe,
    },

    async created() {
        this.recipes= await this.getSimilarRecipes()
        console.log("Lista")
        console.log(this.recipes);
        this.infoRecipeComplete = await this.getRecipesInfo(this.recipes)
        console.log("estamos aqui")
        console.log(this.infoRecipeComplete);
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
            return await this.similarRecipes;
        },
        getRecipesInfo(recipes) {
            console.log(recipes)
            const idList = recipes.map((recipe) => recipe.id);
            console.log(idList)
            const apiKey = import.meta.env.VITE_API_KEY;
            const promiseList = [];
            idList.forEach(id => {
                const request = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
                console.log("request")
                console.log(request)
                promiseList.push(request);
            })
            const p1 = fetch(promiseList[0])
            const p2 = fetch(promiseList[1])
            const p3 = fetch(promiseList[2])
            const promises = [p1, p2, p3];
            console.log("promise")
            console.log(promiseList)
            Promise.all(promises)
                .then((responses) => Promise.all(responses.map((response) => response.json()))
                    .then((recipes) => {
                        console.log(recipes)
                        this.infoRecipeComplete = recipes.map((recipe) => {
                            return {
                                id: recipe.id,
                                image: recipe.image,
                                title: recipe.title,
                                readyInMinutes: recipe.readyInMinutes
                            }
                        })
                    })
                )

        },
        
    },
};
</script>

  