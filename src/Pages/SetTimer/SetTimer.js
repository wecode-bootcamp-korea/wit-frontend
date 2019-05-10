import React from 'react';
import './SetTimer.scss';
import '../../Style/config.scss'
import Button from '../../Components/Button/Button'


class SetTimer extends React.Component {
  constructor() {
    super();
    this.state  = { //to remember things, component uses state.
      repeat: 1
    };
  }

  handleIncrease = () => {
    this.setState({
      repeat: this.state.repeat + 1
    });
  }

  handleDecrease = () => {
    //console.log(this.state.)
    if (this.state.repeat === 0) {
      console.log("stop");
      this.setState({
        repeat: this.state.repeat

      })
    }
    else {
      this.setState({
        repeat: this.state.repeat - 1
      });
    }

    }



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
   fetch('http://localhost:8000/user', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({

     }) //rePassword === Password해야만  body로 전달하도록 바꿔야함.

     })
     .then(response => response.json())
     .then(response => {
        console.log(response['message'])
        if (response.message === 'email already exists') {
          alert("이미 존재하는 이메일입니다.");
        }
           //alert("회원가입 성공!");
     });
 }

  render() {
    return (
      <div>
        <div className="notopmargwrap">
          <p className="extitle">SETTING</p>
          <div className="boxposition">
            <p className="extitle">PUSH UPS</p>
            <div className="inputboxes">
              <div className="timerbox">
                <label className="title">TIME</label>
                <div className="timeset">02:30</div>
              </div>
              <div className="timerbox">
                <label className="title">BREAK</label>
                <div className="timeset"></div>
              </div>
              <div className="timerbox">
                <label className="title">SET</label>
                <div className="timTimeset">
                  <span className="timbtnmi" onClick={this.handleDecrease}> -  </span>
                    <p>{this.state.repeat}</p>
                  <span className="timbtnpl" onClick={this.handleIncrease}>  + </span>


                </div>
              </div>
            </div>
            <div className="setResult"> TOTAL </div>
            <div className="setResult"> 05:10 </div>
            <div className="setResult"> 200 Kcal </div>

          </div>
          <div id="blanksignup">
            <Button
            text="저장"
            click={this.handleSubmit}/>
          </div>
      </div>



      </div>
    )
  }
}

export default SetTimer;
