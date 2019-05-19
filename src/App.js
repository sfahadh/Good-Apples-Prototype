import React, { Component } from 'react'
import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import Quiz from "./components/Quiz/Quiz"
import Question2 from "./components/Questions/Question2"

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="rest">
          <main>
            <Route exact path="/" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route exact path="/quiz" component={Quiz}></Route>
            <Route path="/quiz/question-2" component={Question2}></Route>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
