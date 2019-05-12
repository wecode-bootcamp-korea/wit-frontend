import React from 'react';
import './Selectcircle.scss';
import { withRouter } from 'react-router-dom';

class Selectcircle extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    clicked: false
  }
}


goToSettimer() {

  this.props.history.push({
      pathname: '/settimer',
      state: {name: this.props.info.name,
              action_time: this.props.info.action_time,
              break_time: this.props.info.break_time,
              set: this.props.info.set}
  });
  console.log("운동정보가 웹상에 전달되는지 확인: 보이면 된것임")
}

  render() {
    console.log(this.props)

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
