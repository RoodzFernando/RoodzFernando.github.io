/* eslint-disable no-restricted-globals */
import React, { useState } from 'react'
import Showproject from './Showproject'

import bookingApp from '../images/projects_img/booking_app.png'
import clashOfCars from '../images/projects_img/clash_of_cars.png'
import neewsWeek from '../images/projects_img/newsweek_clone.PNG'
import portfolio from '../images/projects_img/portfolio.PNG'
import recipeBook from '../images/projects_img/recipe_book.PNG'
import weatherApp from '../images/projects_img/weather_app.png'

function Projects({projects}) {
  const [project, setProject] = useState([])
  const images = {
    booking: bookingApp,
    clashcars: clashOfCars,
    neews : neewsWeek,
    portfolio : portfolio,
    recipe : recipeBook,
    weather : weatherApp,
  } 
  const handleClick = (id, setProject) => {
    const element = projects.filter(project => project.id === id)
    setProject(element)
  }
  // console.log(project)
    return (
      <>
      <div className="container main-content" id="projects">
          <div className="row">
            <div className="col-lg-12 project-title">
              <h3 align="center">My Recent Work</h3>
            </div>
          </div>
        <div className="projects-wrapper">
          {
            projects.map(project => (
              <div key={project.id}>
              <div  className="project-card">
                    <div className="project-img">
                      <img key={project.id} src={images[project.image]} alt="" />
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
          <Showproject project={ project } images= {images} />
        </div>
    </>
    )
}

export default Projects
