import React, { Component } from 'react'
import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import HideNav from "./components/Navbar/HideNav"
import ShowNav from "./components/Navbar/ShowNav"
import Quiz from "./components/Quiz/Quiz"

class App extends Component {
  constructor() {
    super()

    this.state = {
      revealNav: false,
      changeShape: false
    }
    this.toggleRevealNav = this.toggleRevealNav.bind(this)
  }

  toggleRevealNav() {
    this.setState((prevState) => {
      return {
        revealNav: !prevState.revealNav,
        changeShape: !prevState.changeShape
      }
    })
  }

  render() {
    const { revealNav, changeShape } = this.state
    let showNav = null
    let hideNav = null
    revealNav ? showNav = <ShowNav /> : hideNav = <HideNav /> 
    const shape = changeShape ? "x" : "hamburger"

    return (
      <div className="App">
        {showNav}
        {hideNav}
        <div className={shape} onClick={this.toggleRevealNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="rest">
          <main>
            <Route exact path="/" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/quiz" component={Quiz}></Route>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
