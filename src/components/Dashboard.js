import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProjects, projectDeletion } from '../services/api'


function Dashboard({ storeProjects, message }) {
   useEffect(() => {
    getProjects()
  }, [])
  const projectDelete = id => {
    // eslint-disable-next-line no-restricted-globals
    const confirmation =  confirm("Do you really want to delete this project?")
    if (confirmation === true) {
      projectDeletion(id)
      console.log('yes')
    }else{
      console.log('no')
    }
  }
  console.log(message)
  return (
    <div className="dashboard">
    <div className="flash-message">
      <span>{message}</span>
    </div>
      <h1>Dashboard</h1>
      <Link to='/new-project'>New Project</Link>
      {
          storeProjects.map(project => (
        <div className="project-card">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <button>Edit</button>
            <button onClick={() => projectDelete(project.id)}>Delete</button>
        </div>
          ))
      }
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
