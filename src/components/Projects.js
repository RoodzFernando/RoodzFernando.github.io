import React, { useEffect, useState } from 'react'
import { fetchproject, getProjects } from '../services/api'
import sourceCode from '../images/source-code.svg'
import livePreview from '../images/forward.svg'
import { Link } from 'react-router-dom'

function Projects() {
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState({})
  useEffect(() => {
    getProjects(setProjects)
  }, [])
  const handleClick = (id, setProject) => {
    // event.preventDefault()
    fetchproject(id, setProject)
  }
  // const token = localStorage.getItem('token')
  console.log(project)
    return (
      <>
      <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>My Recent Works</h3>
            </div>
          </div>
        <div className="row">
          {
            projects.map(project => (
              <>
              <div className="col-lg-4" style={{'border': '1px solid blue'}}>
                <img src={project.image} alt="" style={{'width': '100%', 'height': '60%'}} />
                <h2>{ project.title }</h2>
                {
                  project.tags.map(tag => (
                    <span>{tag.tag}</span>
                  ))
                }
                <button onClick={() => {
                  handleClick(project.id, setProject)
                  const projectDetail = document.getElementsByClassName('project-detail')[0]
                  projectDetail.style = 'block'
                  }} >See Project</button>
              </div>
              </>
            ))
          }
        </div>
        </div>
        <div className="container project-detail" style={{'display': 'none'}}>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3">
                  <button onClick={ () => {
                    const hideElement = document.getElementsByClassName('project-detail')[0]
                    hideElement.style.display = 'none'
                  } } >X</button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <img src={project.image} alt=""/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <h2>
                    {project.title}
                  </h2>
                  { project.tags &&
                    project.tags.split(',').map(tag => (
                      <span>{tag}</span>
                    ))
                  }
                </div>
                <div className="col-lg-4">
                  <a href={project.live_version}>See live</a>
                  <a href={project.source_code}>See Source</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <p>{ project.description }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
    )
}

export default Projects
