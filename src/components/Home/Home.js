import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className='header'>
          <h1>Good Apples</h1>
        </div>
        <div className='first-image'>
          <button>Find My Course</button>
        </div>
        <div className='second-image'></div>
        <div className='third-image'></div>
      </div>
    )
  }
}
