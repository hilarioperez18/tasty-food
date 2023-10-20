<template lang="">
    <div id="test">
        <searchFood class="ml-9" />
        <VListSearchRecipe :recipes="result"></VListSearchRecipe>
    </div>
</template>
<script>
import VListSearchRecipe from '../components/VListSearchRecipe.vue';
import searchFood from '../components/search-food/search-food.vue';

export default {
    components:{
        VListSearchRecipe,
        searchFood
    },
    data() {
        return {
            result: [],
        }
    },
    beforeMount() {
        this.result = JSON.parse(localStorage.getItem("result"))
        console.log(this.result);
    }
}
</script>
<style>
#test {
    background-color: brown;
    height: max-content;
    width: max-content;
}
</style>