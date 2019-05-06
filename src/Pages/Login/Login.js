import React from 'react';
import './Login.scss';
import Button from '../../Components/Button/Button'


class Login extends React.Component {
  constructor() {
    super();
    this.state  = { //to remember things, component uses state.
      userId: '',
      Password: '',
      text: 'loginpage.' //컴포넌틈 상태 저장해있어야. 텍스트값을 계속변화시킬거임.
    };

    //class를 만들때 항상 거치는 메소드.
    //this.a = 1;
    //확장해서 쓰려면 constructor에 super써야 모든 메소드 빌려와서 쓷나는말.
  } //초기화되는 값을 constructor에서 정해준다.

  componentDidMount() {
    console.log('componentDidMount')

  }
  componentDidUpdate() {
    console.log('componentDidUpdate')

  }
  componentWillUnmount() {
    console.log('componentWillUnmount')

  }

  handleClick() {
    fetch('localhost:8000/login', {
      body: {
        Id: this.state.userId,
        Pw: this.state.Password
      }
    })

    console.log(this);
    this.setState({
      text:this.state.userId
    });

  }
  handleChange(e) {
    console.log(e.target.value)

    this.setState({
      userId: e.target.value
    })
  }
  handleChangePW(pw) {
    this.setState({
      Password: pw.target.value
    })
  }
  render() {

    let self = this;
    return (
      <div>


        <form  className="wrapper">
          <div className="box">
            <input
               className="idpw-input"
               type="text"
               placeholder = "이메일"
               value={this.state.userId}
               onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="box">
             <input
               className="idpw-input"
               type="password"
               placeholder="비밀번호"
               value={this.state.Password}
               onChange={this.handleChangePW.bind(this)}
             />
          </div>
        </form>
          <div className="box">
            <Button

            text="로그인"
            click={this.handleClick.bind(this)}/>
          </div>
          <p clasName="maintext">비회원이세요? 바로 시작하기</p>
          <div className="box">
            <Button

            text="회원가입"/>
          </div>
          <span clasName="maintext">아이디찾기</span>
          <span clasName="maintext">비밀번호찾기</span>




        <p className="maintext" onClick={this.handleClick.bind(self)}>
        id: {this.state.userId} <br/>
        pw: {this.state.Password}


        </p>

      </div>
    )
  }
}

export default Login;
