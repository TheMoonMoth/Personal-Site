import React from "react"
import Proj1 from "./Project1"
import Proj2 from "./Project2"
import Proj3 from "./Project3"
import Proj4 from "./Project4"
import SpaceLane from "./SpaceLane"

import "./style.css"

class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      pwInfo: false,
      swsInfo: false,
      absInfo: false,
      wereInfo: false,
      slInfo: false
    }
  }

  render() {
    return (
      <div id="projects-section">
        <a name="projects"> </a> {/* eslint-disable-line */}
        <h2>PROJECTS</h2>
        <section>
          <SpaceLane status={this.state.slInfo} />
          <Proj1 status={this.state.pwInfo} />
          <Proj3 status={this.state.absInfo} />
          <Proj2 status={this.state.swsInfo} />
          <Proj4 status={this.state.wereInfo} />
        </section>
      </div>
    )
  }
}

export default Projects