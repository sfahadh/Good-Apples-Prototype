import React from 'react'
import FillBar from './FillBar'
import './ProgressBar.css'
import Question1 from '../Questions/Question1'

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
                <Question1 percentage={this.state.percentage}/>
                <Question2 percentage={this.state.percentage}/>
                <Question3 percentage={this.state.percentage}/>
                <Question4 percentage={this.state.percentage}/>
            </div>
        )
    }
}

export default ProgressBar