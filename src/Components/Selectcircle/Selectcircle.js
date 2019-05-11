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
  this.props.history.push('/settimer');
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

export default withRouter(Selectcircle);
