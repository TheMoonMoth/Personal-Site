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
    this.infoClick = this.infoClick.bind(this)
  }

  infoClick = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  render() {
    return (
      <div id="projects-section">
        <h2>Projects</h2>
        <Proj1 status={this.state.pwInfo} ic={this.infoClick} />
        <Proj2 status={this.state.swsInfo} ic={this.infoClick} />
        <Proj3 status={this.state.absInfo} ic={this.infoClick} />
        <Proj4 status={this.state.wereInfo} ic={this.infoClick} />
      </div>
    )
  }
}

export default Projects
