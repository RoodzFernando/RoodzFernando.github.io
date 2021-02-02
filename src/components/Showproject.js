import React from 'react'
import close from '../images/close.svg'

function Showproject({project}) {
  const handletoggle = () => {
    const hideElement = document.getElementsByClassName('project-detail')[0]
    hideElement.style.display = 'none'
  }
  return (
    <>
      <div className="container project-detail">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-lg-12 close-btn">
                  <img onClick={handletoggle} src={close} alt="close_button"/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 detail-img">
                  <img src={project.image} alt={project.id}/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 detail-title">
                {project && 
                  <h2>{project.title}</h2>
                  }
                  { project.tags &&
                    project.tags.split(',').map(tag => (
                      <span>{tag}</span>
                    ))
                  }
                </div>
                <div className="col-lg-4 btn-links" align="center">
                  <a className="btn btn-primary" rel="noreferrer" target="_blank" href={project.live_version}>See live</a>
                  <a className="btn btn-primary" rel="noreferrer" target="_blank" href={project.source_code}>See Source</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 detail-description">
                {
                  project &&
                  <p>{ project.description }</p>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Showproject
