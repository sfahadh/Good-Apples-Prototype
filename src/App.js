import React, { Component } from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Question1 from './components/Questions/Question1'
import Question2 from "./components/Questions/Question2"
import Question3 from "./components/Questions/Question3"
// import Question4 from "./components/Questions/Question4"

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="rest">
          <main>
            <Route exact path="/" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/quiz/question-1" component={Question1}></Route>
            <Route path="/quiz/question-2" component={Question2}></Route>
            <Route path="/quiz/question-3" component={Question3}></Route>
            {/* <Route path="/quiz/question-4" component={Question4}></Route> */}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
