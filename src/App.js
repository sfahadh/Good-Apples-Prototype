import React, { Component } from 'react'
import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import Quiz from "./components/Quiz/Quiz"

class App extends Component {

  render() {

    return (
      <div className="App">
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
