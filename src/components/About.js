import React from 'react'
import Skills from './Skills'
function About() {
    return (
        <div className="container about-page pt-5" id="about">
          <div className="row">
            <div className="col-lg-12 col-lg-offset-2">
              <div className="about-text pb-5" align="center">
                <h1 className="pb-3">About me</h1>
                <p>
                  I am a civil engineer who fell in love with information technology. Since I have been using and relying on the web to solve problems, I developed a deep appreciation for web development, so I decided to learn how to develop websites. I learned several programming languages and other technological tools like data structures and algorithms during my web development journey. I am confident in finding practical solutions to any technical problem I could face.                </p>
                <a href="https://docs.google.com/document/d/1bi5oIUVrwF2YnMmYfacTqf3YUhIJUUxdWr13JlmLZB0/edit?usp=sharing" rel="noreferrer" target="_blank" className="btn btn-primary mt-3">Get My Resume</a>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Skills />
              </div>
            </div>
        </div>
    )
}

export default About
