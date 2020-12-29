import React from "react"
import withLoader from "../HOC/withLoader"
import UsersCard from "../Molecules/UsersCard"


const UsersGrid = ({users}) =>(
    <div className="edgrid">
        <h1 className="center">Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
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




export default withLoader("users")(UsersGrid)