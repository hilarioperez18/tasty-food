<template>
    <button
        class="card w-48 p-4 bg-blue-500 text-white rounded  transform transition-transform duration-300 ease-in-out focus:outline-none hover:scale-105 hover:bg-blue-600">
        <div class="font-bold text-xl">
            <h3>{{ cuisine }}</h3>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        cuisine: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped></style>