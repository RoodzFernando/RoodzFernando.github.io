import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { store } from '../redux/redux';
import { getProjects } from '../services/api'



function Projects({ storeProjects, linkProjects }) {
  console.log(store.getState());
  console.log(linkProjects);
  useEffect(() => {
    getProjects()
  }, [])
    return (
        <div>
        <h1>List of Projects</h1>
        <div className="project-card">
          <div className="card-head">
          {
            linkProjects.map(link => (
              <img src={link} alt=""/>
            ))
          }

          </div>
        { 
          storeProjects.map(project => (
              <div className="card-tail">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <p>{project.live_version}</p>
                <p>{project.source_code}</p>
              </div>
          ))
        }
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    storeProjects: state.projects,
    linkProjects: state.links
  }
}

export default connect(mapStateToProps)(Projects)
