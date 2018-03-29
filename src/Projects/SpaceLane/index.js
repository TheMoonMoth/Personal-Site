import React from "react"
import Collapse from "react-collapse"
import SlModal from "./Modal"
import "./style.css"

class SpaceLane extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      isOpened: this.props.status,
    }
  }

  render(){
    return (
      <div>
        <section className="project-slide" onClick={(e)=>{this.setState({ isOpened: !this.state.isOpened })}}>
          <img id="sl-logo" src="./images/SpaceLane2-lightblue.png" alt="Space Lane logo"/>
          <h3 className={this.state.isOpened ? "hidden" : ""}>
            ▼
          </h3>
          <h3 className={!this.state.isOpened ? "hidden" : ""}>
            ▲
          </h3>
        </section>

        <Collapse isOpened={this.state.isOpened}>
          <SlModal />
        </Collapse>
      </div>
    )
  }
}

export default SpaceLane
