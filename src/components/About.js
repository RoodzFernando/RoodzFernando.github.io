import React from 'react'
import Skills from './Skills'
function About() {
    return (
        <div className="container about-page pt-5">
          <div className="row">
            <div className="col-lg-12 col-lg-offset-2">
              <div className="about-text pb-5" align="center">
                <h1 className="pb-3">About me</h1>
                <p>I am a civil engineer who fell in love with information technology. Since I have been using and relying on the web to solve problems, I develop a deep appreciation for web development. So I decided to learn how to develop websites. During my web development journey, I learned a few programming languages and a few other technological apparatus like data structures and algorithms to improve my thinking. I can say without a doubt that I am more equipped right now to come up with more effective solutions to almost every problem I face in my life.</p>
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
