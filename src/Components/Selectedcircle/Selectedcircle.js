import React from 'react';
import './Selectedcircle.scss';
import { withRouter } from 'react-router-dom';

class Selectedcircle extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    clicked: false
  }
}

  render() {
    console.log(this.props)

    return (
      <div className={`blocking ${this.state.clicked ? 'active' : ''}`}
            onClick={()=>{this.setState({clicked: !this.state.clicked })}}>
        <span className="small_dot"></span>
        <p className="selected-ex-text">{this.props.info.name}</p>
      </div>
    )
  }
}

export default Selectedcircle
