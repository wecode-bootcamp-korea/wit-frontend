import React from 'react';
import './Resultcircle.scss';
import { withRouter } from 'react-router-dom';

class Resultcircle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: props.status
    }
  }

  render() {
    const { info } = this.props;

    return (
      <div>
        <span className="small_dot"></span>
        <p className="selected-ex-text">{info.exname}</p>
      </div>
    )
  }
}

export default Resultcircle
