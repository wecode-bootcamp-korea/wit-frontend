import React from 'react';
import './Modal.scss';
import Button from '../../Components/Button/Button'
import {withRouter} from 'react-router-dom';

class ModalUnre extends React.Component {
  constructor(props) {
    super(props);

  }

  goBack = () => {
    this.props.history.goBack()
  }
  goToLogIn = () => {
    this.props.history.push('/')
  }

  goToSignUp = () => {
    this.props.history.push('/signup')
  }

  goToSelectExercise = () => {
    this.props.history.push('/SelectExercise');
}

  render() {
    let self = this;
    return (
      <div>
        <div className="modalposition">
        <button
        onClick={this.goBack}
        className="close">x</button>
          <div>
            <h1 class="modwit">wit</h1>
          </div>
          <div>
            <h1
            className="modmenu"
            onClick={this.goToSelectExercise}>운동세팅</h1>
          </div>
          <div>
            <button
            onClick={this.goToLogIn}
            className="greenbtn">로그인</button>
          </div>
          <div>
            <button
            onClick={this.goToSignUp}
            className="blackbtn">회원가입</button>
          </div>
          <h2 id="phrase">SORE TODAY,<br/> STRONG TOMORROW</h2>
        </div>
>
      </div>
    )
  }
}

export default withRouter(ModalUnre);
