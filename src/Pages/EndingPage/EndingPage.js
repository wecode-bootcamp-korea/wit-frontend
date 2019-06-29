import React from 'react';
import '../../Style/config.scss'
import Button from '../../Components/Button/Button'
import {withRouter} from 'react-router-dom';
import './EndingPage.scss'

class EndingPage extends React.Component {
  constructor() {
    super();
  }

goToSelectExercise = () => {
  this.props.history.push('/SelectExercise');
}

goToResult = () => {
  this.props.history.push('/Result');
}


  render() {
    let self = this;
    return (
      <div>
        <div className="modalposition">
          <div className="mainwit">
            <h1 class="mainsmwit">DONE</h1>
            <h2
            className="wetrain">{`Come Again`}</h2>
          </div>
          <div>
            <h1
            className="mainlog"
            onClick={this.goToSelectExercise}>다시하기</h1>
          </div>
          <div>
            <h1
            onClick={this.goToResult}
            className="mainlog">결과보기</h1>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(EndingPage);
