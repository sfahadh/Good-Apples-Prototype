import React, { Component } from 'react'
import './Quiz.css'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <form className="question-form">
            <h3>What is your area of interest?</h3>
            <h4>(you can select multiple choices)</h4>
            <div class="answer-choices"> 
                <div class="checkbox">
                    <input type="checkbox" id="checkbox-1"/>
                    <label for="checkbox-1"><span id="business">Business</span></label>
                </div>

                <div class="checkbox">
                    <input type="checkbox" id="checkbox-2"/>
                    <label for="checkbox-2"><span id="design">Design</span></label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="checkbox-3"/>
                    <label for="checkbox-3"><span id="culinary-arts">Culinary Arts</span></label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="checkbox-4"/>
                    <label for="checkbox-4"><span id="technology">Technology</span></label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="checkbox-5"/>
                    <label for="checkbox-5"><span id="vocational-training">Vocational Training</span></label>
                </div> 
            </div>
        </form>
      </div>
    )
  }
}
