<template >
    <div>
        <header class="bg-gray-800 text-white p-5 text-center">
            <div class="logo">
                <h1>Logo</h1>
            </div>
        </header>
        <div class="flex justify-center">
            <VListSearchRecipe />
        </div>

    </div>
</template>
<script>
import VListSearchRecipe from '../components/VListSearchRecipe.vue';


export default {
    components: {
        VListSearchRecipe
    },
    data() {
        return {
        }
    },
}
</script>
<style></style>