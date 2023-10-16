<template>
    <div>
        <proyectHeader />
    </div>
</template>
  
<script>
import proyectHeader from "./components/projectHeader.vue";

export default {
    data() {
        return {
            mensaje: '¡Hola, mundo!'
        };
    },
    name: "App",
    components: {
        proyectHeader
    },
};
</script>
  