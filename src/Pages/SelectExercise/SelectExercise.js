import React from 'react';
import Selectcircle   from '../../Components/Selectcircle/Selectcircle';
import Selectedcircle   from '../../Components/Selectedcircle/Selectedcircle';
import './SelectExercise.scss';
import SetTimer from '../SetTimer/SetTimer';

const default_list = [{name: '달리기', action_min: 1, action_sec:43, break_min: 1, break_sec: 10, set: 4},
                      {name: '스쿼트', action_min: 1, action_sec:42, break_min: 1, break_sec: 10, set: 4},
                      {name: '런지', action_min: 1, action_sec:0, break_min: 1, break_sec: 10, set: 4},
                      {name: '자전거돌리기', action_min: 1, action_sec:12, break_min: 1, break_sec: 10, set: 4},
                      {name: '사이드런지', action_min: 1, action_sec:43, break_min: 1, break_sec: 10, set: 4},
                      {name: '앉았다뛰기', action_min: 1, action_sec:0, break_min: 1, break_sec: 10, set: 4},
                      {name: '딥스', action_min: 1, action_sec:0, break_min: 1, break_sec: 10, set: 4},
                      {name: '스트레칭', action_min: 1, action_sec:0, break_min: 1, break_sec: 10, set: 4},
                      {name: '알영', action_min: 1, action_sec:0, break_min: 1, break_sec: 10, set: 4},
                      {name: '물구나무서기', action_min: 1, action_sec:0, break_min: 1, break_sec: 10, set: 4}];

const select_list = [{name: '달리기', action_min: 1, action_sec:43, break_min: 1, break_sec: 10, set: 4},
                    {name: '앉았다뛰기', action_min: 1, action_sec:0, break_min: 1, break_sec: 10, set: 4},
                    {name: '스트레칭', action_min: 1, action_sec:0, break_min: 1, break_sec: 10, set: 4},
                    {name: '사이드런지', action_min: 1, action_sec:43, break_min: 1, break_sec: 10, set: 4},
                    {name: '딥스', action_min: 1, action_sec:0, break_min: 1, break_sec: 10, set: 4}];


function getTotal(select_list) {
  let total = 0;
  for (var i=0; i < select_list.length; i++) {
    total += (select_list[i].action_min * select_list[i].set) + select_list[i].break_min;
  }
  return total;
}

function getExTotal(select_list) {
  return select_list.length;
}

class Choice extends React.Component {

  constructor() {
  super();

  this.state = {
    clicked: false,
    total_time: getTotal(select_list),
    total_set: getExTotal(select_list)
  }

  this.comparing();
}

  comparing() {
    for (var i=0; i <select_list.length; i++) {
      for (var j=0; j <default_list.length; j++){
        if (select_list[i].name == default_list[j].name) {
          this.setState({clicked: !this.state.clicked})
        }
    }
  }

  //return <p>dddd</p>
}

  render() {
    return (
      <div>
          <div className="top-bar">
            <p className="unify-text"> Select Exercises </p>
          </div>

          <div className="back-ground">
            <div className={`selected-button ${this.state.clicked ? 'active' : ''}`}>
              {default_list.map((el) => {
                return (
                    <Selectcircle
                      info={el}
                    />
                )})}
        </div>

        <div className="result-tab">
          <div>
            {select_list.map((el) => {
              return (<Selectedcircle info={el}/>)})}
          <button className="startbutton">
            <p className="startbutton-text">START</p>
          </button>
          <div>
            <p className= "selected_text">Action. {this.state.total_set} </p>
            <p className= "selected_text">TIME. {this.state.total_time} </p>
            <p className= "selected_text">Kcal. {this.state.total_time} </p>
          </div>
          <div>

            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Choice;
