import React from 'react'
import { NavLink  } from 'react-router-dom'

function Navigation() {
  const clickHandle = event => {
    event.preventDefault()
    console.log('clicked')
  }
    return (
        // <nav>
        //     <NavLink to="/" activeclassNameName="is-active" exact={true} >Home</NavLink>
        //     <NavLink to="/about" activeclassNameName="is-active">About Me</NavLink>
        //     <NavLink to="/projects" activeclassNameName="is-active">Projects</NavLink>
        //     <NavLink to="/contact" activeclassNameName="is-active">Contact</NavLink>
        // </nav>
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" onClick={clickHandle}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item ml-5">
              <NavLink to="/projects">Portfolio</NavLink>
            </li>

            <li className="nav-item ml-5">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="nav-item ml-5">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

        </>
    )
}

export default Navigation
