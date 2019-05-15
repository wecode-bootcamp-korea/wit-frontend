import React from 'react';
import './Selectcircle.scss';
import { withRouter } from 'react-router-dom';

class Selectcircle extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    clicked: props.clicked
  }
}


goToSettimer() {

  this.props.history.push({
      pathname: '/settimer',
      state: {name: this.props.info.train_name,
              action_min: this.props.info.default_activation.slice(3,5),
              action_sec: this.props.info.default_activation.slice(6,),
              break_min: this.props.info.default_break.slice(3,5),
              break_sec: this.props.info.default_break.slice(6,),
              set: this.props.info.default_set,
              kcal: this.props.info.default_calorie}
  });
}

  render() {
    // console.log(this.props)

    return (
      <div className={`blocking ${this.state.clicked ? 'active' : ''}`}
            onClick={()=>{this.setState({clicked: !this.state.clicked })}}
            onClick={this.goToSettimer.bind(this)}>
        <span className="dot"></span>
        <p className="ex-text">{this.props.info.train_name}</p>
      </div>
    )
  }
}

export default withRouter(Selectcircle)
