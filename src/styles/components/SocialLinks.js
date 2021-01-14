import React from 'react'
import linkedin from '../../images/linkedin.svg'
import twitter from '../../images/twitter.svg'
import github from '../../images/github.svg'
import angelList from '../../images/angel-icon.svg'
import { Link } from 'react-router-dom'
import email from '../../images/email.svg'

function SocialLinks() {
  return (
    <>
      <div className="social-links">
                    <a href="https://www.linkedin.com/in/roodz-fernando-fleurant/" rel="noreferrer" target="_blank">
                        <img src={linkedin} alt=""/>
                    </a>
                    <a href="https://twitter.com/RoodzFernando" rel="noreferrer" target="_blank">
                        <img src={twitter} alt=""/>
                    </a>
                    <a href="https://github.com/RoodzFernando" rel="noreferrer" target="_blank">
                        <img src={github} alt=""/>
                    </a>
                    <a href="https://angel.co/u/roodz-fernando-fleurant" rel="noreferrer" target="_blank">
                        <img src={angelList} alt=""/>
                    </a>
                </div>

                <div className="send-message">
                    <h3>Send me a message</h3>
                    <Link to="/contact">
                        <img src={email} alt=""/>
                    </Link>
                </div>
    </>
  )
}

export default SocialLinks
