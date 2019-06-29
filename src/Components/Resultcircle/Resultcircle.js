import React from 'react';
import './Resultcircle.scss';
import { withRouter } from 'react-router-dom';

class Resultcircle extends React.Component {

  constructor(props) {

  super(props);

  this.state = {
  }
}

  render() {

    const total_time = (Number(this.props.info.action_min)*60 + Number(this.props.info.action_sec)) * Number(this.props.info.set)

    function getRandomInt(min, max) {
                                      min = Math.ceil(min);
                                      max = Math.floor(max);
                                      return Math.floor(Math.random() * (max - min)) + min;
                                    }

    let total_min_by_ex = Math.floor(total_time/60);
    let total_sec_by_ex = total_time-total_min_by_ex*60;

    return (
      <div>
        <span className="small_dot"></span>
        <span className="result_selected-ex-text">{this.props.info.exname}</span>
        <span className="result_selected-ex-text">{total_min_by_ex > 10 ? total_min_by_ex : "0"+total_min_by_ex}:{total_sec_by_ex > 10 ? total_sec_by_ex : "0"+total_sec_by_ex }</span>
        <span className="result_selected-ex-text">{this.props.info.set}set</span>
        <span className="result_selected-ex-text">{getRandomInt(100,500)}Kcal</span>

      </div>
    )
  }
}

export default Resultcircle
