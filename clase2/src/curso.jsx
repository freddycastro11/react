import React from 'react'


const Curso = pros =>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={pros.image} alt={pros.title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">
            {pros.title}
            </h3>
            
            <div claseName="s-main-center">
                <a claseName="button--ghost-alert button--tiny full" href="#">{`$ ${pros.price}`}</a>
            </div>
        </div>
    </article>


)

export default Curso