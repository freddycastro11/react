import React from 'react';
import "../styles/styles.scss"
import MainMenu from './Organims/MainMenu'
import Home from './Pages/Home.jsx'
import Form from './Pages/Form'
import CourseGrid from './Organims/CourseGrid';
import Aboutme from './Organims/Aboutme'
import Historial from './Pages/Historial'
import Course from './Pages/Course'
import '../styles/MainMenu.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Users from './Pages/Users';




const App =() => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Aboutme" component={Aboutme}/>
      <Route path="/cursos/:id" component={ Course }/>
      <Route path="/cursos" component={CourseGrid}/>
      <Route path="/Historial" component={Historial}/>
      <Route path="/Historial/:valor" component={Historial}/>
      <Route path="/usuarios" component={Users} />
      <Route path="/form" component={()=> <Form name="Página de inscripción" />}/>
    <Route component={()=> (
      <div className="ed-grid">
        <h1>Error 404</h1>
        <span>Página no encontrada</span>
      </div>
    )}/>
    </Switch>
  </Router>
  
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
