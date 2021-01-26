import React, {useEffect} from 'react'
import img from '../images/img-background.jpg';
import pageTitle from '../services/tile';

function App() {
    return (
      <div className="container home-page">
        <div className="intro">
          <h1>Hello, I am Roodz Fernando Fleurant</h1>

          <p>
            I am a Full-stack web developer <br/>
            I love building new things, work and make new friends
          </p>

        </div>
          {/* <div className="img-back">
            <img src={img} alt=""/>
          </div> */}
      </div>
    )
}

export default App
