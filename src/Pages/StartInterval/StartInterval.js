import React from 'react';
import './StartInterval.scss';
import Selectedcircle from '../../Components/Selectedcircle/Selectedcircle';
import {withRouter} from 'react-router-dom';
import SelectExercise from '../SelectExercise/SelectExercise';
import Progressbar from '../../Components/Progressbar/Progressbar';

class Interval extends React.Component {

  state = {
    set: 0,
    time: 60
  }

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

    this.real_total = [];
    let total_time =0;
    for (var i=0; i <this.ex_list.length; i++){
      total_time += (Number(this.ex_list[i].action_min)*60 + Number(this.ex_list[i].action_sec)) * Number(this.ex_list[i].set)
      this.real_total.push(total_time)
    }
    this.total_min = Math.floor(this.real_total[this.real_total.length-1]/60)
    this.total_sec = this.real_total[this.real_total.length-1] - this.total_min;



    this.resultPost = this.resultPost.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }


  // getTotalTime() {
  //   let total_time=0;
  //   for (var i =0; i < this.ex_list.length; i++) {
  //   total_time += (Number(this.ex_list[i].action_min)*60 + Number(this.ex_list[i].action_sec)) * Number(this.ex_list[i].set)
  // }
  // return total_time;
  // }

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

      //6초 남았을 때 카운트다운 노래 시작
      if (this.state.act_set_time === 6 ) {
        this.onPlay()
      }

      //0초 도달하면 ==> 세트가 끝났다는 의미
      if (this.state.act_set_time < 1) {
        this.stop()
        this.setState({
          set_status: this.state.set_status - 1,
          act_set_time: (Number(this.ex_list[this.state.currentIdx].action_min)*60) + Number(this.ex_list[this.state.currentIdx].action_sec)
        })

        //세트가 0이 되어서 해당 운동이 끝났다.

        if (this.state.set_status < 1 ) {
          this.stop()
          console.log(this.ex_list, this.state.currentIdx+1)

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
    const {
      act_set_time,
      clicked,
      status,
      currentIdx
    } = this.state;

    //const act_set_time = this.state.act_set_time;
    //const clicked = this.state.clicked;
    let currentEx = this.ex_list[currentIdx];
    let total_min_by_ex = Math.floor(this.real_total[currentIdx]/60);
    let total_sec_by_ex = this.real_total[currentIdx]-total_min_by_ex*60;

    return (
      <div>
        <div className="top-bar">
            <p onClick={this.resultPost} className="button-up"> 완료 </p>
        </div>
        <div className="back-ground">
          <div>
            <p className="current-ex">{currentEx.exname}</p>
            <div className="toptimer">
              <p className="time"> Set.{currentEx.set} Time.  </p>
              <p className="time"> {Math.floor(this.real_total[currentIdx]/60)}:{total_sec_by_ex.toString()} </p>
            </div>
            <div className="clock-div">
              <div className="countdown-clock">
                <Progressbar
                  total_time={(Number(currentEx.action_min)*60) + Number(currentEx.action_sec)}
                  status_change={this.state.set_status}
                  stop={this.state.status}
                />
              </div>
            </div>
            <div className="main-ticking">
              <p className="ticking">0{Math.floor(act_set_time/60)}:</p>
              <p className="ticking">{act_set_time-Math.floor(act_set_time/60)*60}</p>
            </div>
            <div className="button-wrapper">
              <div className={`kingofbutton ${clicked ? 'active' : ''}`}
                onClick={this.handleclick}>
                <div className="stopbutton">
                </div>
                <div className="stopbutton">
                </div>
              </div>
            </div>
            <div className="total-status-wrapper">
              <div className="total-status">
                <p className="totaltime"> {this.total_min}분:{this.total_sec.toString().slice(0,2)}초 </p>

                <div className="status-wrapper">
                  <div className={` ${status ? 'status' : ''} `}>
                  {
                    this.ex_list.map((el, idx) => (
                      <Selectedcircle
                      key={idx}
                      info={el}
                      status={currentIdx >= idx}
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
