import React, { Component } from 'react'
import './Questions.css'

export default class Question4 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      revealSubmit: false,
      // checked: false
    }
    this.handleRevealSubmit = this.handleRevealSubmit.bind(this);
  }

  handleRevealSubmit() {
    this.setState({
      revealSubmit: true,
      // checked: true
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
  }

  render() {
    const { revealSubmit, checked } = this.state
    return (
      <div className="questions-page">
        <form className="question-form">
          <h3 >How much time are you willing to invest overall?</h3>
          <br/>
          <br/>
          <div className="answer-choices"> 
            <div className="radio">
              <input type="radio" id="radio-1" name="selector"/>
              <label htmlFor="radio-1" id="radio-option-1" onClick={this.handleRevealSubmit}>less than a month</label>
              <div className="check"></div>
            </div>
          
            <div className="radio">
              <input type="radio" id="radio-2" name="selector"/>
              <label htmlFor="radio-2" id="radio-option-2" onClick={this.handleRevealSubmit}>less than a year</label>
              <div className="check"></div>
            </div>
            
            <div className="radio">
              <input type="radio" id="radio-3" name="selector"/>
              <label htmlFor="radio-3" id="radio-option-3" onClick={this.handleRevealSubmit}>more than a year</label>
              <div className="check"></div>
            </div>
          </div>
          {
            !!revealSubmit ? <button onClick={this.handleSubmit}>Submit</button> : null
          }
        </form>
      </div>
    )
  }
}

