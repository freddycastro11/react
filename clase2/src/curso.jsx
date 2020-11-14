import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Curso = ({id, title, image, price, profesor}) =>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">
            {title}
            </h3>
            <p class="s-mb-0">{`Prof. ${profesor}`}</p>
            <div claseName="s-main-center">
                <a claseName="button--ghost-alert button--tiny" href="htpps://ed.team">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
)
Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No hay información",
    image: "https://c4.wallpaperflare.com/wallpaper/138/784/33/black-and-white-monochrome-photo-photography-wallpaper-preview.jpg",
    price: "",
    profesor: ""
}
export default Curso