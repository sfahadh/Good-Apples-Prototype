import React, { Component } from 'react'
import './Quiz.css'

export default class componentName extends Component {
    constructor() {
        super()

        this.state = {
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log("submit")
    }


  render() {
    return (
      <div className="questions-page">
        <form className="question-form">
            <h3>What is your area of interest?</h3>
            <h4>(you can select multiple choices)</h4>
            <div className="answer-choices"> 
                <div className="checkbox">
                    <input type="checkbox" id="checkbox-1"/>
                    <label htmlFor="checkbox-1"><span id="business">Business</span></label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="checkbox-2"/>
                    <label htmlFor="checkbox-2"><span id="design">Design</span></label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="checkbox-3"/>
                    <label htmlFor="checkbox-3"><span id="culinary-arts">Culinary Arts</span></label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="checkbox-4"/>
                    <label htmlFor="checkbox-4"><span id="technology">Technology</span></label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="checkbox-5"/>
                    <label htmlFor="checkbox-5"><span id="vocational-training">Vocational Training</span></label>
                </div> 
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
