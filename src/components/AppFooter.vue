<template>
    <div>
        <footer @mouseover="cambiarColor(true)" @mouseleave="cambiarColor(false)"
            :style="{ backgroundColor: backgroundColor }" class="footer">
            <div class="footer-content">
                <div class="logo">
                    <img src="favicon.ico" alt="Tasty Food Logo">
                </div>
                <div class="footer-info">
                    <h1>Tasty Food</h1>
                    <p>Autores: Juanito, Alimañia, Rastafari, Dorotea, Sinforoso</p>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: "AppHeader",
    data: () => ({
        backgroundColor: '#333', // Color de fondo inicial
    }),
    methods: {
        cambiarColor(entra) {
            // Cambia el color de fondo en función de si el mouse entra o sale
            this.backgroundColor = entra ? 'orange' : '#333';
        },
    },
}
</script>

<style>
/* div {
    padding: 20px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    /* Cambia el color del texto a blanco 
} */

/* footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    // Color de fondo del footer 
    color: #fff;
    // Color de texto 
    text-align: center;
    // Centra el contenido del footer horizontalmente 
    padding: 20px;
    // Espacio de relleno para el contenido del footer 
} */

/* .footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
} 

/* .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
} */

/* .logo img {
    width: 100px;
    height: auto;
    margin-right: 20px;
} */

/* h1 {
    font-size: 24px;
    margin: 0;
}

p {
    margin: 10px 0;
}  */

/* Estilos para el footer */
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 5px;
    /* Padding más fino */
    display: flex;
    justify-content: space-between;
    /* Espacio entre el logo y el texto */
    align-items: center;
    /* Centro verticalmente */
}

/* Estilos para el imagen del logo */
.logo img {
    width: 50px;
    /* Tamaño pequeño */
    height: auto;
    margin-left: 10px;
    /* Margen izquierdo */
}

/* Estilos para el título "Tasty Food" */
.footer-info h1 {
    font-size: 20px;
    /* Tamaño de fuente más pequeño */
    margin: 0;
    /* Elimina el margen superior e inferior */
}

/* Estilos para la lista de autores */
.footer-info p {
    margin: 5px 0;
    /* Espacio vertical reducido */
}</style>