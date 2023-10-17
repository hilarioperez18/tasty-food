<template>
    <div class="container">
        <HeaderComponent />
        <router-link to="/" />
    </div>
    <RouterView />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
        };
    },
    name: "App",
    components: {
        HeaderComponent,
        RouterLink,
        RouterView

    },
};
</script>

<style></style>