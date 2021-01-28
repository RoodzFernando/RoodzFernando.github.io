import React, { useEffect, useState } from 'react'
import { fetchproject, getProjects } from '../services/api'
import sourceCode from '../images/source-code.svg'
import livePreview from '../images/forward.svg'
import { Link } from 'react-router-dom'
import Showproject from './Showproject'

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
  // console.log(project)
    return (
      <>
      <div className="container main-content">
          <div className="row">
            <div className="col-lg-12 project-title">
              <h3 align="center">My Recent Works</h3>
            </div>
          </div>
        <div className="row">
          {
            projects.map(project => (
              <>
              <div className="col-lg-4 project-card">
                {/* <div className="row"> */}
                  <div className="row">
                    <div className="col-lg-12 project-img">
                      <img src={project.image} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 proj-title">
                      <h2>{ project.title }</h2>
                    </div>
                  </div>
                    <div className="tags-container">
                  {
                      project.tags.map(tag => (
                        <span>{tag.tag}</span>
                      ))
                  }
                    </div>
                  <div className="row">
                    <div className="col-lg-6 offset-lg-3 project-btn">
                      <button className="btn btn-primary"
                        onClick={() => {
                        handleClick(project.id, setProject)
                        const projectDetail = document.getElementsByClassName('project-detail')[0]
                        projectDetail.style = 'block'
                        const elem = document.getElementsByTagName('body')[0];
                        // eslint-disable-next-line no-restricted-globals
                        const totalHeight = elem.scrollHeight - innerHeight
                        // eslint-disable-next-line no-restricted-globals
                        projectDetail.style.top = ( ( pageYOffset / totalHeight ) * 371) + '%'
                        // projectDetail.style.top = ( ( totalHeight / pageYOffset ) * 30) + '%'
                        // projectDetail.focus() 
                        }} >See Project</button>
                    </div>
                  </div>
                {/* </div> */}
              </div>
              </>
            ))
          }
        </div>
        </div>
        {/* single project */}
        <div className="show-project">
          <Showproject project={ project } />
        </div>
    </>
    )
}

export default Projects
