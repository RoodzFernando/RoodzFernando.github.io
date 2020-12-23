import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProjects } from '../services/api'
import sourceCode from '../images/source-code.svg'
import livePreview from '../images/forward.svg'

function Projects({ storeProjects }) {
  useEffect(() => {
    getProjects()
  }, [])
  
  console.log(storeProjects);
    return (
        <div className="project-page">
              {
                storeProjects.map(project => (
                  <div className="card">
                    <div className="card-inner">
                      <figure className="card-front" >
                            <img src={project.image} alt=""/>
                      </figure>
  
                      <figure className="card-back">
                        <h2>{ project.title }</h2>
                        <p>{ project.description }</p>
  
                        <div className="project-links">
                          <a href={ project.source_code }>
                            <img src={sourceCode} alt=""/>
                          </a>
  
                          <a href={ project.live_version }>
                            <img src={livePreview} alt=""/>
                          </a>  
                        </div>
                      </figure>
                    </div>
                  </div>
                ))
              }
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    storeProjects: state.projects,
  }
}

export default connect(mapStateToProps)(Projects)
