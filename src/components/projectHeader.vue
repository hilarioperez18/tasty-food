<template>
    <nav class="
        navbar
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        ">
        <div class="flex items-center justify-between">
            <router-link to="/" class="
              text-xl
              font-bold
              text-gray-100
              md:text-2xl
              hover:text-indigo-400
            ">

                <div class="logo">
                    <img src="../assets/img/tastylogo.png" alt="">
                </div>


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
        <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          ">
            <li class="text-gray-100 hover:text-indigo-400">Inicio</li>
            <li class="text-gray-100 hover:text-indigo-400">Recetas</li>
            <li class="text-gray-100 hover:text-indigo-400">Recomendaciones</li>
            <li class="text-gray-100 hover:text-indigo-400">Contacto</li>
        </ul>
    </nav>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, toggleNav };
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
}

.navbar {

    background-color: var(--darkblue);
}

.logo,
.logo img {
    height: 90px;
}



body {
    font-family: 'open sans', sans-serif;
}
</style>