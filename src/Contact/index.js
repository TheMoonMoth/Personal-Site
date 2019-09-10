import React from "react"
import Footer from "../Footer"
import "./style.css"

const Contact = props => {
  return (
    <footer>
      <a name="contact" id="resume-link"> {/* eslint-disable-line */}
        {" "}
      </a>
      <h2>CONTACT</h2>
      <nav>
        <a href="https://github.com/TheMoonMoth">
          <img src="./images/github.png" alt="Github link" />
        </a>
        <a href="https://linkedin.com/in/KyleWeintraub">
          <img src="./images/linkedin.png" alt="LinkedIn link" />
        </a>
        <a href="https://talent.galvanize.com/students/2071">
          <img src="./images/gSchool-icon.png" alt="Galvanize talent link" />
        </a>
        <a href="mailto:weintraub.kyle@gmail.com">
          <img src="./images/email.png" alt="Email link" />
        </a>
      </nav>
      <Footer />
    </footer>
  )
}

export default Contact
