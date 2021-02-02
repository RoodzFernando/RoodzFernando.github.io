/* eslint-disable no-restricted-globals */
import React, { useState } from 'react'
import { fetchproject } from '../services/api'
import Showproject from './Showproject'

function Projects({projects}) {
  const [project, setProject] = useState({})
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
              <div key={project.id}>
              <div  className="project-card">
                    <div className="project-img">
                      <img key={project.id} src={project.image} alt="" />
                    </div>
                    <div className=" proj-title">
                      <h2 key={project.id}>{ project.title }</h2>
                    </div>
                    <div key={project.id} className="tags-container">
                  {
                      project.tags.map(tag => (
                        <span key={tag.id}>{tag.tag}</span>
                      ))
                  }
                    </div>
                    <div className="project-btn">
                      <button className="btn btn-primary"
                        onClick={() => {
                        handleClick(project.id, setProject)
                        const projectDetail = document.getElementsByClassName('project-detail')[0]
                        projectDetail.style.display = 'block'
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
