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
          <h4></h4>
          <br/>
          <div className="answer-choices"> 
            <div className="radio">
              <input type="radio" id="radio-1" name="selector"/>
                <label for="radio-1">Pizza</label>
              <div class="check"></div>
            </div>
          
            <div className="radio">
              <input type="radio" id="radio-2" name="selector"/>
                <label for="radio-2">Pizza</label>
              <div class="check"></div>
            </div>
            
            <div className="radio">
              <input type="radio" id="radio-3" name="selector"/>
                <label for="radio-3">Pizza</label>
              <div class="check"></div>
            </div>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

