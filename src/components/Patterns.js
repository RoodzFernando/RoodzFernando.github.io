import React from 'react'
import imgOne from '../images/img-one.svg'
import imgTwo from '../images/img-two.svg'
import imgThree from '../images/img-three.svg'
import imgFour from '../images/img-four.svg'
import imgFive from '../images/img-five.svg'
import imgSix from '../images/img-six.svg'
import imgSeven from '../images/img-seven.svg'

function Patterns() {
  return (
    <>
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
    </>
  )
}

export default Patterns
