// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {text: 'Light Mode'}

  changeMode = () => {
    const {text} = this.state

    const cardElement = document.getElementById('bg')
    const headingElement = document.getElementById('heading')
    const buttonElement = document.getElementById('button')

    if (text === 'Light Mode') {
      cardElement.classList.add('light-bg-container')
      headingElement.classList.add('heading-in-light')
      buttonElement.classList.add('button-in-light')
      this.setState(prevState => ({text: 'Dark Mode'}))
    }
    if (text === 'Dark Mode') {
      cardElement.classList.add('dark-bg-container')
      headingElement.classList.add('heading-in-dark')
      buttonElement.classList.add('button-in-dark')
      this.setState(prevState => ({text: 'Light Mode'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="main-container" id="main">
        <div className="dark-bg-container" id="bg">
          <h1 className="heading-in-dark" id="heading">
            Click To Change Mode
          </h1>
          <button
            className="button-in-dark"
            onClick={this.changeMode}
            id="button"
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
