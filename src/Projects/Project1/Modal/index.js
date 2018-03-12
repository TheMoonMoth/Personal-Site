import React from "react"
import "./style.css"

const PwModal = props => {
  return (
    <div id="pwInfo">
      <div className="screens">
        <img src="./images/ss1.png" alt="Planet Wager - screen" />
        <img src="./images/ss2.png" alt="Planet Wager - screen" />
      </div>
      <h4>ABOUT</h4>
      <p>
        Planet Wager offers a platform to make bets with your friends! How many
        Spacebucks can you accumulate? This app was developed with Agile
        workflow values and a small dedicated team.
      </p>
      <p>&nbsp;</p>
      <h5>BUILT WITH:</h5>
      <ul>
        <li>React</li>
        <li>PostgresQL</li>
        <li>Express</li>
        <li>Node.js</li>
      </ul>
    </div>
  )
}

export default PwModal
