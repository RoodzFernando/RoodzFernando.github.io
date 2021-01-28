import React, { useState } from 'react'

function Navigation() {
  const [visibility, setVisibility] = useState(false)
  const clickHandle = event => {
    const expandElements = document.getElementById('navbarSupportedContent')
    expandElements.style.display = visibility ? 'block' : 'none'
    setVisibility(!visibility)
  }
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-light" style={{'backgroundColor': 'white'}}>
      <div className="container-fluid">
          <h1 className="nav-brand">Welcome</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" onClick={clickHandle}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item ml-5">
              <a href="#projects">Portfolio</a>
            </li>

            <li className="nav-item ml-5">
              <a href="#about">About</a>
            </li>

            <li className="nav-item ml-5">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

        </>
    )
}

export default Navigation
