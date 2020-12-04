import React from 'react'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import github from '../images/github.svg'
import angelList from '../images/angel-icon.svg'
// import email from '../images/email.svg'

function AsidePage() {
    return (
        <div>
            <div>
                <h3>Let's connect</h3>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/roodz-fernando-fleurant/">
                        <img src={linkedin} alt=""/>
                    </a>
                    <a href="https://twitter.com/RoodzFernando">
                        <img src={twitter} alt=""/>
                    </a>
                    <a href="https://github.com/RoodzFernando">
                        <img src={github} alt=""/>
                    </a>
                    <a href="https://angel.co/u/roodz-fernando-fleurant">
                        <img src={angelList} alt=""/>
                    </a>
                </div>

                <div className="send-message">
                    <h3>Send me a message</h3>
                </div>
            </div>
            <footer>
                <p>Copyright &copy; 2020 Roodz Fernando</p>
            </footer>
        </div>
    )
}

export default AsidePage
