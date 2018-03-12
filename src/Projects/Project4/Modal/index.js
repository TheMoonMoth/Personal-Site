import React from "react"
import "./style.css"

const WereModal = props => {
  return (
    <div id="wereInfo">
      <div className="screens">
        <img src="./images/were1.png" alt="Weredar main screen" />
        <h4>ABOUT</h4>
        <p>
        Here at WEREdar we are committed to protecting your community from the curse of the lycan. <br/><br/>
        Created as part of an eight hour hack-a-thon, this team project brought APIs, creative programmers, and fantasy together.
        </p>
      </div>
      <p>&nbsp;</p>
      <h5>BUILT WITH:</h5>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Express</li>
        <li>Node.js</li>
      </ul>
      <aside id="links">
        <a target="_blank" rel="noopener noreferrer" href="https://weredar-1.firebaseapp.com/">Weredar.com</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheMoonMoth/Were.com--Frontend">GITHUB</a>
      </aside>
    </div>
  )
}

export default WereModal
