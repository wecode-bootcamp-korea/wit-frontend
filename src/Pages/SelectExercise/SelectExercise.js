import React from 'react';
import Selectcircle   from '../../Components/Selectcircle/Selectcircle';
import Selectedcircle   from '../../Components/Selectedcircle/Selectedcircle';
import './SelectExercise.scss';
import SetTimer from '../SetTimer/SetTimer';

const default_list = [{name: '달리기', action_time: 120, break_time: 10, set: 4},
                      {name: '스쿼트', action_time: 180, break_time: 20, set: 7},
                      {name: '런지', action_time: 800, break_time: 10, set: 8},
                      {name: '자전거돌리기', action_time: 60, break_time: 50, set: 5},
                      {name: '물구나무서기', action_time: 40, break_time: 60, set: 3},
                      {name: '사이드런지', action_time: 120, break_time: 10, set: 4},
                      {name: '윗몸일으키기', action_time: 180, break_time: 20, set: 7},
                      {name: '스트레칭', action_time: 800, break_time: 10, set: 8},
                      {name: '앉았다뛰기', action_time: 60, break_time: 50, set: 5},
                      {name: '딥스', action_time: 120, break_time: 10, set: 4},
                      {name: '요가자세', action_time: 180, break_time: 20, set: 7},
                      {name: '알영', action_time: 800, break_time: 10, set: 8}];

const select_list = [{name: '달리기', action_time: 120, break_time: 10, set: 4},
                      {name: '앉았다뛰기', action_time: 180, break_time: 20, set: 7},
                      {name: '스트레칭', action_time: 800, break_time: 10, set: 8},
                      {name: '사이드런지', action_time: 60, break_time: 50, set: 5},
                      {name: '딥스', action_time: 40, break_time: 60, set: 3}];


function getTotal(select_list) {
  let total = 0;
  for (var i=0; i < select_list.length; i++) {
    total += (select_list[i].action_time * select_list[i].set) + select_list[i].break_time;
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
}

  render() {
    return (
      <div>
          <div className="top-bar">
            <p className="unify-text"> Select Exercises </p>
          </div>

          <div className="back-ground">

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
    )
  }
}

export default Choice;
