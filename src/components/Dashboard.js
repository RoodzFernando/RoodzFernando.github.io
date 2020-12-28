import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProjects, projectDeletion } from '../services/api'


function Dashboard({ storeProjects, message, history }) {
   useEffect(() => {
    getProjects()
  }, [])
  const projectDelete = id => {
    // eslint-disable-next-line no-restricted-globals
    const confirmation =  confirm("Do you really want to delete this project?")
    if (confirmation) {
      projectDeletion(id)
    }
  }
  return (
    <div className="dashboard">
    <div className="flash-message">
      <span>{message}</span>
    </div>
      <h1>Dashboard</h1>
      <Link to='/new-project' className="add-btn">New Project</Link>
      <div className="page-content">
        {
            storeProjects.map(project => (
          <div key={project.id} className="project-card" style={{
            'height': '250px',
            'backgroundImage': `url(${project.image})`,
            'objectFit': 'cover'
          }}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link to={`/update/${project.id}`}>Edit</Link>
              <button onClick={() => projectDelete(project.id)}>Delete</button>
          </div>
            ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    storeProjects: state.projects,
    message: state.msg
  }
}

export default connect(mapStateToProps)(Dashboard)
