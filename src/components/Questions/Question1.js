import React, { Component } from 'react'
import './Questions.css'
// import { Redirect } from "react-router-dom"
import ProgressBar from '../ProgressBar/ProgressBar'

export default class Question1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // fillbar: props.percentage,
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
        // if(this.state.nextQuestion) { return <Redirect to="/quiz/question-2"/> }
        return (
        <div className="questions-page">
            {/* <ProgressBar percentage={this.state.fillbar}/> */}
            <form className="question-form">
                <h3>What is your area of interest?</h3>
                <h4>(you can select multiple choices)</h4>
                <div className="answer-choices"> 
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-1"/>
                        <label htmlFor="checkbox-1">
                            <span className="label-field">Business</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-2"/>
                        <label htmlFor="checkbox-2">
                            <span className="label-field">Design</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-3"/>
                        <label htmlFor="checkbox-3">
                            <span className="label-field">Culinary Arts</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-4"/>
                        <label htmlFor="checkbox-4">
                            <span className="label-field">Technology</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-5"/>
                        <label htmlFor="checkbox-5">
                            <span className="label-field">Vocational Training</span>
                        </label>
                    </div> 
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        )
    }
}
