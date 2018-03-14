import React from "react"
import "./style.css"

const SwsModal = props => {
  return (
    <div id="swsInfo">
      <div className="screens">
        <h4>ABOUT</h4>
        <p>
        This app allows users to read and write six word stories. Each story
        gets processed by the sentiment.js algorithm and then assigned
        emotional value, displayed below the story. Users can then vote on
        stories and maybe find the next Ernest Hemingway!
        </p>
        <img src="./images/sws1.png" alt="Six Word Stories main screen" />
        <img src="./images/sws2.png" alt="Six Word Stories new story screen" />
      </div>
      <p>&nbsp;</p>
      <h5>BUILT WITH:</h5>
      <ul>
        <li>React</li>
        <li>PostgresQL</li>
        <li>Express</li>
        <li>Node.js</li>
      </ul>
      <aside id="links">
        <a target="_blank" rel="noopener noreferrer" href="https://sixwordstories.herokuapp.com/">SixWordStories.com</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/themoonmoth/sixwordstories">GITHUB</a>
      </aside>
    </div>
  )
}

export default SwsModal
