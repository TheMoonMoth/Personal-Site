import React from "react"
import Headroom from "react-headroom"
import "./style2.css"

const Header = props => {
  return (
    <Headroom
      onPin={() => console.log("pinned")}
      onUnpin={() => console.log("unpinned")}
    >
    <div id="live-header">
      <h2>
        KYLE WEINTRAUB
      </h2>
      <h3>FULL STACK DEVELOPER</h3>
      <nav id="nav">
        <p><a  target="_blank" href="https://GITHUB.com/themoonmoth">PROJECTS</a></p>
        <p><a  target="_blank" href="https://twitter.com/moonm0th">RESUME</a></p>
        <p><a  target="_blank" href="https://linkedin.com/in/kyleweintraub">ABOUT</a></p>
        <p><a  target="_blank" href="https://twitter.com/moonm0th">CONTACT</a></p>
      </nav>
    </div>
    </Headroom>
  )
}

export default Header
