<template>
    <header>
        <nav class="navbar">
            <div class="my-navbar mx-auto px-2 sm:px-6 ">
                <div class="relative flex items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <button type="button"
                            class="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-colorbg hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class=" logo flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <img src="../assets/img/tastylogo.png" alt="">
                        </div>
                        <div class="hidden sm:ml-6 sm:flex flex items-center">
                            <div class="flex items-center space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <a href="#" class="bg-colordark text-white rounded-md px-3 py-2 font-medium"
                                    aria-current="page">Inicio</a>
                                <a href="#"
                                    class="hover:bg-blue-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Recetas</a>
                                <a href="#"
                                    class="hover:bg-blue-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Recomendaciones</a>
                                <a href="#"
                                    class="hover:bg-blue-200 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sobre
                                    Nosotros</a>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a href="#" class="bg-colordark text-white block rounded-md px-3 py-2 text-base font-medium"
                        aria-current="page">Inicio</a>
                    <a href="#"
                        class="hover:bg-blue-200 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Recetas</a>
                    <a href="#"
                        class="hover:bg-blue-200 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Recomendaciones</a>
                    <a href="#"
                        class="hover:bg-blue-200 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Sobre
                        nosotros</a>
                </div>
            </div>
        </nav>
    </header>
</template>


<script>

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





.navbar {
    font-family: 'open sans', sans-serif;
    background: linear-gradient(to bottom,
            rgba(152, 189, 241, 1),
            rgba(152, 189, 241, 0.7));
}

.my-navbar {
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    max-width: 1000;
    height: inherit;
    overflow: hidden;
}

.mytext {
    display: inline-block;
    padding: 5px 0;
    margin-right: 17px;
    font-size: 17px;
    font-weight: 300;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    color: inherit;
}


.bg-colordark {
    background: #1b74bd;
}


.nav1 {


    color: #fff;
}

.contenedor-nav {
    display: flex;
    margin: auto;
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


.logo,
.logo img {
    height: 100px;
    margin-left: 30px;
}
</style>