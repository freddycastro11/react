import React from "react"

const cursos = [
    {
        "id": 1,
        "titulo": "React desde Cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "price": "40",
        "profesor": "Freddy Castro"
    },
    {
        "id": 2,
        "titulo": "Fundamentos de AWS",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/608331fa-c0c6-4f7c-9ad7-470903923179.jpg",
        "price": "40",
        "profesor": "Freddy Castro"
    },
    {
        "id": 3,
        "titulo": "Linux desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/5ffc4c77-cbc3-476d-9c18-e180882a52c9.jpg",
        "price": "40",
        "profesor": "Freddy Castro"
    },
    {
        "id": 4,
        "titulo": "Unity desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/35d81cae-b9b2-4fbd-9329-8bd20e09ef9f.png",
        "price": "80",
        "profesor": "Freddy Castro"
    },
]
const Course = ({match })=>{

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

        return (
        <div className="ed-grid m-grid-3">
            {
                cursoActual ? (
                    <>
                    <h1 className="m-cols-3">{cursoActual.titulo} </h1>
                    <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.titulo} />
                    <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
                    </>
            
                ): 
                <h1>El curso no existe</h1>
            }
            </div>
        )
}

export default Course