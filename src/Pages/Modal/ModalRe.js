import React from 'react';
import './Modal.scss';
import Button from '../../Components/Button/Button'
import {withRouter} from 'react-router-dom';

class ModalRe extends React.Component {
  constructor(props) {
    super(props);

  }
  goBack = () => {
    this.props.history.goBack()
  }

  goToLogOut = () => {
    this.props.history.push('/')
  }

  goToSignUp = () => {
    this.props.history.push('/signup')
  }

  goToSelectExercise = () => {
    this.props.history.push('/SelectExercise');
}

  goToExerciseHistory = () => {

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
            <h1
            className="modmenu"
            onClick={this.goToExerciseHistory}>히스토리</h1>
          </div>
          <div>
            <button
            onClick={this.goToLogOut}
            className="greenlogout">로그아웃</button>
          </div>

          <h2 id="phrase">SORE TODAY,<br/> STRONG TOMORROW</h2>
        </div>
>
      </div>
    )
  }
}

export default withRouter(ModalRe);
