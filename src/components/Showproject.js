import React from 'react'

function Showproject({project, images}) {
  const handletoggle = () => {
    const hideElement = document.getElementsByClassName('project-detail-one')[0]
    hideElement.style.display = 'none'
  }
  return (
    <div className="project-detail-one">
      <div className="container project-detail">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-lg-12 close-btn">
                  <span className="x-button" onClick={handletoggle}>&times;</span>
                </div>
              </div>

                { project &&
                  project.map(info => (
                    <>
                    <div key={info.image} className="col-lg-12 detail-img">
                      <img key={'image'} src={images[info.image]} alt={`project_${info.id}`}/>
                    </div>
                    <div key={info.id} className="row">
                      <div key={'column'} className="col-lg-8 detail-title">
                        <h2 key={info.title}>{info.title}</h2>
                        {
                          info.tags.map(tag => (
                            <span key={tag.id}>{tag.tag}</span>
                          ))
                        }
                      </div>

                      <div key={`col-${info.id}`} className="col-lg-4 btn-links" align="center">
                        <a key={`${info.id}_project`} className="btn btn-primary" 
                            rel="noreferrer" target="_blank" href={info.live_version}>See live</a>
                        <a key={`${info.id + 2}_project`} className="btn btn-primary" 
                            rel="noreferrer" target="_blank" href={info.source_code}>See Source</a>
                      </div>
                    </div>
                    <div key={'row'} className="row">
                      <div key={`description_${info.id}`} className="col-lg-12 detail-description">
                          <p key={info.description}>{ info.description }</p>
                      </div>
                    </div>
                    </>
                  ))
                }
              </div>
          </div>
        </div>
    </div>
  )
}

export default Showproject
