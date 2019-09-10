import React from "react"
import "./style.css"

class Resume extends React.Component {
  render() {
    return (
      <div id="resume-box">
        <a name="resume" id="resume-link"> {/* eslint-disable-line */}
          {" "}
        </a>
        <h2>RESUME</h2>
        <aside>
          <a href="./images/resume.jpg" target="_blank" ><img src="./images/resume.jpg" alt="resume" /></a> 
          <div>
            <ul>
              <li>
                <h3>THE GOOD PARTS</h3>
              </li>
              <li>- Galvanize Graduate</li>
              <li>- Multidisciplined</li>
              <li>- Experience With Instructional Design</li>
              <li>- Project and Team Focused</li>
            </ul>
            <a href="https://drive.google.com/uc?export=download&id=165AbmEuJKg3loobHy0TE7EpSVCCRn97D">
            DOWNLOAD NOW
            </a>
            </div>
        </aside>
      </div>
    )
  }
}

export default Resume
