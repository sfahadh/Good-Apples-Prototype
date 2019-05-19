import React, { Component } from 'react'
import './Questions.css'
import { Redirect } from 'react-router-dom'

export default class Question3 extends Component {
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
    if(this.state.nextQuestion) { return <Redirect to="/quiz/question-4"/> }
    return (
      <div className="questions-page">
        <form className="question-form">
          <h3>How much time can you commit to a program in a week?</h3>
          <h4>(you can select multiple choices)</h4>
          <div className="answer-choices"> 
            <div className="checkbox">
              <input type="checkbox" id="checkbox-9"/>
              <label htmlFor="checkbox-9">
                <span className="label-field">1 - 6 hours</span>
              </label>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox-10"/>
              <label htmlFor="checkbox-10">
                <span className="label-field">7 - 14 hours</span>
              </label>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox-11"/>
              <label htmlFor="checkbox-11">
                <span className="label-field">15 - 40 hours</span>
              </label>
            </div>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

