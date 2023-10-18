<template>
    <div class="container">
        <h2>Elige tu tipo de cocina</h2>
        <div class="carousel">
            <div class="card" v-for="(cuisine, index) in cuisinesTypes" :key="index">
                <CountryCard :cuisine="cuisine" />
            </div>
        </div>
    </div>
</template>


<script>
import CountryCard from './CountryCard.vue';

export default {
    name: 'CountryFilter',
    components: { CountryCard },
    data() {
        return {
            cuisine: '',
            cuisinesTypes: ["Africana", "Asiática", "Americana", "Británica", "Cajún", "Caribeña", "China", "Este Europea", "Europea", "Francesa", "Alemana", "Griega", "India", "Irlandesa", "Italiana", "Japonesa", "Judía", "Coreana", "Latina", "Mediterránea", "Mexicana", "Oriente Medio", "Nórdica", "Sureña", "Española", "Tailandesa", "Vietnamita"],
        };
    },
    mounted() {
        const carousel = document.querySelector('.carousel');
        let position = 0;

        setInterval(() => {
            position += 210; // Ancho de una tarjeta más el margen
            if (position >= carousel.scrollWidth) {
                position = 0;
            }

            carousel.scrollTo({
                left: position,
                behavior: 'smooth',
            });
        }, 3000); // Cambia el intervalo de tiempo según tus preferencias
    },
};
</script>


<style scoped>
.container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
}
.carousel {
    display: flex;
    overflow: hidden;
    width: 100%;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    white-space: nowrap;
}

.card {
    flex: 0 0 auto;
    width: 200px;
    height: auto;
    /* Ajusta el alto según tus necesidades */
    margin-right: 10px;
    scroll-snap-align: start;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    text-align: center;
    margin: 20px 0;
}
</style>
