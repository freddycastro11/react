import React from "react"

const UsersCard = ({ name, username, email}) =>(
    <article className="card">
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{name}</h3>
            <p className="s-mb-0 s-main-center">{`Prof ${username}`}</p>
            <div className="s-main-center">
                <a className="button--ghost-dark button--tiny" href="htpps://ed.team">{` ${email}`}</a>
            </div>
        </div>
    </article>
)

export default UsersCard