<template>
    <div class="card">
        <img src="https://media.istockphoto.com/id/510244381/es/foto/t%C3%ADpico-de-pescados-y-mariscos-paella-espa%C3%B1ola.jpg?s=612x612&w=0&k=20&c=2LnZ7Pk7LVZdlaJVs0bbVQ-CgrlWwbKoOTUE2B5TqdA="
            :alt="name" class="card-image">
        <div class="favorite-button">
            <button class="favorite-button-inner">
                <span class="heart-icon">&#9825;</span> <!-- Corazón negro en Unicode -->
            </button>
        </div>
        <div class="card-content">
            <div class="card-category">CATEGORIA{{ category }}</div>
            <div class="card-name">Nombre receta{{ name }}</div>
            <div class="card-preparation-time">
                <div class="time-container">
                    <span class="clock-icon">⌛</span> <!-- Icono de reloj Unicode -->
                    <span class="time-number">45</span>
                </div>
            </div>
        </div>
        <button class="prepare-button">PREPARAR</button>
    </div>
</template>
  
<script>

export default {
    props: {
        imageUrl: String,
        category: String,
        name: String,
        preparationTime: String
    }
}
</script>
  
<style scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px;
    max-width: 300px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #ccc;
}

.card-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.favorite-button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
}

.favorite-button-inner {
    background-color: #ccc;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.heart-icon {
    font-size: 30px;
}

.card-content {
    padding: 10px;
}

.card-category {
    font-size: 16px;
    color: #333;
    margin-bottom: -10px;
}

.card-name {
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-top: 5px;
    margin-bottom: 10px;
}

.card-preparation-time {
    font-size: 16px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.time-container {
    background-color: yellow;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.clock-icon {
    color: #000;
    font-size: 18px;
}

.time-number {
    font-size: 18px;
}

.prepare-button {
    background-color: #000;
    color: #fff;
    border: none;
    font-weight: bold;
    border-radius: 0;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}
</style>
  