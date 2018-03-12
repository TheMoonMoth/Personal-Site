import React from "react"
import Collapse from "react-collapse"
import PwModal from "./Modal"
import "./style.css"

class Proj1 extends React.Component {
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
          <img id="pw-logo"src="./images/PlanetWagerLogo.png" alt="Planet Wager Logo" />
          <h3 onClick={(e)=>{this.setState({ isOpened: !this.state.isOpened })}} >
            ▼
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

export default Proj1
