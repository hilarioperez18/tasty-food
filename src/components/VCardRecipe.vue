<template>
    <div class="card border rounded-lg overflow-hidden shadow-md bg-gray-300 mx-5 max-w-2xl">
        <img src="https://media.istockphoto.com/id/510244381/es/foto/t%C3%ADpico-de-pescados-y-mariscos-paella-espa%C3%B1ola.jpg?s=612x612&w=0&k=20&c=2LnZ7Pk7LVZdlaJVs0bbVQ-CgrlWwbKoOTUE2B5TqdA="
            :alt="name" class="card-image w-full h-32 object-cover">
        <div class="card-content p-2">
            <div class="card-category text-sm text-gray-700 -mb-1">CATEGORIA {{ category }}</div>
            <div class="card-name text-lg font-bold text-black mt-1 mb-3">Nombre receta {{ name }}</div>
            <div class="card-preparation-time text-sm text-black flex items-center justify-end">
                <div class="time-container bg-yellow-300 rounded-full p-1 flex items-center gap-1">
                    <span class="clock-icon text-black text-base">⌛</span>
                    <span class="time-number text-base">45 {{ preparationTime }}</span>
                </div>
            </div>
        </div>
        <button
            class="prepare-button bg-black text-white font-bold rounded-0 py-1 w-full cursor-pointer transition duration-300 hover:bg-gray-900">PREPARAR</button>
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


