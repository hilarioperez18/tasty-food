<template>
    <div>
        <!-- <proyectHeader /> -->
        <router-link to="/recipes">Link a la página de recetas</router-link>
    </div>
    <RouterView />
</template>
  
<script>
import proyectHeader from "./components/projectHeader.vue";
import templateApp from "./components/TemplateApp.vue";
import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
            mensaje: '¡Hola, mundo!'
        };
    },
    name: "App",
    components: {
        proyectHeader,
        templateApp,
        RouterLink,
        RouterView

    },
};
</script>
  