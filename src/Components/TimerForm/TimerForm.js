import React from 'react';
import './TimerForm.scss';
import '../../Style/config.scss'


class SetTimer extends React.Component {
  constructor() {
    super();
    this.state  = {
      min: "00",
      sec: "00"
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form>
        <input
          type="number"/>
        <input
          type="number"/>

      </form>
    )
  }
}

export default TimerForm;
