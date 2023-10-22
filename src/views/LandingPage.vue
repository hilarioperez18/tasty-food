<template>
    <header class="food">
        <div class="textos-food">
            <h1>MyTastyFood</h1>
            <p>Encuentra las recetas que estabas buscando</p>
            <a href="/home" class="cta button">Empieza ya</a>
        </div>


        <div class="svg-food" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: #fff;"></path>
            </svg></div>
    </header>

    <section class="wave-contenedor website">
        <img src="assets/img/undraw_cooking_p7m1.svg" alt="">
        <div class="contenedor-textos-main">
            <h2 class="titulo left">¿Qué es?</h2>
            <p class="parrafo">
                En MyTastyFood podrás encontrar recetas, ver nuestros platos recomendados, buscar por categorías y ver
                recetas similares que te puedan interesar. También puedes buscar recetas usando filtros para ser más
                específicos. </p>
            <p>¡Ahora puedes prepararlos! ¡Disfruta de la cocina!
                Ayúdanos a mejorar, contacta con nosotros</p>
            <div class="textos-contact">
                <a href="#contacto">Contacto</a>
            </div>

        </div>
    </section>

    <section class="info">
        <div class="contenedor">
            <h2 class="titulo left">Aprende nuevas recetas</h2>
            <p>De manera sencilla y rápida</p>
        </div>
    </section>

    <section class="cards contenedor">
        <h2 class="titulo">Nuestros servicios</h2>

        <div class="content-cards">
            <article class="card">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h3>Busca recetas</h3>
                <p>Buscador fácil de usar, solamente escribe lo que estás buscando</p>

            </article>

            <article class="card">
                <i class="fa-solid fa-star"></i>
                <h3>Platos recomendados</h3>
                <p>Te recomendaremos las mejores recetas del momento</p>

            </article>

            <article class="card">
                <i class="fa-solid fa-filter"></i>
                <h3>Filtra por categoría</h3>
                <p>Busca por categoría para ver las recetas de las que disponemos</p>

            </article>
        </div>
    </section>

    <section class="galeria">
        <div class="contenedor">
            <h2 class="titulo">Platos que podrás preparar tú mismo</h2>
            <article class="galeria-cont">
                <img src="assets/img/paella.jpg" alt="">
                <img src="assets/img/pasta.jpg" alt="">
                <img src="assets/img/tortilla-española.jpg" alt="">
            </article>
        </div>
    </section>

    <section class="info-last">
        <div class="contenedor last-section">
            <div class="contenedor-textos-main">
                <h2 class="titulo left">Información detallada</h2>
                <p class="parrafo">En cada receta te brindaremos los ingredientes necesarios, las cantidades y la manera
                    de
                    preparación con pasos sencillos</p>

            </div>
            <img src="assets/img/undraw_diet_ghvw.svg" alt="">
        </div>

        <div class="svg-wave" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: #dc644d;"></path>
            </svg></div>
    </section>

    <footer id="contacto">
        <div class="contenedor">
            <h2 class="titulo">Contacto</h2>
            <form action="" class="form">
                <input class="input" type="text" name="" id="" placeholder="Nombre">
                <input class="input" type="email" name="" id="" placeholder="Email">
                <textarea class="input" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <input class="input" type="submit" value="Enviar">
            </form>
        </div>
    </footer>
</template>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Raleway', sans-serif;
}

.food {
    background-image: linear-gradient(to top, rgba(255, 241, 235, 0.699) 0%, rgba(172, 225, 249, 0.699) 100%), url("../assets/img/bg.jpg");
    width: 100%;
    height: 650px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;

}


