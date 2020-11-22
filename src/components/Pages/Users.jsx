import React from "react"
import { Component } from "react";
import UsersCard from "../Molecules/UsersCard"

class Users extends Component{

    constructor(props){
        super(props)

        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
        .then(respuesta => console.log(respuesta))
    }

    render(){
        const {users} = this.state
        return(
            <div className="edgrid">
                <h1>Usuarios</h1>
                <div>
                    {
                        users.map(u => (
                            <UsersCard
                                key={u.id}
                                name={u.name}
                                username={u.username}
                                email={u.email}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Users