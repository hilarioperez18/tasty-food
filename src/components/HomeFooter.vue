<template>
    <footer class="bg-gray-800 text-white p-5 text-center">
        <div class="footer-logo">
            <!-- Logo del footer (Personaliza según sea necesario) -->
        </div>
        <div class="footer-text">
            <h3 class="text-4xl font-bold mb-3">Tasty Food</h3>
            <div class="footer-authors">
                <p>Developers:
                    <HomeFooterLinks url="https://github.com/bflores96" colorNartural="white" colorHover="#e357d6">
                        Bárbara Flores
                    </HomeFooterLinks>,
                    <HomeFooterLinks url="https://github.com/gjescuderoamodeo" colorNartural="white" colorHover="#12a14b">
                        Guillermo Escudero
                    </HomeFooterLinks>,
                    <HomeFooterLinks url="https://github.com/hilarioperez18" colorNartural="white" colorHover="#57d6e3">
                        Hilario Pérez
                    </HomeFooterLinks>,
                    <HomeFooterLinks url="https://github.com/gonzsanz" colorNartural="white" colorHover="#dc644d">
                        David González
                    </HomeFooterLinks>,
                    <HomeFooterLinks url="https://github.com/IgnacioBar" colorNartural="white" colorHover="#782eee">
                        Ignacio Barbeyto
                    </HomeFooterLinks>,
                    <HomeFooterLinks url="https://github.com/ivanmartinezd" colorNartural="white" colorHover="#eeee2e">
                        Iván Martínez
                    </HomeFooterLinks>
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import HomeFooterLinks from '@/components/HomeFooterLinks.vue';
export default {
    components: { HomeFooterLinks }
};
</script>

<style lang="scss" scoped></style>