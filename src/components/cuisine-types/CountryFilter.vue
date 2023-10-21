<template>
    <div class="container">
        <h2>Choose your cuisine type</h2>
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
            cuisinesTypes: ["African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"
            ]
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
