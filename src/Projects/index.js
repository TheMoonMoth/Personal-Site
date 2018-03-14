import React from "react"
import Proj1 from "./Project1"
import Proj2 from "./Project2"
import Proj3 from "./Project3"
import Proj4 from "./Project4"
import "./style.css"

class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      pwInfo: false,
      swsInfo: false,
      absInfo: false,
      wereInfo: false
    }
  }

  render() {
    return (
      <div id="projects-section">
        <a name="projects"> </a>
        <h2>PROJECTS</h2>
        <Proj1 status={this.state.pwInfo} />
        <Proj2 status={this.state.swsInfo} />
        <Proj3 status={this.state.absInfo} />
        <Proj4 status={this.state.wereInfo} />
      </div>
    )
  }
}

export default Projects
