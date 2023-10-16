<template>
    <div>
        <templateApp />
    </div>
</template>
  
<script>
import proyectHeader from "./components/projectHeader.vue";
import templateApp from "./components/TemplateApp.vue";

export default {
    data() {
        return {
            mensaje: '¡Hola, mundo!'
        };
    },
    name: "App",
    components: {
        proyectHeader,
        templateApp
    },
};
</script>
  