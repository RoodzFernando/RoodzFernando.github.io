/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'
import Projects from './Projects'
import Patterns from './Patterns'


function App() {
  const projectsJson = require('../services/projects.json') 
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setProjects(projectsJson)
  }, [])
    return (
      <>
      <div className="home-container">
      <Navigation />
        <div className="container home-page">
          <Patterns />
          <div className="intro">
            <h1>Hello, I'm Fernando.</h1>
            <h2>I'm a software developer</h2>
            <p>
              I love building new things. Do you need help to create a product, feature, or website? Look through some of my work and experience. If you like what you see and have a project you need help on, do not hesitate to contact me.            </p>
          </div>
            <SocialLinks />
        </div>
      </div>
        <Projects projects={projects} />
      </>
    )
}

export default App
