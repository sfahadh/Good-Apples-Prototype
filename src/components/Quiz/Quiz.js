import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

export default class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: 90
        }
    }

  render() {
    const { percentage } = this.state
    return (
      <div>
        <h1>This is the Quiz page</h1>
        <ProgressBar percentage={percentage}/>
      </div>
    )
  }
}
