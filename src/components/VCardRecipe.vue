<template>
    <div class="card border rounded-lg overflow-hidden shadow-md bg-gray-300 mx-5 max-w-2xl w-72 h-96 flex flex-col">
        <img :src="imageUrl" :alt="name" class="card-image object-cover w-full h-64">
        <div class="card-content flex flex-col justify-between h-full">
            <div>
                <div class="card-category text-sm text-gray-700 -mb-1">categoria{{ category }}</div>
                <div class="card-name text-lg font-bold text-black mt-2 mx-2 line-clamp-2">{{ name }}</div>
            </div>
            <div class="flex flex-col justify-end mt-2">
                <div class="card-preparation-time text-sm text-black flex items-center justify-end mb-1">
                    <div class="time-container bg-beige rounded-full p-1 flex items-center gap-1">
                        <span class="clock-icon text-black text-base">⌛</span>
                        <span class="time-number text-base">45{{ preparationTime }}</span>
                    </div>
                </div>
                <button
                    class="prepare-button bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-0 py-1 w-full cursor-pointer transition duration-300 ">PREPARAR</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        imageUrl: "",
        category: [],
        name: String,
        preparationTime: []
    }
}
</script>
  