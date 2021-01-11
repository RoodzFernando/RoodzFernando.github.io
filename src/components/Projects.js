/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getProjects } from '../services/api'
import sourceCode from '../images/source-code.svg'
import livePreview from '../images/forward.svg'

function Projects({ storeProjects }) {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    // setProjects(getProjects())
    getProjects()
  }, [])
  console.log(storeProjects)
    return (
      <div className="main-content">
      <h3>Recent works</h3>
        <div className="project-page">
              {
                storeProjects.map(project => (
                  <div className="card">
                    <div className="card-inner">
                      <figure className="card-front">
                            <img src={project.image} alt=""/>
                          <div className="tags">
                            {
                              project.tags.map(tag =>(
                                <span>{tag.tag}</span>
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

const mapStateToProps = (state) => {
  return {
    storeProjects: state.projects,
  }
}

export default connect(mapStateToProps)(Projects)
