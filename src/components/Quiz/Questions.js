import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <form className="question-form">
            <h1>What is your area of interest?</h1>
            <div>
            <input type="radio" name="Design" id="answer-choice-1"/>
            <label for="answer-choice-1">Design</label>
            </div>

            <div>
            <input type="radio" name="Tech" id="answer-choice-2"/>
            <label for="answer-choice-2">Tech</label>
            </div>

            <div>
            <input type="radio" name="Vocational" id="answer-choice-3"/>
            <label for="answer-choice-3">Vocational</label>
            </div>

            <div>
            <input type="radio" name="Business" id="answer-choice-4"/>
            <label for="answer-choice-4">Business</label>
            </div>
        </form>
      </div>
    )
  }
}
