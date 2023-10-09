<template>
    <button class="card">
        <div class="card-body">
            <h3>Country name</h3>
        </div>

    </button>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("../../public/comida.jpg");
    background-size: cover;
    background-position: center;
    width: calc(100% / 3);
    font-size: calc(10px + 2vmin);
    color: white;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border: none;

}
</style>