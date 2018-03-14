import React from "react"
import Collapse from "react-collapse"
import WereModal from "./Modal"
import "./style.css"

class Proj4 extends React.Component {
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
          <img id="were-logo" src="./images/were-logo.png" alt="Weredar logo"/>
          <h3>
            ▼
          </h3>
        </section>

        <Collapse isOpened={this.state.isOpened}>
          <WereModal />
        </Collapse>
      </div>
    )
  }
}

export default Proj4
