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
        <section className="project-slide">
          <img id="were-logo" style={{width: 60 + "%", paddingBottom: 25 + "px", paddingTop: 30 + "px"}} src="./images/were-logo.png" alt="Weredar logo"/>
          <h3 onClick={(e)=>{this.setState({ isOpened: !this.state.isOpened })}} >
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
