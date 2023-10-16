<template >
    <div>
        <header class="bg-gray-800 text-white p-5 text-center">
            <div class="logo">
                <h1>Logo</h1>
            </div>
        </header>

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
            <h1 class="mt-2 flex justify-center text-2xl mb-8 font-bold">Cientos de recetas</h1>
            <div class="flex justify-center">
                <SearchFood />
            </div>
        </div>

        <!---->

        <section class="recommended bg-gray-100 p-5 text-center">
            <h2 class="text-2xl font-bold mb-6">Nuestros Recomendados</h2>
            <div class="cards flex justify-around flex-wrap">
                <div class="card p-4 border border-gray-300">
                    <img src="imagen1.jpg" alt="Recomendado 1">
                    <p class="p-2">Texto del Recomendado 1</p>
                    <button class="bg-blue-500 text-white px-4 py-2 mt-2">Ver más</button>
                </div>
                <div class="card p-4 border border-gray-300">
                    <img src="imagen2.jpg" alt="Recomendado 2">
                    <p class="p-2">Texto del Recomendado 2</p>
                    <button class="bg-blue-500 text-white px-4 py-2 mt-2">Ver más</button>
                </div>
                <div class="card p-4 border border-gray-300">
                    <img src="imagen3.jpg" alt="Recomendado 3">
                    <p class="p-2">Texto del Recomendado 3</p>
                    <button class="bg-blue-500 text-white px-4 py-2 mt-2">Ver más</button>
                </div>
            </div>
        </section>


        <section class="type bg-gray-100 p-5 text-center">
            <h2 class="text-2xl font-bold mb-6">Tipo</h2>
            <div class="grid grid-cols-7 gap-4">
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 1</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 2</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 3</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 4</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 5</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 6</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 7</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 1</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 2</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 3</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 4</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 5</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 6</p>
                </div>
                <div class="type-card p-4">
                    <p class="border border-gray-300 inline-block p-2">TIPO 7</p>
                </div>
            </div>
        </section>


        <section class="categories bg-gray-100 p-5 text-center">
            <h2 class="text-2xl font-bold mb-6">Categoría</h2>
            <div class="category-cards grid grid-cols-3 gap-4">
                <div class="category-card p-4">
                    <span class="border border-gray-300 inline-block p-2">CATEGORIA 1</span>
                </div>
                <div class="category-card p-4">
                    <span class="border border-gray-300 inline-block p-2">CATEGORIA 2</span>
                </div>
                <div class="category-card p-4">
                    <span class="border border-gray-300 inline-block p-2">CATEGORIA 3</span>
                </div>
                <div class="category-card p-4">
                    <span class="border border-gray-300 inline-block p-2">CATEGORIA 1</span>
                </div>
                <div class="category-card p-4">
                    <span class="border border-gray-300 inline-block p-2">CATEGORIA 2</span>
                </div>
                <div class="category-card p-4">
                    <span class="border border-gray-300 inline-block p-2">CATEGORIA 3</span>
                </div>
            </div>
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
import SearchFood from "./search-food/search-food.vue";


export default {
    components: {
        SearchFood
    },
}
</script>
<style></style>