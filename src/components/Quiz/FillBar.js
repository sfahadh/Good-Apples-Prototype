import React from 'react'
import './ProgressBar.css'

function FillerBar(props) {
    return (
        <div className="fill-bar" style={{ width: `${props.percentage}%`}}></div>
    )
}

export default FillerBar