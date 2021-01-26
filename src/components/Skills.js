import React from 'react'
import languages from '../images/languages.svg';
import frameworks from '../images/frameworks.svg';
import skills from '../images/skills.svg';

function Skills() {
  return (
    <div className="container">
      <div className="row">
      {/* column 1 */}
        <div className="col-lg-4">
          <div className="row">
            <img src={languages} alt=""/>
          </div>
          <div className="row">
            <h3>Languages</h3>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <span className="lang-tag">JavaScript</span>
            </div>
            <div className="col-lg-3">
              <span className="lang-tag">Ruby</span>
            </div>
            <div className="col-lg-3">
              <span className="lang-tag">HTML</span>
            </div>
            <div className="col-lg-3">
              <span className="lang-tag">CSS</span>
            </div>
          </div>
        </div>
        {/* column 2 */}
        <div className="col-lg-4">
          <div className="row">
            <img src={frameworks} alt=""/>
          </div>
          <div className="row">
            <h3>Frameworks</h3>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <span className="lang-tag">Rails</span>
            </div>
            <div className="col-lg-3">
              <span className="lang-tag">React</span>
            </div>
            <div className="col-lg-3">
              <span className="lang-tag">RSpec</span>
            </div>
            <div className="col-lg-3">
              <span className="lang-tag">Capybara</span>
            </div>
          </div>
        </div>
        {/* column 3 */}
        <div className="col-lg-4">
          <div className="row">
            <img src={skills} alt=""/>
          </div>
          <div className="row">
            <h3>Skills</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <span className="lang-tag">GitHub</span>
            </div>
            <div className="col-lg-4">
              <span className="lang-tag">Terminal</span>
            </div>
            <div className="col-lg-4">
              <span className="lang-tag">Database</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
