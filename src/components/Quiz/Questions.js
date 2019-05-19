import React, { Component } from 'react'
import './Quiz.css'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <form className="question-form">
            <h3>What is your area of interest?</h3>
            <h4>(you can select multiple choices)</h4>
            <div className="checkboxes">
                <input type="checkbox" name="Business" id="business"/>
                <label for="business">Business</label>
            </div>

            <div className="checkboxes">
                <input type="checkbox" name="Design" id="design"/>
                <label for="design">Design</label>
            </div>

            <div className="checkboxes">
                <input type="checkbox" name="CulinaryArts" id="culinary-arts"/>
                <label for="culinary-arts">Culinary Arts</label>
            </div>

            <div className="checkboxes">
                <input type="checkbox" name="Technology" id="technology"/>
                <label for="technology">Technology</label>
            </div>

            <div className="checkboxes">
                <input type="checkbox" name="VocationalTraining" id="vocational-training"/>
                <label for="vocational-training">Vocational Training</label>
            </div>
        </form>
      </div>
    )
  }
}
