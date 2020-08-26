import React from 'react'

const Curso = () =>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg" alt="poster del curso" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://pbs.twimg.com/profile_images/1267321682991222785/uvef2j4s_400x400.jpg" alt="tio" />
                        </div>
                    </div>
                    <span claseName="small">Freddy Castro</span>
                </div>
            </div>
            <div claseName="s-main-center">
                <a claseName="button--ghost-alert button--tiny" href="#">$ 20USD</a>
            </div>
        </div>
    </article>


)

export default Curso