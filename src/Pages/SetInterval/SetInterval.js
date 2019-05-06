import React from 'react';
import './SetInterval.scss';


class TimeWrapper extends React.Component {
  constructor(props)
  super(props)
  this.state = {timeLeft: null, timer: null}
  this.startTimer = this.startTimer.bind(this)
}

  startTimer(timeleft) {
    clearInterval(this.state.timer)
    let timer =setInterval(() => {
      console.log('2: Inside of setInterval')
      var timeleft = this.state.timeLeft - 1
      if (timeLeft==0) clearInterval(timer)
      this.setState({timeLeft: timeLeft})
    }, 1000)
  }
  render() {
    return (
      <div className ="row-fluid">
        <h2> Timer </h2>
        <div className="btn-group" role="group">
          <Button time ="5" startTimer={this.startTimer}/>
          <Button time ="10" startTimer={this.startTimer}/>
          <Button time ="15" startTimer={this.startTimer}/>
        </div>
        <Timer timeLeft={this.state.timeLeft}/>
        <audio id="end-of-time" src=" .wav" preload="auto"></audio>
      </div>
    )
  }
}


class Timer extends React.component {
  render() {
    if (this.props.timeLeft==0) {
      document.getElementById('end-of-time').play()
    }
    if (this.props.timeLeft==null||this.props.timeLeft==0)
      return <div/>
    return <h1>Time left: {this.props.timeLeft}</h1>
  }
}


class Button extends React.Component {
  startTimer(event) {
    return this.props.startTimer(this.props.time)
  }
  render() {
    return <buttomn type="button" className="btn-default btn"
      onClick={this.startTimer.bind(this)}>
        {this.props.time} seconds
    </button>

  }
}
ReactDOM.render(
  <TimerWrapper/> ,
  document.getElementById('timer-app')
)
