<template lang="">
    <div>
        <!--<searchFood class="ml-9" />-->
        <h2 class="section-title text-left font-bold text-xl mb-4 ml-9">Search results for:</h2>
        <input type="search"
            class="block mx-7 w-96 p-2.5 text-sm text-black bg-gray-300 rounded-2xl border-l-gray-50 border-l-2 border border-gray-300dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-black dark:text-blac"
            :placeholder=searchQuery disabled />
        <VListSearchRecipe :searchQuery="searchQuery"></VListSearchRecipe>
    </div>
</template>
<script>
// import CountryFilter from "../components/cuisine-types/CountryFilter.vue";
import VListSearchRecipe from '../components/VListSearchRecipe.vue';
//import searchFood from '../components/search-food/search-food.vue';

export default {
    components: {
        VListSearchRecipe,
        //searchFood
    },
    data() {
        return {
            searchQuery: [],
            inputSearchQuery: ""
        }
    },
    beforeMount() {
        this.searchQuery = JSON.parse(localStorage.getItem("searchQuery"))
        //console.log(this.result);
    }
}
</script>

<style>
#test {
    background-color: brown;
    height: 100%;
    width: 100%;
}
</style>
