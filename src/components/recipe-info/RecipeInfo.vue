<template>
    <div class="container">
        <div class="top">
            <img :src="image" alt="Imagen de receta">
            <div class="info">
                <h3>{{ recipeName }}</h3>
                <div class="categoreis">
                    <span v-for="(category, index) in categories" :key="index">{{ category }}</span>
                </div>
                <div class="ingredients">
                    <ul>
                        <li v-for="(ingredient, index) in ingredients" :key="index">
                            {{ ingredient.original }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="instructions">
            <h2>Instructions</h2>
            <p>{{ instructions }}</p>
        </div>

    </div>
</template>

<script>
export default {

    name: 'RecipeInfo',
    props: {
        recipeId: {
            type: Number,
            required: true,
            default: 81429
        }
    },
    data() {
        return {
            ingredients: [],
            recipeName: '',
            categories: [],
            image: '',
            instructions: '',
            time: ''
        };
    },
    methods: {
        async getRecipeInfo() {
            const apiKey = import.meta.env.VITE_API_KEY;
            let urlRecipes = `https://api.spoonacular.com/recipes/${this.recipeId}/information?apiKey=${apiKey}`;

            await fetch(urlRecipes)
                .then(response => response.json())
                .then(recipe => {
                    this.recipeName = recipe.title;
                    this.categories = recipe.dishTypes;
                    this.image = recipe.image;
                    this.instructions = recipe.instructions;
                    this.time = recipe.readyInMinutes;
                    this.ingredients = recipe.extendedIngredients;
                });

            console.log(this.ingredients);
        }
    },
    mounted() {
        this.getRecipeInfo();
    }

}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.top {
    display: flex;

}

img {
    width: 27rem;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2rem;

    & h3 {
        font-size: 2rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 500;
        margin-bottom: 1rem;
    }
}


.categoreis {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    & span {
        background-color: #5894DB;
        padding: .2rem .5rem;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 500;
        color: #fff;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
}

.ingredients {
    margin-top: 1rem;

    & ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: .5rem;
    }

}
</style>