
import React from 'react';
import './ExButton.scss';
import { withRouter } from 'react-router-dom';

class ExButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.selected
    }
  }

  toggleClass = () => {
    let clicked = !this.state.active;

    this.props.getExId(this.props.text, clicked);

      this.setState({
        active: clicked
      })
  }

  render() {
    return (
      <button
        onClick={this.toggleClass}
        className={this.state.active ? 'clickbtn':'Exbtn'}

        >
        {this.props.text}
      </button>
    );
  }
}

export default withRouter(ExButton);
