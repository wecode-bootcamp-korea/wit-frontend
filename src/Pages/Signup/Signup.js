import React from 'react';
import './Signup.scss';
import Button from '../../Components/Button/Button'


class Signup extends React.Component {
  constructor() {
    super();
    this.state  = { //to remember things, component uses state.
      userId: '',
      Password: '',
      Nickname: '',
      text: '' //컴포넌틈 상태 저장해있어야. 텍스트값을 계속변화시킬거임.
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
    fetch('localhost:8000/signup', {
      body: {
        Id: this.state.userId,
        Pw: this.state.Password,
        Nn: this.state.Nickname
      }
    })

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
  handleChangeNN(nn) {
    this.setState({
      Nickname: nn.target.value
    })
  }

  render() {

    let self = this;
    return (
      <div>
        <form  className="wrapper">
          <div>
            <input
               className="idpw-input"
               type="text"
               placeholder = "이메일"
               value={this.state.userId}
               onChange={this.handleChange.bind(this)}
            />
          </div>
          <div>
             <input
               className="idpw-input"
               type="password"
               placeholder="비밀번호"
               value={this.state.Password}
               onChange={this.handleChangePW.bind(this)}
             />
          </div>
          <div>
             <input
               className="idpw-input"
               type="text"
               placeholder="닉네임"
               value={this.state.Nickname}
               onChange={this.handleChangeNN.bind(this)}
             />
          </div>
        </form>
          <div>
            <Button
            text="계속하기"
            click={this.handleClick.bind(this)}/>
          </div>


      </div>
    )
  }
}

export default Signup;
