import React from 'react';
import './StartInterval.scss';

const list = [{name: '달리기', action_time: 60, break_time: 10, set: 4},
              {name: '스쿼트', action_time: 180, break_time: 20, set: 2},
              {name: '런지', action_time: 20, break_time: 10, set: 2},
              {name: '자전거돌리기', action_time: 60, break_time: 50, set: 5},
              {name: '물구나무서기', action_time: 10, break_time: 60, set: 3},
              {name: '팔굽혀펴기', action_time: 40, break_time: 10, set: 2},
              {name: '사이드런지', action_time: 15, break_time: 20, set: 5},
              {name: '스트레칭', action_time: 30, break_time: 24, set: 4},
              {name: '넵넵넵', action_time: 45, break_time: 23, set: 3},
            ]

class Interval extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
      action_time: 320,
      set: 3,
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
            <p className="current-ex"> SQUAT </p>
            <p className="time"> 6:00 </p>
            <div className="clock">
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
              <p className="totaltime"> 42:00</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
 }
export default Interval;
