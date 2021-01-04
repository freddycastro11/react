import Axios from "axios"
import {useState, useEffect} from "react"
import axios from "axios"

const useCourse = id =>{

    const [course, setCourse] = useState({})


        useEffect(() => {
            axios.get(`http://my-json-server.typicode.com/freddycastro11/json-db/cursos/${id}`)
                .then(resp => setCourse(resp.data))
        }, [])

    return course
}

export default useCourse