import React from 'react';
import './InputBox.scss';

class InputBox extends React.Component {
  render() {
    return (
      <input
      className="inputstyle"
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      />
      
    );
  }
}

export default InputBox;
