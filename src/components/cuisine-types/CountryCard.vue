<template>
    <button class="card">
        <div class="card-body">
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
}
</script>

<style scoped>
.card {
    background: url("../../../public/comida.jpg");
    background-size: cover;
    background-position: center;
    font-size: calc(10px + 2vmin);
    color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-shadow: 0 0 10px rgba(0, 0, 0, 1);
    cursor: pointer;
    border: none;
    width: 200px;
    height: auto;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }

    /* Aplica una opacidad diferente al texto */
    .card-body {
        background: transparent;
        opacity: 0.9;
        /* Ajusta la opacidad del texto aquí */
    }

    &:active {
        transform: scale(0.99);
    }

    &:focus {
        outline: none;
    }

    &:hover {
        transform: scale(1.06);
    }
}
</style>