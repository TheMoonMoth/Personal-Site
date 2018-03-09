import React from "react"
import Proj1 from "./Project1"
import Proj2 from "./Project2"
import Proj3 from "./Project3"
import Proj4 from "./Project4"
import "./style.css"

class Projects extends React.Component {
  render() {
    return (
      <div id="projects-section">
        <h2>Projects</h2>
        <Proj1 className="project-slide" id="p-1" />
        <Proj2 className="project-slide" id="p-2" />
        <Proj3 className="project-slide" id="p-3" />
        <Proj4 className="project-slide" id="p-4" />
      </div>
    )
  }
}

export default Projects
