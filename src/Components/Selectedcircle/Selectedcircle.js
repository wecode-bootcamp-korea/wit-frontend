import React from 'react';
import './Selectedcircle.scss';
import { withRouter } from 'react-router-dom';

class Selectedcircle extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    clicked: props.clicked
  }
}

  render() {

    return (
      <div className="blocking">
        <span className="small_dot"></span>
        <p className="selected-ex-text">{this.props.info.train_name}</p>
      </div>
    )
  }
}

export default Selectedcircle
