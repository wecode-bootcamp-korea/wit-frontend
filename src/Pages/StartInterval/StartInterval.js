import React from 'react';
import './StartInterval.scss';

const user = [{name: '달리기', action_time: 310, break_time: 10, set: 4},
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


class Interval extends React.Component {
  constructor() {
    super();
    this.state = {
      total_time: getTotal(user),
      act_set_time: getTimeByEx(user)[0],
      action_time: user[0].action_time,
      total_set: getSetTotal(user),
      current_ex: getExName(user)[0],
      clicked: false
    }
  }

componentDidMount() {
  this.start()

  }
componentWillUnmount() {
  clearInterval(this.intervalID)

}

start() {
  this.intervalID = setInterval( () => {
    if(this.state.action_time===1) {
      this.stop()
     }
    this.setState({
      action_time:this.state.action_time-1
    })
  },10);
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

  render() {

    return (
      <div>
        <div className="top-bar">
            <p className="button-up"> DONE </p>
        </div>
        <div className="back-ground">
          <div>
            <p className="current-ex"> {this.state.current_ex} </p>
            <div className="toptimer">
              <p className="time"> {Math.floor(this.state.act_set_time/60)}:</p>
              <p className="time"> {this.state.act_set_time-Math.floor(this.state.act_set_time/60)*60} </p>
            </div>
            <div id="countdown">

              <div className="clock">
                <svg>
                  <circle r="18" cx="31" cy="31"></circle>
                </svg>
              </div>
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
              <p className="totalset"> / {this.state.total_set}</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
 }
export default Interval;
