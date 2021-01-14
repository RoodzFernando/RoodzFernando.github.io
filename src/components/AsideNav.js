import React from 'react'
import { NavLink  } from 'react-router-dom'

function AsideNav() {
    return (
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink>
            <NavLink to="/about" activeClassName="is-active">About Me</NavLink>
            <NavLink to="/projects" activeClassName="is-active">Projects</NavLink>
            <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        </nav>
    )
}

export default AsideNav
