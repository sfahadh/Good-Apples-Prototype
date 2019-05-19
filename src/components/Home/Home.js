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
        <div className='third-image'>
          <h2>What Good Apples does:</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
      </div>
    )
  }
}
