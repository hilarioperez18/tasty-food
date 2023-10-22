<template>
    <section class="recommended bg-gray-100 p-5 text-center">
        <h2 class="text-2xl font-bold mb-6">Our recommendations</h2>
        <div class="cards flex justify-around flex-wrap">
            <div class="card p-4 border border-gray-300">
                <img src="" alt="Recomendado 1">
                <p class="p-2">Recommended Text 1</p>
                <RouterLink to="/recipes"><button class="bg-blue-500 text-white px-4 py-2 mt-2">See more</button>
                </RouterLink>
            </div>
            <div class="card p-4 border border-gray-300">
                <img src="" alt="Recomendado 2">
                <p class="p-2">Recommended Text 2</p>
                <RouterLink to="/recipes"><button class="bg-blue-500 text-white px-4 py-2 mt-2">See more</button>
                </RouterLink>

            </div>
            <div class="card p-4 border border-gray-300">
                <img src="" alt="Recomendado 3">
                <p class="p-2">Recommended Text 3</p>
                <router-link :to="{ name: 'recipes', params: { id: id } }"><button
                        class="bg-blue-500 text-white px-4 py-2 mt-2">See more</button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            id: 1
        }
    },

}
</script>

<style lang="scss" scoped></style>

<!-- <section class="recommended bg-gray-100 p-5 text-center">
            <h2 class="text-2xl font-bold mb-6">Our recommendations</h2>
            <HomeRecomended />
        </section> -->