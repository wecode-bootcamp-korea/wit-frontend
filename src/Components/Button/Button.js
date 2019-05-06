import React from 'react';
import './Button.scss';

class Button extends React.Component {
  render() {
    return (
      <button
        className="btn"
        onClick={this.props.click}

        >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
