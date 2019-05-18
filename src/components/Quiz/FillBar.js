import React from 'react'
import './Quiz.css'

function FillerBar(props) {
    return (
        <div className="fill-bar" style={{ width: `${props.percentage}%`}}></div>
    )
}

export default FillerBar