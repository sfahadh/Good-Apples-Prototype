import React, { Component } from 'react'
import './Questions.css'
import { Redirect } from 'react-router-dom'

export default class Question3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nextQuestion: false,
      revealSubmit: false,
      checked: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRevealSubmit = this.handleRevealSubmit.bind(this);
  }

  handleRevealSubmit() {
    this.setState({
      revealSubmit: true,
      checked: true
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({
      nextQuestion: true
    })
  }

  render() {
    const { nextQuestion, revealSubmit, checked } = this.state
    if(this.state.nextQuestion) { return <Redirect to="/quiz/question-4"/> }
    return (
      <div className="questions-page">
        <form className="question-form">
          <h3>How much time can you commit to a program in a week?</h3>
          <h4>(you can select multiple choices)</h4>
          <div className="answer-choices"> 
            <div className="checkbox">
              <input type="checkbox" id="checkbox-9"/>
              <label htmlFor="checkbox-9" onClick={this.handleRevealSubmit}>
                <span className="label-field">1 - 6 hours</span>
              </label>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox-10"/>
              <label htmlFor="checkbox-10" onClick={this.handleRevealSubmit}>
                <span className="label-field">7 - 14 hours</span>
              </label>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox-11"/>
              <label htmlFor="checkbox-11" onClick={this.handleRevealSubmit}>
                <span className="label-field">15 - 40 hours</span>
              </label>
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

