<template >
    <div>


        <!-- BUSCADOR RECETAS 
            
            
            <div class="search bg-gray-100 p-5">
            <h2 class="text-2xl font-bold mb-6 text-center">Buscador</h2>
            <div class="search-box flex items-center justify-center">
                <input type="text" placeholder="Buscar..." class="search-input">
                <button class="search-button">Buscar</button>
            </div>
        </div>
 -->
        <div class="search bg-gray-100 p-5">
            <h1 class="mt-2 flex justify-center text-2xl mb-8 font-bold">Hundreds of recipes</h1>
            <div class="flex justify-center">
                <SearchFood />
            </div>
        </div>

        <section class="bg-gray-100 p-5">
            <HomeRecomended></HomeRecomended>
        </section>

        <section class="bg-gray-100 p-5 text-center">
            <h2 class="text-2xl font-bold mb-6 text-center">Cuisine Type</h2>
            <CountryFilter />
        </section>


        <section class="bg-gray-100 p-5">
            <RecipeCategories />
        </section>


        <HomeFooter />
    </div>
</template>
<script>
import SearchFood from "../components/search-food/search-food.vue";
import CountryFilter from '../components/cuisine-types/CountryFilter.vue'
import RecipeCategories from '../components/categories/RecipeCategories.vue'
import HomeRecomended from '../components/HomeRecomended.vue'
import HomeFooter from '@/components/HomeFooter.vue';


export default {
    components: {
        SearchFood,
        CountryFilter,
        RecipeCategories,
        HomeRecomended,
        HomeFooter,

    },
    data() {
        return {
            id: 1
        }
    },
}
</script>
<style>
body {
    max-width: 1800px;
    margin: 0 auto;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>