import React from 'react';
import "./styles/styles.scss"
import Curso from './curso'

const App =() => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://images5.alphacoders.com/105/1053762.jpg"/>
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Cursos en React</p>
              <p> Mi primera pagina en React</p>
              <a href="#" class="button">Botón</a>
            </div>
    </div>
        </div>
      </div>


    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />

    </div>
  </>
  
)

export default App;

//Reglas
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN solo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment o <> </div>
// 5: IMG siempre se cierra </>
// 6: claseName=" pasa a ser clasname
// 7: For =>  htmlFor
