<template>
    <div>
        <VListSearchRecipe />
        <VListRecipe />
        <VSimilarRecipes />
        <VCardRecipe />
    </div>
</template>
  
<script>
import VListSearchRecipe from "@/components/VListSearchRecipe.vue";
import VListRecipe from "./components/VListRecipe.vue";
import VSimilarRecipes from "./components/VSimilarRecipes.vue";
import VCardRecipe from "./components/VCardRecipe.vue";

export default {
    data() {
        return {
            mensaje: '¡Hola, mundo!'
        };
    },
    name: "App",
    components: {
        VListSearchRecipe,
        VListRecipe,
        VSimilarRecipes,
        VCardRecipe
    },
};
</script>
  