
import React from 'react';
import './Login.scss';
import {withRouter} from 'react-router-dom';
import '../../Style/config.scss'
import Button from '../../Components/Button/Button'

class Login extends React.Component {
  constructor() {
    super();
    this.state  = { //to remember things, component uses state.
      userId: '',
      Password: '',
       //컴포넌틈 상태 저장해있어야. 텍스트값을 계속변화시킬거임.
    };

    //class를 만들때 항상 거치는 메소드.
    //this.a = 1;
    //확장해서 쓰려면 constructor에 super써야 모든 메소드 빌려와서 쓷나는말.
  } //초기화되는 값을 constructor에서 정해준다.



  handleClick=()=> {
    fetch('http://13.125.249.35:8000/user/signin', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: this.state.userId,
        user_password: this.state.Password

      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response.access_token);
      if (response.access_token) {
        localStorage.setItem('wit-token', response.access_token);
  }

      if (response) {
        alert('로그인이 완료되었습니다!');
        this.props.history.push('/SelectExercicse');
  }
})
}

  goToSelectExercise = () => {
    this.props.history.push('/SelectExercise');
  }

  goToSignUp = () => {
    this.props.history.push('/signup');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // handleChangePW(pw) {
  //   this.setState({
  //     Password: pw.target.value
  //   })
  // }
  render() {

    return (
      <div className="wrapper">
        <div className="boxposition">
            <div className="subjectlogsignup">로그인</div>
          <div className="inputboxes">
            <input
               className="idpw-input"
               type="text"
               placeholder = "이메일"
               value={this.state.userId}
               name="userId"
               onChange={this.handleChange.bind(this)}
            />
             <input
               className="idpw-input"
               type="password"
               placeholder="비밀번호"
               value={this.state.Password}
               name="Password"
               onChange={this.handleChange.bind(this)}
             />
          </div>
          <div id="blanklogin"></div>
          <div>
            <Button
            text="로그인"
            click={this.handleClick.bind(this)}/>
          </div>
          <div className="spanblock">
            <span
            className="logstart"
            onClick={this.goToSelectExercise}>비회원으로 시작하기</span>
          </div>
          <div>
            <Button
            click={this.goToSignUp}
            text="회원가입"/>
          </div>
          {/* <div className="spanblock">
          //   <span className="logstart">아이디찾기</span>
          //   <span className="logstart">비밀번호찾기</span>
          // </div>*/}
        </div>

        <p onClick={this.handleClick}>
        id: {this.state.userId} <br/>
        pw: {this.state.Password}
        </p>
      </div>
    )
  }
}

export default withRouter(Login);
