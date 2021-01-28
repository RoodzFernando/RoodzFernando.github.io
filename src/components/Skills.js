import React from 'react'
import languages from '../images/languages.svg';
import frameworks from '../images/frameworks.svg';
import skills from '../images/skills.svg';

function Skills() {
  return (
    <div className="container skills-tab">
      {/* column 1 */}
        <div className=" skills-card">

            <div className="skills-img">
              <img src={languages} alt=""/>
            </div>

            <div className="skills-name">
              <h3>Languages</h3>
            </div>

          <div className="tags">
              <span className="lang-tag">JavaScript</span>
              <span className="lang-tag">Ruby</span>
              <span className="lang-tag">HTML</span>
              <span className="lang-tag">CSS</span>
          </div>
        </div>
        {/* column 2 */}
        <div className="skills-card">

            <div className="skills-img">
              <img src={frameworks} alt=""/>
            </div>

            <div className="skills-name">
              <h3>Frameworks</h3>
            </div>

          <div className="tags">
              <span className="lang-tag">Rails</span>
              <span className="lang-tag">React</span>
              <span className="lang-tag">RSpec</span>
              <span className="lang-tag">Capybara</span>
          </div>
        </div>
        {/* column 3 */}
        <div className="skills-card">
            <div className="skills-img">
              <img src={skills} alt=""/>
            </div>

            <div className="skills-name">
              <h3>Skills</h3>
            </div>

          <div className="tags">
              <span className="lang-tag">GitHub</span>
              <span className="lang-tag">Terminal</span>
              <span className="lang-tag">Database</span>
          </div>
        </div>
    </div>
  )
}

export default Skills
