import React from 'react';
import './Selectcircle.scss';
import { withRouter } from 'react-router-dom';

class Selectcircle extends React.Component {

  constructor(props) {
  super(props);
console.log(props.clicked)
  this.state = {
    clicked: props.clicked
  }
}


goToSettimer() {

  this.props.history.push({
      pathname: '/settimer',
      state: {name: this.props.info.name,
              action_min: this.props.info.action_min,
              action_sec: this.props.info.action_sec,
              break_min: this.props.info.break_min,
              break_sec: this.props.info.break_sec,
              set: this.props.info.set}
  });
}

  render() {
    // console.log(this.props)

    return (
      <div className={`blocking ${this.state.clicked ? 'active' : ''}`}
            onClick={()=>{this.setState({clicked: !this.state.clicked })}}
            onClick={this.goToSettimer.bind(this)}>
        <span className="dot"></span>
        <p className="ex-text">{this.props.info.name}</p>
      </div>
    )
  }
}

export default withRouter(Selectcircle)
