import React, { Component } from 'react'
import ProgressBar from './ProgressBar'
import Questions from '../Questions/Question1'

export default class Quiz extends Component {
    constructor(props) {
      super(props)

      this.state = {
        percentage: 0
      }
    }

  render() {
    const { percentage } = this.state
    return (
      <div className='quiz-page'>
        <ProgressBar percentage={percentage}/>
        <Questions percentage={percentage}/>
      </div>
    )
  }
}
