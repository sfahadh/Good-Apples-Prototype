import React, { Component } from 'react'
import FillBar from './FillBar'
import './ProgressBar.css'
// import Question1 from '../Questions/Question1'
// import Question2 from '../Questions/Question2'
// import Question3 from '../Questions/Question3'
// import Question4 from '../Questions/Question4'

export default class ProgressBar extends Component {
    constructor() {
        super()

        this.state = {
            percentage: 20
        }
    }
    
    render() {
        return (
            <div className="progress-bar">
                <FillBar percentage={this.state.percentage}/>
                {/* <Question1 percentage={this.state.percentage}/> */}
                {/* <Question2 percentage={this.state.percentage}/> */}
                {/* <Question3 percentage={this.state.percentage}/> */}
                {/* <Question4 percentage={this.state.percentage}/> */}
            </div>
        )
    }
}