.textos-food {
    height: 500px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.textos-contact {
    height: 100px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.textos-contact a {
    display: inline-block;
    text-decoration: none;
    padding: 12px 15px;
    background: #1b74bd;
    border-radius: 8px;
    color: #fff;
}

.textos-food h1 {
    font-size: 60px;
}

.textos-food p {
    font-size: 25px;
    margin-bottom: 20px;
}

.textos-food a {
    display: inline-block;
    text-decoration: none;
    padding: 12px 15px;
    background: #1b74bd;
    border-radius: 8px;
    color: #fff;
}

.svg-food {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

/* Estilos generales */

.contenedor,
.wave-contenedor {
    width: 90%;
    max-width: 1000px;
    overflow: hidden;
    margin: auto;
    padding: 0 0 80px 0;
}

.contenedor {
    padding: 80px 0;
}

.titulo {
    font-weight: 300;
    font-size: 35px;
    text-align: center;
    margin-bottom: 30px;
}

.titulo.left {
    text-align: left;
}

.titulo.right {
    text-align: right;
}

/* Section */

.website {
    display: flex;
    justify-content: space-between;
}

.website img {
    width: 48%;
}

.website .contenedor-textos-main {
    width: 40%;
}

.parrafo {
    text-align: justify;
    margin-bottom: 20px;
}

.cta {
    display: inline-block;
    text-decoration: none;
    background: #000;
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    padding: 12px 15px;
    border-radius: 8px;
    color: #fff;
}

/* Info */

.info {
    background: #dc644d;
    color: #fff;
}

/* Cards */

.content-cards {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.card {
    width: 30%;
    text-align: center;
    height: 300px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    transform: scale(1);
    transition: transform 0.6s;
}

.card:hover {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
    transform: scale(1.03);
    cursor: pointer;
}

.card i {
    margin: 30px 0 20px 0;
    color: #dc644d;
    font-size: 50px;
}

.card p {
    font-weight: 300;
    font-size: 25px;
    margin-bottom: 10px;
}

/* galeria */

.galeria {
    background: #f2f2f2;
}

.galeria-cont {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: hidden;
}

.galeria-cont>img {
    width: 30%;
    object-fit: cover;
    margin-bottom: 20px;
    display: block;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .5);
    cursor: pointer;
    overflow: hidden;
}


/* info2 */

.last-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 40px;
}

.last-section img {
    width: 48%;
}

.last-section .contenedor-textos-main {
    width: 40%;
}

/* footer */

footer {
    background: #dc644d;
    color: #fff;
}

.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.input {
    background: transparent;
    border: 0;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    padding: 20px 10px;
}

.input::placeholder {
    color: #fff;
    font-family: 'raleway', 'sans-serif';
}

input[type="text"],
input[type="email"] {
    display: inline-block;
    width: 49%;
    margin-bottom: 30px;
}

.form textarea {
    width: 100%;
    margin-bottom: 15px;
}

input[type="submit"] {
    width: 120px;
    text-align: center;
    padding: 14px 0;
}

input[type="submit"]:hover {
    cursor: pointer;
    color: #dc644d;
    background: #fff;
}

@media screen and (max-width:800px) {
    .textos-food h1 {
        text-align: center;
        font-size: 50px;
    }

    /* estilos generales */

    .titulo {
        font-size: 35px;
    }

    .titulo.left {
        text-align: center;
    }

    .info p {
        text-align: center;
    }

    /* section */

    .website {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }

    .website img {
        width: 100%;
    }

    .website .contenedor-textos-main {
        width: 100%;
    }

    /* Cards */

    .card {
        width: 90%;
        margin-bottom: 20px;
    }

    /* galeria */

    .galeria-cont>img {
        width: 48%;
    }

    /* last */

    .last-section img {
        width: 98%;
    }

    .last-section .contenedor-textos-main {
        width: 98%;
        margin-bottom: 20px;
    }
}

@media screen and (max-width:400px) {

    .titulo,
    .textos-food h1 {
        font-size: 30px;
    }

    .textos-food p {
        font-size: 20px;
        text-align: center;
    }

    .card {
        height: 380px;
    }

    .website .contenedor-textos-main {
        margin-bottom: 30px;
    }

    .galeria-cont>img {
        width: 97%;
    }

}
</style>