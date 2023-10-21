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

        <!---->

        <section class="recommended bg-gray-100 p-5 text-center">
            <h2 class="text-2xl font-bold mb-6">Nuestros Recomendados</h2>
            <div class="cards flex justify-around flex-wrap">
                <div class="card p-4 border border-gray-300">
                    <img src="" alt="Recomendado 1">
                    <p class="p-2">Texto del Recomendado 1</p>
                    <RouterLink to="/recipes"><button class="bg-blue-500 text-white px-4 py-2 mt-2">Ver más</button>
                    </RouterLink>
                </div>
                <div class="card p-4 border border-gray-300">
                    <img src="" alt="Recomendado 2">
                    <p class="p-2">Texto del Recomendado 2</p>
                    <RouterLink to="/recipes"><button class="bg-blue-500 text-white px-4 py-2 mt-2">Ver más</button>
                    </RouterLink>

                </div>
                <div class="card p-4 border border-gray-300">
                    <img src="" alt="Recomendado 3">
                    <p class="p-2">Texto del Recomendado 3</p>
                    <router-link :to="{ name: 'recipes', params: { id: id } }"><button
                            class="bg-blue-500 text-white px-4 py-2 mt-2">Ver más</button>
                    </router-link>
                </div>
            </div>
        </section>


        <section class="bg-gray-100 p-5 text-center">
            <h2 class="text-2xl font-bold mb-6 text-center">Cuisine Type</h2>
            <CountryFilter />
        </section>


        <section class="bg-gray-100 p-5">
            <RecipeCategories />
        </section>

        <footer class="bg-gray-800 text-white p-5 text-center">
            <div class="footer-logo">
                <!-- Logo del footer (Personaliza según sea necesario) -->
            </div>
            <div class="footer-text">
                <h3 class="text-4xl font-bold mb-3">Tasty Food</h3>
                <div class="footer-authors">
                    <p>Autores: <a href="#" class="text-white">auth 1</a>,
                        <a href="#" class="text-white">auth 2</a>,
                        <a href="#" class="text-white">auth 3</a>,
                        <a href="#" class="text-white">auth 4</a>,
                        <a href="#" class="text-white">auth 5</a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
import SearchFood from "../components/search-food/search-food.vue";
import CountryFilter from '../components/cuisine-types/CountryFilter.vue'
import RecipeCategories from '../components/categories/RecipeCategories.vue'

export default {
    components: {
        SearchFood,
        CountryFilter,
        RecipeCategories
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