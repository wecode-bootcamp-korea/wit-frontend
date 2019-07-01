import React from 'react';
import './Resultcircle.scss';

class Resultcircle extends React.Component {

  render() {

    const total_time = (Number(this.props.info.action_min)*60 + Number(this.props.info.action_sec)) * Number(this.props.info.set)

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    let total_min_by_ex = Math.floor(total_time/60);
    let total_sec_by_ex = total_time-total_min_by_ex*60;
    let total_kcal = this.props.info.kcal * Number(this.props.info.set);

    return (
      <div className="reuslt-wrapper">
        <div className="result-small_dot"></div>
        <div className="result_selected-ex-text">{this.props.info.exname}</div>
        <div className="result_selected-ex-text">{total_min_by_ex > 10 ? total_min_by_ex : "0"+total_min_by_ex}:{total_sec_by_ex > 10 ? total_sec_by_ex : "0"+total_sec_by_ex }</div>
        <div className="result_selected-ex-text">{this.props.info.set}set</div>
        <div className="result_selected-ex-text">{total_kcal}Kcal</div>
      </div>
    )
  }
}

export default Resultcircle
