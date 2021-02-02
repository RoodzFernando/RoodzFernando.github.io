import React from 'react'
import github from '../images/github.svg'
import linkedIn from '../images/linkedin.svg'
import angelList from '../images/angel-icon.svg'
import twitter from '../images/twitter.svg'

function SocialLinks() {
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-lg-12 link-container">
          <div className="links">
            <a href="https://github.com/RoodzFernando" rel="noreferrer" target="_blank">
              <img src= {github} alt="github_social_link"/>
            </a>
          </div>
  
          <div className="links">
            <a href="https://www.linkedin.com/in/roodz-fernando-fleurant/" rel="noreferrer" target="_blank">
              <img src={linkedIn} alt="linked_in_social_link"/>
            </a>
          </div>
  
          <div className="links">
            <a href="https://angel.co/u/roodz-fernando-fleurant" rel="noreferrer" target="_blank">
              <img src={angelList} alt="angel_social_link"/>
            </a>
          </div>
  
          <div className="links">
            <a href="https://twitter.com/RoodzFernando" rel="noreferrer" target="_blank">
              <img src={twitter} alt="twitter_social_link"/>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SocialLinks
