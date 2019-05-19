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
          <h3>How much time are you willing to invest overall?</h3>
          <h4>(you can select multiple choices)</h4>
          <div className="answer-choices"> 
            <div className="checkbox">
              <input type="checkbox" id="checkbox-12"/>
              <label htmlFor="checkbox-12">
                <span className="label-field">less than a month</span>
              </label>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox-13"/>
              <label htmlFor="checkbox-13">
                <span className="label-field">less than a year</span>
              </label>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox-14"/>
              <label htmlFor="checkbox-14">
                <span className="label-field">more than a year</span>
              </label>
            </div>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

