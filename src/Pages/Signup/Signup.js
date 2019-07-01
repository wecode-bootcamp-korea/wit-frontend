import React from 'react';
import './Signup.scss';
import '../../Style/config.scss'
import Button from '../../Components/Button/Button'
import {withRouter} from 'react-router-dom';
import * as constants from '../../constants';

class Signup extends React.Component {
  constructor() {
    super();
    this.state  = { //to remember things, component uses state.
      userId: '',
      password: '',
      rePassword: '',
      nickname: '',
      formErrors: {userId: '', Password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      pMessage:''
    };

    //class를 만들때 항상 거치는 메소드.
    //this.a = 1;
    //확장해서 쓰려면 constructor에 super써야 모든 메소드 빌려와서 쓷나는말.
  } //초기화되는 값을 constructor에서 정해준다.

  handleClick() {

    fetch(`${constants.URL_BACK}/user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: this.state.userId,
        user_password: this.state.password,
        user_nickname: this.state.nickname
      })

      })
      .then(response => response.json())
      .then(response => {
         console.log(response['message'])
         if (response.message === 'email already exists') {
           alert("이미 존재하는 이메일입니다.");
         }

      })
    }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleConfirmPassword = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('pw', e.target.value === this.state.password, typeof e.target.value, e.target.value.length)
    if (e.target.value !== this.state.rePassword) {
      this.setState({
        pMessage: "비밀번호가 일치하지 않습니다."
      })
      console.log("ERROR");
    }
    else if (e.target.value === '') {
      this.setState({
        pMessage: ''
      })
    }
    else if (e.target.value === this.state.rePassword) {
      this.setState({
        pMessage: "비밀번호가 일치합니다."
      })
      console.log("OK");
    }
}

goToUserInfo = () => {
  this.props.history.push('/UserInfo');
}


handleSubmit = (e) => {
   if (this.state.password !== this.state.rePassword){
       console.log("The passwords doesn't match")
       return false; // The form won't submit
   }
   else {

     fetch(`${constants.URL_BACK}/user/`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         user_email: this.state.userId,
         user_password: this.state.password,
         user_nickname: this.state.nickname
       })

       })
       .then(response => response.json())
       .then(response => {
          console.log(response['message'])
          if (response.message === 'email already exists') {
            alert("이미 존재하는 이메일입니다.");
          }
          if (response.success) {
            alert('회원가입이 완료되었습니다!');
            this.props.history.push('/userInfo');
          }
       });
   }
}
  render() {

    return (
      <div>
        <div className="wrapper">
          <div className="boxposition">
            <div className="subjectlogsignup">회원가입</div>
          <div className="inputboxes">
            <input
              className="idpw-input"
              name="userId"
              type="text"
              placeholder="e-mail"
              value={this.state.userId}
              onChange={this.handleChange}
            />
            <input
              className="idpw-input"
              name="nickname"
              type="text"
              placeholder="nickname"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
             <input
               className="idpw-input"
               name="password"
               type="password"
               placeholder="password"
               value={this.state.password}
               onChange={this.handleChange}
             />
             <input
               className="idpw-input"
               name="rePassword"
               type="password"
               placeholder="password check"
               value={this.state.rePassword}
               onChange={this.handleConfirmPassword}
             />

          </div>
          <p className="maintext">{this.state.pMessage}</p>
          </div>
          <div id="blanksignup">
            <Button
            text="계속하기"
            click={this.handleSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Signup);
