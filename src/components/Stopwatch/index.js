// Write your code here

import {Component} from 'react'

import './index.css'

const initialState = {
  inSecods: 0,
  isTimer: false,
}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  resetBtn = () => {
    clearInterval(this.intervalId)
    this.setState({isTimer: false, inSecods: 0})
  }

  stopBtn = () => {
    clearInterval(this.intervalId)
    this.setState({isTimer: false})
  }

  setTimer = () => {
    this.setState(prevState => ({
      inSecods: prevState.inSecods + 1,
    }))
  }

  startBtn = () => {
    this.intervalId = setInterval(this.setTimer, 1000)
    this.setState({isTimer: true})
  }

  renderMinutes = () => {
    const {inSecods} = this.state
    const minutes = Math.floor(inSecods / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {inSecods} = this.state
    const seconds = Math.floor(inSecods % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimer} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="time">{time}</h1>
          <div className="bg-button">
            <button
              type="button"
              className="button button1"
              onClick={this.startBtn}
              disabled={isTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button button2"
              onClick={this.stopBtn}
            >
              Stop
            </button>
            <button
              type="button"
              className="button button3"
              onClick={this.resetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
