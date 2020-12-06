import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProjects } from '../services/api'

function App({ storeProjects }) {
  useEffect(() => {
    getProjects()
  }, [])
    return (
      <div>
        <h1>List of Projects</h1>
        { 
          storeProjects.map(project => (
            <div className="project-card">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <p>{project.live_version}</p>
              <p>{project.source_code}</p>
            </div>
          ))
        }
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    storeProjects: state.projects
  }
}

export default connect(mapStateToProps)(App)
