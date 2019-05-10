import React from 'react';
import './Selectcircle.scss';

class Selectcircle extends React.Component {

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
        <span className="dot"></span>
        <p className="ex-text">{this.props.info.name}</p>
      </div>
    )
  }
}

export default Selectcircle;
