/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import { fetchproject, getProjects } from '../services/api'
import Showproject from './Showproject'

function Projects() {
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState({})
  useEffect(() => {
    getProjects(setProjects)
  }, [])
  const handleClick = (id, setProject) => {
    fetchproject(id, setProject)
  }
    return (
      <>
      <div className="container main-content" id="projects">
          <div className="row">
            <div className="col-lg-12 project-title">
              <h3 align="center">My Recent Works</h3>
            </div>
          </div>
        <div className="projects-wrapper">
          {
            projects.map(project => (
              <div>
              <div className="project-card">
                    <div className="project-img">
                      <img src={project.image} alt="" />
                    </div>
                    <div className=" proj-title">
                      <h2>{ project.title }</h2>
                    </div>
                    <div className="tags-container">
                  {
                      project.tags.map(tag => (
                        <span>{tag.tag}</span>
                      ))
                  }
                    </div>
                    <div className="project-btn">
                      <button className="btn btn-primary"
                        onClick={() => {
                        handleClick(project.id, setProject)
                        const projectDetail = document.getElementsByClassName('project-detail')[0]
                        projectDetail.style = 'block'
                        const elem = document.getElementsByTagName('body')[0];
                        const totalHeight = elem.scrollHeight - innerHeight
                        projectDetail.style.top = ( ( pageYOffset / totalHeight ) * 371) + '%'
                        }} >See Project</button>
                    </div>
              </div>
              </div>
            ))
          }
        </div>
        </div>
        <div className="show-project">
          <Showproject project={ project } />
        </div>
    </>
    )
}

export default Projects
