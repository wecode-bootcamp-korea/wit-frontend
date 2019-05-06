import React  from 'react';
import './Button.scss';
class Button extends React.Component {





render() {

    return (
      <button
        className='login-btn'
        // onClick={this.handleClick.bind(this)}
        >
        {this.props.text} {this.props.name}
      </button>
    );
  }

}

export default Button;
