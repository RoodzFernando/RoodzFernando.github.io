import React from 'react'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'
import imgOne from '../images/img-one.svg'
import imgTwo from '../images/img-two.svg'
import imgThree from '../images/img-three.svg'
import imgFour from '../images/img-four.svg'
import imgFive from '../images/img-five.svg'
import imgSix from '../images/img-six.svg'
import imgSeven from '../images/img-seven.svg'

function App() {
    return (
      <div className="home-container">
      <Navigation />
        <div className="container home-page">
        <div className="dash-one"></div>
        <div className="dash-two"></div>
        <div className="dash-three"></div>
        <div className="dash-four"></div>
        <div className="dash-five"></div>
        <div className="box-one">
          <img src={imgOne} alt=""/>
        </div>

        <div className="box-two">
          <img src={imgTwo} alt=""/>
        </div>

        <div className="box-three">
          <img src={imgThree} alt=""/>
        </div>

        <div className="box-four">
          <img src={imgFour} alt=""/>
        </div>
        <div className="box-five">
          <img src={imgFive} alt=""/>
        </div>

        <div className="box-six">
          <img src={imgSix} alt=""/>
        </div>

        <div className="box-seven">
          <img src={imgSeven} alt=""/>
        </div>
          <div className="intro">
            <h1>Hello, I'm Fernando.</h1>
            <h2>I'm a software developer</h2>
            <p>
              I love building new things, need help to build a product, feature or website?
              Look through some of my work and experience. If you like what you see and have a project you need help on,
              do not hesitate to contact me.
            </p>
  
          </div>
            <SocialLinks />
        </div>
      </div>
    )
}

export default App
