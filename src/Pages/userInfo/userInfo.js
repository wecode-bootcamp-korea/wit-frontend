import React from 'react';
import './userInfo.scss';
import '../../Style/config.scss'
import Button from '../../Components/Button/Button'
import ExButton from '../../Components/Button/ExButton'
import { withRouter } from 'react-router-dom';
import Skip from '../../Components/Button/Skip'

//let listfrback = [{ name: 'plank', id: 40}, {name: 'push up', id: 8}];
let listfrback = ['plank'];

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      preferry: [],
      pkKeyList: [],
      active: false,
      makelist: {},
      truelist: [],
      pklist: {},
      gender:'',
      // nickname: '',
      birth: '',
      weight:'',
      height:'',
      preferred_ex:[]
    };
  }

  componentDidMount() {

      fetch('http://13.125.249.35:8000/train/all')
      .then(response => response.json())
      .then(response => {
        let pkKeyList = this.state.pkKeyList;
        let preferry = this.state.preferry;
        for (var i=0; i<response.length; i++) {

          pkKeyList.push(response[i]["pk"]);
          preferry.push(response[i]["fields"]["train_name"])
        }
        this.setState({
          preferry : this.state.preferry,
          pkKeyList : this.state.pkKeyList
        })

        // console.log('componentDidMount')

        //let listfrback = response["preferred_ex"]["train_name"];
        // for (var i=0; i<this.state.preferry.length; i++){
        //   for (var j=0; j<listfrback.length; j++){
        //     if (this.state.preferry[i] === listfrback[j]) {
        //       this.setState({ active: true });
        //     }
        //   }
        // }
        console.log('componentDidMount', this.state.pkKeyList);
        console.log('componentDidMount', this.state.preferry);

      });

    let token = localStorage.getItem('wit-token') || '';

    if (token) {
      fetch('http://13.125.249.35:8080/user/detail', {
        headers: {
            'Authorization': token,
        }
      })
      .then(response => response.json())
      .then(response => {
         console.log(response.data);
      })

      this.setState({
        // preferry: this.state.preferry,
        //nickname: get정보. response[i]
        //sex: get 정보 || null,
        //birth: get 정보 || null,
        //weight: get||null,
        //height: get || null
      })

    }
    // else {
    //   this.props.history.push('/SelectExercise')
    // }

  }

  skipThisPage = () => {
    this.props.history.push('/SelectExercise');
  }

  goToSelectExercise2 = () => {
    console.log(this.state.pklist);
    let yetString = [];
    for (var key in this.state.pklist) {

      if (this.state.pklist[key] === true) {
        yetString.push(key)
      }
    }
    let somelist = yetString.map(num => Number(num));
    console.log('somelist', somelist);

    if (this.state.gender === "남") {
      return this.state.gender = true;
    } else if (this.state.gender === "여") {
      return this.state.gender = false;
    }
    let data = {
      // nickname: this.state.nickname,
      user_sex: this.state.gender,
      user_birthdate: this.state.birth,
      user_weight: this.state.weight,
      user_height: this.state.height,
      train_ids: somelist
    };
    console.log(data)
    return;
    // let nickname = {
    //   user_nickname: this.state.nickname
    // }

    fetch('http://13.125.249.35:8000/train', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
         console.log(response['message'])
      })

      // fetch('http://13.125.249.35:8000/train', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(nickname)
      // })
      //   .then(response => response.json())
      //   .then(response => {
      //      console.log(response['message'])
      //   })  nickname 다른주소로 보내기..
    this.props.history.push('/SelectExercise');
    }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name, e.target.value)
  }

  getExId = (text, selected) => {
     let mylist = this.state.makelist;
    mylist[text] = selected;
    // this.state[pkKeyList] = selected;
    let i = this.state.preferry.indexOf(text);
    console.log(this.state.makelist)
    // this.state.pklist[]
    let anotherlist = this.state.pklist;
    anotherlist[i+1] = selected;
    // push(this.state.pkKeyList[i])
    this.setState({
       makelist : mylist,
       pklist : anotherlist
     })
    // console.log(text, selected)
    }

  render() {

    return (
      <div>
        <div className="userinfowrap">
          <div className="boxposition">
          <Skip
          click={this.skipThisPage}/>
            <p className="userinfotitl">선택정보<br/>입력</p>
            <div className="inputboxes-userinfo">
            {/*  <div className="timerbox">
                <label className="usrtitl">닉네임</label>
                 <input
                   className="txtinput"
                   name="nickname"
                   type="text"
                   value={this.state.nickname} //get해야되나?
                   onChange={this.handleChange}
                 />
              </div> */}
              <div className="timerbox">
                <label className="usrtitl">성별</label>
                  <div className="genderbox">
                    <span className="male">남</span>
                    <input
                      className="radiom"
                      name="gender"
                      type="radio"
                      value="남" //get해야되나?
                      onChange={this.handleChange}
                    />
                    <span className="female">여</span>
                    <input
                      className="radiof"
                      name="gender"
                      type="radio"
                      value="여"//get해야되나?
                      onChange={this.handleChange}
                    />
                  </div>
              </div>
              <div className="timerbox">
                <label className="usrtitl">생일</label>
                <input
                  className="txtinput"
                  name="birth"
                  type="date"
                  value={this.state.birth} //get해야되나?
                  onChange={this.handleChange}
                />
              </div>
              <div className="timerbox">
                <label className="usrtitl">몸무게</label>
                <div className="genderbox">
                <input
                  className="weihei"
                  name="weight"
                  type="number"
                  value={this.state.weight} //get해야되나?
                  onChange={this.handleChange}
                />
                </div>
                <span className="usrcl">KG</span>
              </div>
              <div className="timerbox">
                <label className="usrtitl">키</label>
                <input
                  className="weihei"
                  name="height"
                  type="number"
                  value={this.state.height} //get해야되나?
                  onChange={this.handleChange}
                />
                <span className="usrcl">CM</span>
              </div>

              <p className="prefer">선호운동</p>
              {this.state.preferry.map((item,i) => {
                let selected;
                //
                // if (listfrback.indexOf(item) === -1) {
                //   selected = false;
                // } else {
                //   selected = true;
                // }

                return (
                  <ExButton
                    key={i}
                    text={item}
                    getExId={this.getExId}
                    // click={this.goToSelectExercise2}
                    // selected={listfrback.indexOf(item) !== -1} //orselected={selected}
                  />
              )})}
            </div>
            <div id="blanksignup">
              <Button
              text="가입완료"
              click={this.goToSelectExercise2}
              />
            </div>
            <Skip
            click={this.skipThisPage}/>
          </div>

      </div>
      </div>

    )

}
}
export default withRouter(UserInfo);
