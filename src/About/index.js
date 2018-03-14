import React from "react"
import "./style.css"

const About = props => {
  return (
    <div id="about-page">
      <section >
        <h3>I AM A WEB DEVELOPER</h3>
        <ul>
          <li>I build wild new apps.</li>
          <li>New ideas keep me going.</li>
          <li>I love JavaScript and React. </li>
          <li>And I aspire to work with the newest, coolest tech.</li>
          <li>Teamwork <em>does</em> make the dream work.</li>
        </ul>

        <h3>I AM A LEARNER</h3>
        <ul>
          <li>Every day presents opportunities to learn and grow.</li>
          <li>The greastest accomplishment is solving complex problems.</li>
        </ul>

        <h3>I AM READY TO WORK WITH YOU</h3>
        <ul>
          <li>Take a look at my <a href="#projects">projects</a>.</li>
          <li>Read my <a href="#resume">resume.</a></li>
          <li>Then <a href="#contact">contact me</a> and we&#0039;ll get started.</li>
        </ul>
      </section>
    </div>
  )
}

export default About
