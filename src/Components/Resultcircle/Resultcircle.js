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
    console.log(total_time)


    let total_min_by_ex = Math.floor(total_time/60)
    let total_sec_by_ex = total_time/60-Math.floor(total_time/60)
    console.log(total_min_by_ex)

    return (
      <div>
        <span className="small_dot"></span>
        <span className="result_selected-ex-text">{this.props.info.exname}</span>
        <span className="result_selected-ex-text">{total_min_by_ex > 10 ? total_min_by_ex : "0"+total_min_by_ex}:{total_sec_by_ex.toString().slice(2,4)}</span>
        <span className="result_selected-ex-text">{this.props.info.set}set</span>

      </div>
    )
  }
}

export default Resultcircle
