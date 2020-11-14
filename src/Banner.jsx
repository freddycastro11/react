import React from "react"

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" alt="banner" src="https://images5.alphacoders.com/105/1053762.jpg" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Cursos en React</p>
                    <p> Mi primera pagina en React</p>
                    <a href="#" class="button">Botón</a>
                </div>
            </div>
        </div>
    </div>
)


export default Banner