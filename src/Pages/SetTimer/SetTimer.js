import React from 'react';
import './SetTimer.scss';
import '../../Style/config.scss'
import Button from '../../Components/Button/Button'
import { withRouter } from 'react-router-dom';

class SetTimer extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      repeat: 1,
      action_min: props.location.state.action_min,
      action_sec: props.location.state.action_sec,
      break_min: props.location.state.break_min,
      break_sec: props.location.state.break_sec,
      set: props.location.state.set,
      exname: props.location.state.name

    };


    console.log(props)
  }

  handleIncrease = () => {
    this.setState({
      set: this.state.set + 1
    });
  }

  handleDecrease = () => {

    if (this.state.set === 0) {
      console.log("stop");
      this.setState({
        set: this.state.set

      })
    }
    else {
      const { set } = this.state;
      this.setState({
        set: set - 1
      });
    }
    }
  handleChange = (e) => {

    this.setState({
      [e.target.name]: parseInt(e.target.value)
    });
    console.log(e.target.name, typeof e.target.value)
  }

  goToSelectExercise = () => {
    let list = JSON.parse(sessionStorage.getItem('settings'));
    if (list === null) {
      list = [];
      sessionStorage.setItem('settings', JSON.stringify(list));
      this.props.history.push('/SelectExercise');
    } else if (list != null) {
      list.push({

      exname: this.props.location.state.name,
      action_min: this.state.action_min,
      action_sec: this.state.action_sec,
      break_min: this.state.break_min,
      break_sec: this.state.break_sec,
      set: this.state.set
    });

    sessionStorage.setItem('settings', JSON.stringify(list));
    this.props.history.push('/SelectExercise');
    }
  }
  render() {
    // console.log(this.state.sec)
    const minlist=[];
    for (var i=0; i<31; i++) {minlist.push(i*1);}
    const minselect = minlist.map(
      (five, index) => (<option key={index} value={five}>{five}</option>)
    );

    const seclist=[];
    for (var i=0; i<12; i++) {seclist.push(i*5);}
    const secselect = seclist.map(
      (five, index) => (<option key={index} value={five}>{five}</option>)
    );

      var totalSec = this.state.set*(this.state.action_min*60+this.state.action_sec+this.state.break_min*60+this.state.break_sec);
      var min_result = Math.floor(totalSec / 60)
      var sec_result = totalSec % 60

    return (
      <div>
        <div className="notopmargwrap">
          <p className="extitle">SETTING</p>
          <div className="boxposition">
            <p className="extitle">{this.state.exname}</p>
            <div className="inputboxes">
              <form className="timerbox">
                <label className="title">TIME</label>
                 <div className="timeset">{this.state.action_min}:{this.state.action_sec}</div>
                <select
                name="action_min"
                value={this.state.action_min}
                onChange={this.handleChange.bind(this)}
                className="timeUsermin"
                >
                {minselect}
                </select>
                <select
                name="action_sec"
                value={this.state.action_sec}
                className="timeUsersec"
                onChange={this.handleChange.bind(this)}>
                  {secselect}
                </select>
              </form>
              <div className="timerbox">
                <label className="title">BREAK</label>
                <div className="timeset">{this.state.break_min}:{this.state.break_sec}</div>
                <select
                name="break_min"
                value={this.break_min}
                onChange={this.handleChange.bind(this)}
                className="timeUsermin"
                >
                {minselect}
                </select>
                <select
                name="break_sec"
                value={this.state.break_sec}
                className="timeUsersec"
                onChange={this.handleChange.bind(this)}>
                  {secselect}
                </select>
              </div>
              <div className="timerbox">
                <label className="title">SET</label>
                <div className="timTimeset">
                    <div className="setNum">
                    <button className="timbtnmi" onClick={this.handleDecrease}>-</button>
                    {this.state.set}
                    <button className="timbtnpl" onClick={this.handleIncrease}>+</button>
                    </div>

                </div>
              </div>
            </div>
            <div className="setResult"> TOTAL </div>
            <div className="setResult"> {min_result}분 {sec_result}초</div>
            <div className="setResult"> 200 Kcal </div>

          </div>
          <div id="blanksignup">
            <Button
            text="다음"
            click={this.goToSelectExercise}
            />
          </div>
      </div>
      </div>

    )

}
}
export default withRouter(SetTimer);
