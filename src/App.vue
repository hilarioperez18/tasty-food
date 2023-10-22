<template>
    <HeaderComponent v-if="!isLanding" />
    <RouterView />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import { RouterView } from 'vue-router'

export default {
    name: "App",
    components: {
        HeaderComponent,
        RouterView
    },
    computed: {
        isLanding() {
            return this.$route.path == '/'
        }
    }
};
</script>