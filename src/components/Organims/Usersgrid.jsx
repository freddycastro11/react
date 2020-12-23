import React from "react"
import UsersCard from "../Molecules/UsersCard"


const UsersGrid = ({users}) =>(
    <div className="edgrid">
        <h1 className="center">Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            {
                users.length === 0 ? <h1 className="t3">Cargando...
                        </h1>
                    : users.map(u => (
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




export default UsersGrid