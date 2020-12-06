import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { requestProjects } from '../redux/redux'
import { getProjects } from '../services/api'

function App({dispatch}) {
  useEffect(() => {
    getProjects()
  }, [])
    return (
      <div>
        <h1>List of Projects</h1>
        {/* { 
          projects.projects.map(project => (
            <div className="project-card">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <p>{project.live_version}</p>
              <p>{project.source_code}</p>
            </div>
          ))
        } */}
      </div>
    )
}

export default App
