import React from 'react';
import './Login.scss';
import Button from '../../Components/Button/Button'



class Login extends React.Component {

  constructor() {
    super();
    console.log(this)
    this.state = {
      userId:'',
      text_id: '아이디',
      text:'여기는 로그인 페이지..'
    };
  }


  componentDidMount() {
    console.log("componentDidMount")

  }

  componentDidUpdate() {
    console.log("componentDidUpdate")

  }

  componentWillUnmount() {
    console.log("componentWillUnmount")

  }

  handleClick() {
    // console.log(this);
    // fetch('localhost:8000/login', {
    //   body: {
    //     id: this.state.userId
    //   }
    // })

    this.setState({
      text_id: this.state.userId
    });
  }

  handleClickPassword() {

    this.setState({
      text: this.state.userPassword
    });


  }
  handleChangePassword(k) {
    this.setState({
      userPassword : k.target.value
    })
  }

  handleChange(e) {
    // console.log(e.target.value);
    this.setState({
      userId : e.target.value
    })

  }

  render() {
    console.log("render")

    return (
      <div>
        <div>
          <input
            className="login-id-input"
            type="text"
            value={this.state.userId}
            onChange={this.handleChange.bind(this)}
          />
          <p onClick={this.handleClick.bind(this)}>
            {this.state.text_id}
          </p>
        </div>

        <div>
          <input
            className="login-password-input"
            type="password"
            value={this.state.userPassword}
            onChange={this.handleChangePassword.bind(this)}
          />
          <Button
            text="로그인"
            name="이개발" />
          <Button text="회원가입" />
          <Button text="설정저장" />

        </div>
      </div>
    )
  }
}

export default Login;
