import React from "react"
import "./style.css"

const Proj1 = (props) => {
  return (
    <section className="project-slide">
      <img id="pw-logo"src="./images/PlanetWagerLogo.png" alt="Planet Wager Logo" />
      <h3 onClick={console.log(this.props)}>▼</h3>
    </section>
  )
}

export default Proj1
