<template>
    <div>
        <HeaderComponent />
        <router-link to="/" />
    </div>
    <RouterView />
</template>
  
<script>
import HeaderComponent from "./components/HeaderComponent.vue";
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
        HeaderComponent,
        templateApp,
        RouterLink,
        RouterView

    },
};
</script>