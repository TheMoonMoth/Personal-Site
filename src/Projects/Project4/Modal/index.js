import React from "react"
import "./style.css"

const WereModal = props => {
  return (
    <div id="wereInfo">
      <div className="screens">
        <img src="./images/were1.png" alt="Weredar main screen" />
        <h4>ABOUT</h4>
        <p>
          AbSense was made to simplify the absence reporting process.
          Rather than having parents call your school and hoping that the voice
          message makes its way to the right paper copy file,
          AbSense digitally archives all submitted reports and make them easily
          accessible to administrators and families.
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
        <a target="_blank" rel="noopener noreferrer" href="https://absense-671c0.firebaseapp.com/">AbSense.com</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheMoonMoth/AbSense">GITHUB</a>
      </aside>
    </div>
  )
}

export default WereModal
