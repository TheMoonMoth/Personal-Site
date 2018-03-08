import React from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import "./App.css"
import Header from "./Header"
import Banner from "./UnderConstruction"
import Footer from "./Footer"

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
          <Banner />
        </div>
      </Router>
    )
  }
}

export default App
