
import React from 'react';
import './Skip.scss';
import { withRouter } from 'react-router-dom';

class Skip extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <h1
        className="skip"
        onClick={this.props.click}

        >SKIP</h1>

    );
  }
}

export default withRouter(Skip);
