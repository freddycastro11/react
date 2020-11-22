import React from "react"

const UsersCard =({name, username, email}) =>(
    <article className="card">
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{name}</h3>
            <p class="s-mb-0">{`Prof. ${username}`}</p>
            <div claseName="s-main-center">
                <a claseName="button--ghost-alert button--tiny" href="htpps://ed.team">{` ${email}`}</a>
            </div>
        </div>
    </article>
)

export default UsersCard