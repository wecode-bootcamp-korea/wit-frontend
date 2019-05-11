import React from 'react';
import './StartInterval.scss';


const user = [{name: '달리기', action_time: 200, break_time: 10, set: 4},
              {name: '스쿼트', action_time: 180, break_time: 20, set: 2},
              {name: '런지', action_time: 20, break_time: 10, set: 2},
              {name: '자전거돌리기', action_time: 60, break_time: 50, set: 5},
              {name: '물구나무서기', action_time: 10, break_time: 60, set: 3}
            ]

function getTotal(user) {
  let total = 0;
  for (var i=0; i < user.length; i++) {
    total += (user[i].action_time * user[i].set) + user[i].break_time;
  }
  return total;
}

function getSetTotal(user) {
  let set_total =0;
  for (var i=0; i <user.length; i++) {
    set_total += user[i].set;
  }
  return set_total;
}

function getTimeByEx(user) {
  let temp=[];
  let ex_tot=0;
  for (var i=0; i <user.length; i++) {
    ex_tot += user[i].action_time * user[i].set
    temp.push(ex_tot);
  }
  return temp;
}

function getExName(user) {
  let temp=[];
  for (var i=0; i <user.length; i++) {
    temp.push(user[i].name);
  }
  return temp;
}

function getActualSet(user) {
  let temp=[];
  for (var i=0; i <user.length; i++) {
    temp.push(user[i].set);
  }
  return temp;
}

class Interval extends React.Component {
  constructor() {
    super();
    this.state = {
      total_time: getTotal(user),
      act_set_time: getTimeByEx(user)[0],
      action_time: user[0].action_time,
      total_set: getSetTotal(user),
      actual_set: getActualSet(user)[0],
      current_ex: getExName(user)[0],
      clicked: false
    }
  }

  componentDidMount() {
    this.start();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
    clearInterval(this.totalID)
    clearInterval(this.actsetID)

  }

  start() {
    this.intervalID = setInterval( () => {
      if(this.state.action_time===1) {
        this.stop()
        //1세트 끝나는 즉시 우측 하단 1세트 증가
        this.setState({
          actual_set:this.state.actual_set + 1
        })

       }
      this.setState({
        action_time:this.state.action_time - 1
      })
    },10);

    this.totalID = setInterval( () => {
      this.setState({
        total_time:this.state.total_time - 1
      })
    },1000);

    this.actsetID = setInterval( () => {
      this.setState({
        act_set_time:this.state.act_set_time - 1
      })
    },1000);
  }

  stop() {
    clearInterval(this.intervalID)
    clearInterval(this.totalID)
    clearInterval(this.actsetID)
  }

  render() {

    return (
      <div>
        <div>
          <div className ="globaltab">
            <p id="globalogo"> WE:Interval Train</p>
          </div>

          <div className = "upperbox">
            <div id="status">
              <p id="aboutext"> 운동 진행 </p>
            </div>
            <p className="ticking">
                {this.state.action_time}
            </p>
              <div className={`kingofbutton ${this.state.clicked ? 'active' : ''}`}
                onClick={this.handleclick.bind(this)}>
              <div className="stopbutton">
              </div>
              <div className="stopbutton">
              </div>
            </div>
            <div>
              <p className="totaltime"> {Math.floor(this.state.total_time/60)} :</p>
              <p className="totaltime"> {this.state.total_time-Math.floor(this.state.total_time/60)*60} </p>
              <p className="totalset"> {this.state.actual_set} / {this.state.total_set} </p>
            </div>
              {this.state.action_choice}

            <svg>
              <circle r="200" cx="400" cy="400"></circle>
            </svg>
          </div>
        </div>
        <div className="youtube">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-P01D-1vFJo"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
          </iframe>
        </div>
      </div>

    )
  }
 }
export default Interval;
