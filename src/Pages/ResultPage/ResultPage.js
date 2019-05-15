import React from 'react';
import './ResultPage.scss';
import {withRouter} from 'react-router-dom';


class ResultPage extends React.Component {

  render() {
    return (
      <div>
        <div className="top-bar">
          <p className="unify-text"> Result Page </p>
        </div>
        <div className="back-ground">
        </div>
        <div className="result-tab">
        </div>
        <div className="result-tab">
        </div>
        <div className="result-tab">
        </div>
        <div className="result-tab">
        </div>
        <div className="result-tab">
        </div>
      </div>
    )
  }
 }


export default withRouter(ResultPage);
