<template>
    <div class="max-w-max mx-5 my-5 bg-gray-100">
        <h2 class="section-title text-left font-bold text-xl mb-4 ml-9">Resultados de búsqueda para: </h2>
        <searchFood class="ml-9" />
        <div class="recipe-list shadow-md p-4 flex flex-wrap justify-center">
            <VCardRecipe v-for="index in 3" :key="index" class="m-2"></VCardRecipe>
        </div>
    </div>
</template>
  
<script>
import VCardRecipe from '@/components/VCardRecipe.vue'
import searchFood from './search-food/search-food.vue';

export default {
    components: {
        VCardRecipe,
        searchFood
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

  