import React from "react"
import "./style.css"

const Contact = props => {
  return (
    <footer>
      <h2>CONTACT</h2>
      <nav>
        <a href="https://github.com/TheMoonMoth">
          <img src="./images/003-github.png" alt="Github link" />
        </a>
        <a href="https://linkedin.com/in/KyleWeintraub">
          <img src="./images/002-linkedin.png" alt="LinkedIn link" />
        </a>
        <a href="https://talent.galvanize.com/students/2071">
          <img src="./images/gSchool-icon.png" alt="Galvanize talent link" />
        </a>
        <a href="mailto:weintraub.kyle@gmail.com">
          <img src="./images/001-mail.png" alt="Email link" />
        </a>
      </nav>
    </footer>
  )
}

export default Contact
