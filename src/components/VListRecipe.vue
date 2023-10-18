<template>
    <div class="max-w-max mx-5 my-5">
        <h2 class="section-title text-center font-bold text-xl mb-4">Nuestros recomendados</h2>
        <div class="recipe-list shadow-md p-4 flex flex-wrap justify-center">
            <VCardRecipe v-for="index in 3" :key="index" class="m-2">
            </VCardRecipe>
        </div>
    </div>
</template>

<script>
import VCardRecipe from '@/components/VCardRecipe.vue'

export default {
    components: {
        VCardRecipe
    },
    data() {
        return {
            placeholderImageUrl: 'URL de una imagen de ejemplo'
        };
    }
};
</script>




