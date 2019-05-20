import React from 'react';
import Selectcircle   from '../../Components/Selectcircle/Selectcircle';
import Selectedcircle   from '../../Components/Selectedcircle/Selectedcircle';
import './SelectExercise.scss';
import SetTimer from '../SetTimer/SetTimer';
import {withRouter} from 'react-router-dom';

class Choice extends React.Component {

  constructor() {
  super();

  this.state = {
    clicked: false,
    default_data: [],
    chosen_list: []
  }
}

componentDidMount() {
  console.log('componentDidMount')

    fetch('http://13.125.249.35:8000/train/all')
    .then(response => response.json())
    .then(response => {

      let dict = response;
      let ex_dict=[]
      for (var i=0; i <dict.length; i++) {
        ex_dict.push(dict[i].fields)

      }
      this.setState({default_data: ex_dict})
      }
)
    console.log(JSON.parse(sessionStorage.getItem('settings')))
     this.setState({
       chosen_list: JSON.parse(sessionStorage.getItem('settings')) || []
     })
}


  goToIntervalStart() {
    this.props.history.push({
      pathname: '/StartInterval',
      state: {name: this.state.chosen_list.exname,
              action_min: this.state.chosen_list.action_min,
              action_sec: this.state.chosen_list.action_sec,
              break_min: this.state.chosen_list.break_min,
              break_sec: this.state.chosen_list.break_sec,
              set: this.state.chosen_list.set
      }
    })
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

export default withRouter(Choice);
