import React, { useEffect, useState } from 'react'
import { getProjects } from '../services/api'
import sourceCode from '../images/source-code.svg'
import livePreview from '../images/forward.svg'
import { Link } from 'react-router-dom'
import pageTitle from '../services/tile'

function Projects() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    getProjects(setProjects)
    pageTitle('Projects')
  }, [])
  const token = localStorage.getItem('token')
    return (
      <div className="main-content">
      <div className="project-head">
        <h3>Recent works</h3> { token && <Link to='/dashboard'>DashBoard</Link>}
      </div>
        <div className="project-page">
              {
                projects.map(project => (
                  <div key={project.id} className="card">
                    <div className="card-inner">
                      <figure className="card-front">
                            <img src={project.image} alt=""/>
                          <div className="tags">
                            {
                              project.tags.map(tag =>(
                                <span key={tag.id}>{tag.tag}</span>
                              ))
                            }
                          </div>
                      </figure>

                      <figure className="card-back">
                        <div className="project-card-info">
                          <h2>{ project.title }</h2>
                          <div className="project-description">
                            <p>{ project.description }</p>
                          </div>
                        </div>

                        <div className="project-links">
                            <a className="source-btn link-btn" href={ project.source_code } rel="noreferrer" target="_blank">
                              <img src={sourceCode} alt=""/>
                            </a>

                            <a className="preview-btn link-btn" href={ project.live_version } rel="noreferrer" target="_blank">
                              <img src={livePreview} alt=""/>
                            </a> 
                        </div>
                      </figure>
                    </div>
                  </div>
                ))
              }
      </div>
      </div>
    )
}

export default Projects
