import React from 'react';
import '../../Style/config.scss'
import Button from '../../Components/Button/Button'
import {withRouter} from 'react-router-dom';
import './Main.scss'

class Main extends React.Component {
  constructor() {
    super();
  }

goToSelectExercise = () => {
  this.props.history.push('/SelectExercise');
}

goToSignUp = () => {
  this.props.history.push('/signup');
}

goToLogIn = () => {
  this.props.history.push('/login')
}

  render() {
    let self = this;
    return (
      <div>
        <div className="modalposition">
          <div className="mainwit">
            <h1 class="mainsmwit">wit</h1>
            <h2
            className="wetrain">We Interval Train</h2>
          </div>
          <div>
            <h1
            className="mainlog"
            onClick={this.goToLogIn}>로그인</h1>
          </div>
          <div>
            <h1
            onClick={this.goToSignUp}
            className="mainlog">회원가입</h1>
          </div>

          <div>
            <h1
            className="start"
            onClick={this.goToSelectExercise}>비회원으로 시작하기</h1>

          </div>


        </div>

      </div>
    )
  }
}

export default withRouter(Main);
