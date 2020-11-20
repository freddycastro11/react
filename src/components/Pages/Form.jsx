import React, {Component} from "react"

class Form extends Component {

    constructor(props){
        super(props)
        this.state={
            nombre:"",
            correo:"",
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }
        //this.setState

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    } 
    cambiarFecha(e) {
        this.setState({
            fecha: new Date()
        })
    }
    render(){
        return(
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha Actual: {Math.ceil(this.state.fecha/1000)}</h4>
                <form id="form-element">
                <div className="ed-grid m-grid-2" >
                    
                        <div className="form__item">
                            <label>Nombre completo</label>
                            <input 
                            type="text" 
                            onChange={this.cambiarNombre}  />
                        </div>
                        <div className="form__item">
                            <label>Correo Electronico</label>
                            <input type="email"
                            onChange={this.cambiarCorreo} />
                        </div>
                </div> 
                </form>
                <div>
                    <h2>{`Bienvenido ${this.state.nombre}`}</h2>
                    <span>{`Correo:  ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }
        componentDidMount(){
            let elemento = document.getElementById("form-element")
            console.log(elemento)
            
            this.intervaloFecha = setInterval(() =>{
                this.cambiarFecha()
                console.log(new Date())
            }, 1000)

        }

        componentDidUpdate(prevProps, prevState){
            console.log(prevProps)
            console.log(prevState)
            console.log("-------")
        }

        componentWillUnmount(){
            clearInterval (this.intervaloFecha)
        }


}

export default Form