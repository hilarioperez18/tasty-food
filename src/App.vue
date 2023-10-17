<template>
    <div>
        <HomeView />
    </div>
</template>
  
<script>
import proyectHeader from "./components/projectHeader.vue";
import HomeView from "./views/HomeView.vue";

export default {
    data() {
        return {
            mensaje: '¡Hola, mundo!'
        };
    },
    name: "App",
    components: {
        proyectHeader,
        HomeView
    },
};
</script>
  