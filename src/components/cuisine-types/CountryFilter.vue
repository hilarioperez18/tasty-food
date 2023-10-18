<template>
    <h2>Elige tu tipo de cocina</h2>
    <div class="cuisines">
        <div class="cuisine" v-for="cuisine in cuisinesTypes" :key="cuisine">
            <CountryCard :cuisine="cuisine" />
        </div>

    </div>
</template>

<script>
import CountryCard from "./CountryCard.vue";
export default {
    name: "CountryFilter",
    components: { CountryCard },
    data() {
        return {
            cuisine: "",
            cuisinesTypes: ["Africana", "Asiática", "Americana", "Británica", "Cajún", "Caribeña", "China", "Este Europea", "Europea", "Francesa", "Alemana", "Griega", "India", "Irlandesa", "Italiana", "Japonesa", "Judía", "Coreana", "Latina", "Mediterránea", "Mexicana", "Oriente Medio", "Nórdica", "Sureña", "Española", "Tailandesa", "Vietnamita"],
        }
    }
}
</script>

<style scoped>
.cuisines {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

h2 {
    text-align: center;
    margin: 20px 0;
}
</style>