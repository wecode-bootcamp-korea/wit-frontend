import React from 'react';
import './StartInterval.scss';
import Selectedcircle from '../../Components/Selectedcircle/Selectedcircle'

const user = [{name: '달리기', action_time: 200, break_time: 10, set: 5},
              {name: '스쿼트', action_time: 180, break_time: 20, set: 3},
              {name: '런지', action_time: 20, break_time: 10, set: 3},
              {name: '자전거', action_time: 60, break_time: 50, set: 5},
              {name: '물구나무', action_time: 10, break_time: 60, set: 3}
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
      currentIdx: 0,
      total_time: getTotal(user),
      act_set_time: user[0].action_time,
      action_time: user[0].action_time,
      total_set: getSetTotal(user),
      actual_set: getActualSet(user)[0],
      current_ex: getExName(user)[0],
      clicked: false,
      status: false
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
      if(this.state.act_set_time===1) {
        this.stop()

        this.setState({ currentIdx: this.state.currentIdx + 1 });

       }
      this.setState({
        act_set_time:this.state.act_set_time - 1
      })
    },10);

    this.totalID = setInterval( () => {
      this.setState({
        total_time:this.state.total_time - 1
      })
    },1000);

    this.actsetID = setInterval( () => {
      if(this.state.action_set_time===1) {
        this.stop()

       }
      this.setState({
        act_set_time:this.state.act_set_time - 1
      })
    },10);
  }

  stop() {
    clearInterval(this.intervalID)
    clearInterval(this.totalID)
    clearInterval(this.actsetID)
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
            <p className="current-ex">
              {user[this.state.currentIdx].name}



            </p>
            <div className="toptimer">
              <p className="time"> {Math.floor(this.state.act_set_time/60)}:</p>
              <p className="time"> {this.state.act_set_time-Math.floor(this.state.act_set_time/60)*60} </p>
            </div>
            <div className="clock-div">
              <div className="countdown-clock">
              </div>
            </div>
            <div className="main-ticking">
              <p className="ticking">
                  {Math.floor(this.state.act_set_time/60)} :
              </p>
              <p className="ticking">
                  {this.state.act_set_time-Math.floor(this.state.act_set_time/60)*60}
              </p>
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
                <p className="totaltime"> {Math.floor(this.state.total_time/60)} :</p>
                <p className="totaltime"> {this.state.total_time-Math.floor(this.state.total_time/60)*60} </p>
                <div className="status-wrapper">
                  {user.map((el) => {
                    return (<Selectedcircle info={el}/>)})}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
 }
export default Interval;
