import React from "react"
import Collapse from "react-collapse"
import PwModal from "./Modal"
import "./style.css"

class Proj2 extends React.Component {
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
          <img id="sws-logo" src="./images/sws-logo.png" alt="Six Word Stories logo"/>
          <h3 className={this.state.isOpened ? "hidden" : ""}>
            ▼
          </h3>
          <h3 className={!this.state.isOpened ? "hidden" : ""}>
            ▲
          </h3>
        </section>

        <Collapse isOpened={this.state.isOpened}>
          <PwModal />
        </Collapse>
      </div>
    )
  }







  //   )
  // }
}

export default Proj2
