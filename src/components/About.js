import React, {useEffect} from 'react'
import pageTitle from '../services/tile'

function About() {
      useEffect(() => pageTitle('About Me'))

    return (
        <div className="about-page">
          <div className="about-text">
            <h1>About me</h1>
            <p>I am a civil engineer who fell in love with new information technology. Since I have been using and relying on the web to solve problems, I develop a deep appreciation for web development. So I decided to learn how to develop websites. During my web development journey, I learned a few programming languages and a few other technological apparatus like data structures and algorithms to improve my thinking. I can say without a doubt that I am more equipped right now to come up with more effective solutions to almost every problem I face in my life..</p>
            <div className="signature">Roodz Fernando</div>
          </div>
        </div>
    )
}

export default About
