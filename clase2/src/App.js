import React from 'react';
import "./styles/styles.scss"
import Banner from './Banner'
import Formulario from './Formulario'
import CourseGrid from './CourseGrid';





const App =() => (
  <>
    <Banner />
    <Formulario name="Bienvenida"/>
    <CourseGrid/>
  

    
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
