import React, {useEffect} from 'react'
import pageTitle from '../services/tile'

function About() {
      useEffect(() => pageTitle('About Me'))

    return (
        <div className="about-page">
          <div className="about-text">
            <h1>About me</h1>
            <p>I am a civil engineer who fell in love with
             new technologies since I used and relied on 
             it as a tool to bring sustainable solutions.
              My admiration for technology has led me to 
              learn web development where I have learned 
              some programming languages, which helps me 
              think abstractly, to bring concrete solutions.</p>
            <div className="signature">Roodz Fernando</div>
          </div>
        </div>
    )
}

export default About
