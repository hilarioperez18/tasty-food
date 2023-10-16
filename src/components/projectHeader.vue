<template>
    <header>
        <nav class="navbar">
            <div class="flex items-center justify-between">
                <router-link to="/" class="
              text-xl
              font-bold
              text-gray-100
              md:text-2xl
              hover:text-indigo-400
            ">

                </router-link>
                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button type="button" class="
                text-gray-100
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              ">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <nav id="nav" class="nav1">
                <div class="contenedor-nav">
                    <div class="logo">
                        <img src="../assets/img/tastylogo.png" alt="">
                    </div>
                    <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          ">
                        <div class="enlaces" id="enlaces">


                            <a href="#" id="enlace-inicio" class="btn-header">Inicio</a>
                            <a href="#" id="enlace-equipo" class="btn-header">Recetas</a>
                            <a href="#" id="enlace-servicio" class="btn-header">Recomendaciones</a>
                            <a href="#" id="enlace-trabajo" class="btn-header">Contacto</a>
                        </div>

                    </ul>
                </div>

            </nav>
        </nav>
        <!--otros componentes-->
        <h1 class="mt-2 flex justify-center text-2xl mb-8 font-bold">Cientos de recetas</h1>
        <div class="flex justify-center">
            <SearchFood />
        </div>
    </header>
</template>

<script>
import { ref } from 'vue';
import SearchFood from "./search-food/search-food.vue";

export default {
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, toggleNav };
    },
    components: {
        SearchFood
    },

};
</script>

<style>
:root {
    --brownfood: #dc644d;
    --lightblue: #bae3e4;
    --darkblue: #1b74bd;
    --mediumblue: #98bdf1;
    --aquamarine: #57d6e3;
    --darkaqua: #48bed9;
    --superdarkblue: #2f5f76;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'open sans', sans-serif;
}

img {
    vertical-align: top;
}

header {
    width: 100%;
    height: 350px;

    background: linear-gradient(to bottom,
            rgba(244, 201, 149, 255),
            rgba(255, 0, 0, 0)), url(../assets/img/bg.jpg);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

.navbar {
    background: linear-gradient(to bottom,
            rgba(152, 189, 241, 1),
            rgba(152, 189, 241, 0.7));
}


nav {
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5)
}

.nav1 {


    color: #fff;
}

.contenedor-nav {
    display: flex;
    margin: auto;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    max-width: 1000;
    height: inherit;
    overflow: hidden;
}

nav .enlaces a {
    display: inline-block;
    padding: 5px 0;
    margin-right: 17px;
    font-size: 17px;
    font-weight: 300;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    color: inherit;
}

nav .enlaces a:hover {
    border-bottom: 3px solid #1b74bd;
    transition: 0, 6s;
}

.logo,
.logo img {
    height: 100px;
    margin-left: 30px;
}
</style>