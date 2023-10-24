<template>
    <button @click="goToViewResult"
        class="card w-48 p-4 bg-blue-500 text-white rounded  transform transition-transform duration-300 ease-in-out focus:outline-none hover:scale-105 hover:bg-blue-600">
        <div class="font-bold text-xl">
            <h3>{{ cuisine }}</h3>
        </div>
    </button>
</template>

<script>
export default {
    name: "CountryCard",
    props: {
        cuisine: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            recipes: [],
            selectedCategory:"cuisine"
        };
    },
    methods: {
        goToViewResult(){            
            localStorage.setItem("searchQuery", JSON.stringify(this.cuisine));
            localStorage.setItem("selectedCategory", JSON.stringify(this.selectedCategory));
            this.$router.push({
                    name: 'results',
                });
        }
    },
};
</script>

<style scoped></style>