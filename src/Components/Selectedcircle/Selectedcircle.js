import React from 'react';
import './Selectedcircle.scss';
import { withRouter } from 'react-router-dom';

class Selectedcircle extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    clicked: props.clicked,
    status: props.status
  }
}

  render() {

    return (
      <div className={`blocking ${this.props.status ? 'active' : ''}`}>

        <span className="small_dot"></span>
        <p className="selected-ex-text">{this.props.info.exname}</p>
      </div>
    )
  }
}

export default Selectedcircle
