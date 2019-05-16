import React from 'react';
import './StartInterval.scss';
import Selectedcircle from '../../Components/Selectedcircle/Selectedcircle';
import {withRouter} from 'react-router-dom';
import SelectExercise from '../SelectExercise/SelectExercise';



class Interval extends React.Component {
  constructor() {
    super();

    const currentIdx = 0;
    this.ex_list = JSON.parse(sessionStorage.getItem('settings')) || [{}]
    const alarming = require('./coountdown.mp3');
    this.sound = new Audio(alarming);

    this.state = {
      currentIdx: currentIdx,
      clicked: false,
      status: false,
      set_status: this.ex_list[currentIdx].set,
      act_set_time: (Number(this.ex_list[currentIdx].action_min)*60) + Number(this.ex_list[currentIdx].action_sec),
    }
    console.log(this.ex_list)

    // let total_time =0;
    // function getTotalTime(){
    //   for (var i =0; i < this.ex_list.length; i++) {
    //   total_time += (Number(this.ex_list[i].action_min)*60 + Number(this.ex_list[i].action_sec)) * Number(this.ex_list[i].set)
    // }
    // return total_time;
    // }

  }
  getTotalTime() {
    const total_time=0;
    for (var i =0; i < this.ex_list.length; i++) {
    total_time += (Number(this.ex_list[i].action_min)*60 + Number(this.ex_list[i].action_sec)) * Number(this.ex_list[i].set)
  }
  return total_time;
  }

  onPlay() {
    this.sound.play();
  }


  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  start() {
    this.intervalID = setInterval(() => {

      if (this.state.act_set_time===6 ) {
        this.onPlay()
      }

      if (this.state.act_set_time < 1) {
        this.stop()
        this.setState({
          set_status: this.state.set_status - 1,
          act_set_time: (Number(this.ex_list[this.state.currentIdx].action_min)*60) + Number(this.ex_list[this.state.currentIdx].action_sec)
        })

        if (this.state.set_status < 1) {
          this.stop()
          this.setState({
            currentIdx: this.state.currentIdx + 1,
            set_status: this.ex_list[this.state.currentIdx].set,
            act_set_time: (Number(this.ex_list[this.state.currentIdx + 1].action_min)*60) + Number(this.ex_list[this.state.currentIdx + 1].action_sec)
          });

        }
        //setTimeOut(() => {
            this.start();
        //}, this.ex_list[this.state.currentIdx].break_min*1000)
      }
      this.setState({ act_set_time: this.state.act_set_time - 1 });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalID)
  }

  getTimerSound() {
      this.setState({music: !this.state.music})
  }

  handleclick() {
  if (this.state.clicked===false) {
    this.stop();
    this.setState({clicked: true})

  }
  else if (this.state.clicked===true){
    this.start();
    this.setState({clicked: false})
  }
}

  resultPost() {
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3Nn0.5X9F-dZIH9e7znOTQQfhE8cUsGVjPoxrWQk_Ni01edI"

    // let allList = this.ex_list.map(el => {
    //   return ({
    //     activation_time: el.action_min,
    //     break_time: el.break_min,
    //     train_set: el.set,
    //     calorie_consumption: el.set,
    //     train_id: 7,
    //   })
    // })

    fetch('http://13.125.249.35:8080/train', {
      method:'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activation_time: "00:01:18",
        break_time: "00:01:18",
        train_set: 2,
        calorie_consumption: "65566",
        train_id: 7,
      })
    })

    .then(response => response.json())
    .then(response => {

      this.goToResultPage()
  })
}

  goToResultPage() {
    this.props.history.push('/ResultPage')
}




  render() {

    return (
      <div>
        <div className="top-bar">
            <p onClick={this.resultPost.bind(this)} className="button-up"> 완료 </p>
        </div>
        <div className="back-ground">
          <div>
            <p className="current-ex">{this.ex_list[this.state.currentIdx].exname}</p>
            <div className="toptimer">
              <p className="time"> {Math.floor(this.state.act_set_time/60)}: </p>
              <p className="time"> {this.ex_list[this.state.currentIdx].action_sec-Math.floor(this.ex_list[this.state.currentIdx].action_sec/60)*60} </p>
            </div>
            <div className="clock-div">
              <div className="countdown-clock">
              </div>
            </div>
            <div className="main-ticking">
              <p className="ticking">{Math.floor(this.state.act_set_time/60)} :</p>
              <p className="ticking">{this.state.act_set_time-Math.floor(this.state.act_set_time/60)*60}</p>
            </div>
            <div className="button-wrapper">
              <div className={`kingofbutton ${this.state.clicked ? 'active' : ''}`}
                onClick={this.handleclick.bind(this)}>
                <div className="stopbutton">
                </div>
                <div className="stopbutton">
                </div>
              </div>
            </div>
            <div className="total-status-wrapper">
              <div className="total-status">
                <p className="totaltime"> {this.getTotalTime}:</p>
                <p className="totaltime"> {this.state.act_set_time-Math.floor(this.state.act_set_time/60)*60} </p>
                <div className="status-wrapper">
                  <div className={` ${this.state.status ? 'status' : ''}`}>
                  {
                    this.ex_list.map((el, idx) => (
                      <Selectedcircle
                      key={idx}
                      info={el}
                      status={this.state.currentIdx >= idx}
                    />
                    ))
                  }
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
 }
export default withRouter(Interval);
