import React from 'react'
import FillBar from './FillBar'
import './Quiz.css'

const ProgressBar = (props) => {

    return (
        <div className="progress-bar">
            <FillBar percentage={props.percentage}/>
        </div>
    )
}

export default ProgressBar