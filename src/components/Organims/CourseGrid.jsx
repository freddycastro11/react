import React from 'react'
import CourseCard from '../Molecules/CourseCard'

const courses = [
    {
        "id":   1,
        "titulo":"React desde Cero",
        "image":"https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "price":"40",
        "profesor":"Freddy Castro"
    },
    {
        "id": 2,
        "titulo": "Fundamentos de AWS",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/608331fa-c0c6-4f7c-9ad7-470903923179.jpg",
        "price": "20",
        "profesor": "Freddy Castro"
    },
    {
        "id":   3,
        "titulo":"Linux desde cero",
        "image":"https://edteam-media.s3.amazonaws.com/courses/big/5ffc4c77-cbc3-476d-9c18-e180882a52c9.jpg",
        "price":"10",
        "profesor":"Freddy Castro"
    },
    {
        "id": 4,
        "titulo": "Unity desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/35d81cae-b9b2-4fbd-9329-8bd20e09ef9f.png",
        "price": "80",
        "profesor": "Freddy Castro"
    },
]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {courses.map(c => (
            <CourseCard
        key={c.id} 
        id={c.id}
        title={c.titulo}
        image={c.image}
        price={c.price}
        profesor={c.profesor}
        />
        ))}
    </div>
)

export default CourseGrid