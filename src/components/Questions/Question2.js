import React, { Component } from 'react'
import './Questions.css'
import { Redirect } from 'react-router-dom'

export default class Question2 extends Component {
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
        if(nextQuestion) { return <Redirect to="/quiz/question-3"/> }
        return (
        <div className="questions-page">
            <form className="question-form">
                <h3>What is your price range?</h3>
                <h4>(you can select multiple choices)</h4>
                <div className="answer-choices"> 
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-6"/>
                        <label htmlFor="checkbox-6" onClick={this.handleRevealSubmit}>
                            <span className="label-field">$0 - $999</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-7"/>
                        <label htmlFor="checkbox-7" onClick={this.handleRevealSubmit}>
                            <span className="label-field">$1000 - $10k</span>
                        </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="checkbox-8"/>
                        <label htmlFor="checkbox-8" onClick={this.handleRevealSubmit}>
                            <span className="label-field">$10k+</span>
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

