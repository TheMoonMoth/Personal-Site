import React from "react"
import Headroom from "react-headroom"
import "./style2.css"

const Header = props => {
  return (
    <Headroom>
      <div id="live-header">
        <h2>
          KYLE WEINTRAUB
        </h2>
        <nav id="nav">
          <p><a href="#projects">PROJECTS</a></p>
          <p><a href="#resume">RESUME</a></p>
          <p><a href="#about">ABOUT</a></p>
          <p><a href="#contact">CONTACT</a></p>
        </nav>
      </div>
    </Headroom>
  )
}

export default Header
