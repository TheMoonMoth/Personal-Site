import React from "react"
import Collapse from "react-collapse"
import AbsModal from "./Modal"
import "./style.css"

class Proj3 extends React.Component {
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
          <img id="abs-logo" src="./images/abs-logo.png" alt="Absense logo"/>
          <h3>
            ▼
          </h3>
        </section>

        <Collapse isOpened={this.state.isOpened}>
          <AbsModal />
        </Collapse>
      </div>
    )
  }
}

export default Proj3
