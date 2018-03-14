import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Header from "./Header"
// import Banner from "./UnderConstruction"
import Projects from "./Projects"
import Resume from "./Resume"
import About from "./About"
import Contact from "./Contact"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <Router>
        <div className="App">
        <a name="about" id="resume-link"> </a>
          <Header />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </Router>
    )
  }
}

export default App
