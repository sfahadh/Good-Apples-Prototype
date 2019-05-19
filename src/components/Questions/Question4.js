import React, { Component } from 'react'
import './Questions.css'

export default class Question4 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nextQuestion: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("submit")
    this.setState({
      nextQuestion: true
    })
  }

  render() {
    return (
      <div className="questions-page">
        <form className="question-form">
          <h3 >How much time are you willing to invest overall?</h3>
          <br/>
          <br/>
          <div className="answer-choices"> 
            <div className="radio">
              <input type="radio" id="radio-1" name="selector"/>
              <label htmlFor="radio-1" id="radio-option-1">less than a month</label>
              <div className="check"></div>
            </div>
          
            <div className="radio">
              <input type="radio" id="radio-2" name="selector"/>
              <label htmlFor="radio-2" id="radio-option-2">less than a year</label>
              <div className="check"></div>
            </div>
            
            <div className="radio">
              <input type="radio" id="radio-3" name="selector"/>
              <label htmlFor="radio-3" id="radio-option-3">more than a year</label>
              <div className="check"></div>
            </div>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

