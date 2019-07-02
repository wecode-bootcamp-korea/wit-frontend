import React from 'react';
import Selectcircle   from '../../Components/Selectcircle/Selectcircle';
import Selectedcircle   from '../../Components/Selectedcircle/Selectedcircle';
import './SelectExercise.scss';
import {withRouter} from 'react-router-dom';

class Choice extends React.Component {

  constructor() {
  super();

  this.state = {
    clicked: false,
    default_data: [],
    chosen_list: [],
  }
}

componentDidMount() {
  console.log('componentDidMount')

    fetch('http://127.0.0.1:8000/train/all')
    .then(response => response.json())
    .then(response => {
      console.log('sss',response)
      let dict = response;
      let ex_dict=[]
      for (var i=0; i <dict.length; i++) {
        ex_dict.push(dict[i].fields)

      }
      this.setState(
        {
          default_data: ex_dict
        }, () => console.log("this.state.default_data:", this.state.default_data)
      )
    }
    )
    console.log(JSON.parse(sessionStorage.getItem('settings')))
     this.setState({
       chosen_list: JSON.parse(sessionStorage.getItem('settings')) || []
     }, () => this.getTotalTime())
     this.getTotalKcal();
}

  getTotalTime() {
    let total_time = 0;
    for (var i = 0; i < this.state.chosen_list.length; i++) {
      total_time += ((Number(this.state.chosen_list[i].action_min)*60 + Number(this.state.chosen_list[i].action_sec)) * Number(this.state.chosen_list[i].set))
      console.log(total_time);
    }
    let total_min = Math.floor(total_time/60);
    let temp = total_time - total_min*60;
    let total_sec = temp.toString().slice(0,2)
    return (`${total_min >= 10 ? total_min : "0"+total_min}:${total_sec}`);
    }

  getTotalKcal() {
    let total_kcal = 0;
    for (var j = 0; j< this.state.chosen_list.length; j++) {
      total_kcal += (this.state.chosen_list[j].kcal*this.state.chosen_list[j].set)
      console.log(total_kcal)
    }
    return total_kcal;
  }

  goToIntervalStart() {
    this.props.history.push(
      {
        pathname: '/StartInterval',
        state:
        {
          name: this.state.chosen_list.exname,
          action_min: this.state.chosen_list.action_min,
          action_sec: this.state.chosen_list.action_sec,
          break_min: this.state.chosen_list.break_min,
          break_sec: this.state.chosen_list.break_sec,
          set: this.state.chosen_list.set,
          kcal: this.state.chosen_list.kcal
        }
      }
    )
  }

  render() {
    return (
      <div>
          <div className="top-bar">
            <p className="unify-text"> Select Exercises </p>
          </div>

          <div className="back-ground">
            <div className={` ${this.state.clicked ? 'active' : ''}`}>
              {this.state.default_data.map((el, idx) => {
                return (
                    <Selectcircle
                      key={idx}
                      clicked={this.state.chosen_list.map(el=>el.exname).indexOf(el.train_name) !== -1}
                      info={el}
                    />
                )})}
        </div>

        <div className="result-tab">
          <div className="active">
            {this.state.chosen_list.map((el) => {
              return (<Selectedcircle info={el}/>)})}
          <button onClick={this.goToIntervalStart.bind(this)} className="startbutton">
            <p className="startbutton-text">START</p>
            </button>
          <div className="selected-wrapper">
            <p className= "selected_text">Action. {this.state.chosen_list.length} </p>
            <p className= "selected_text">TIME. {this.getTotalTime()} </p>
            <p className= "selected_text">Kcal. {this.getTotalKcal()} </p>
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

export default withRouter(Choice);
