import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Button from '../../Components/Button/Button'
import ExButton from '../../Components/Button/ExButton'
import Skip from '../../Components/Button/Skip'
import './userInfo.scss';
import '../../Style/config.scss'
import * as constants from '../../constants';



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
      birth: '',
      weight:'',
      height:'',
      preferred_ex:[]
    };
  }

  componentDidMount() {
      fetch(`${constants.URL_BACK}/train/all`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        let pkKeyList = this.state.pkKeyList;
        let preferry = this.state.preferry;
        for (var i = 0; i < 12; i ++) {

          pkKeyList.push(response[i]["pk"]);
          preferry.push(response[i]["fields"]["train_name"])
        }
        this.setState({
          preferry : this.state.preferry,
          pkKeyList : this.state.pkKeyList
        })


      });

    let token = localStorage.getItem('wit-token') || '';

    if (token) {
      fetch('http://127.0.0.1/user/detail', {
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


  goToSelectExercise2 = () => {
    let yetString = [];
    for (let key in this.state.pklist) {

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

    const {
      gender,
      birth,
      weight,
      height
    } = this.state

    const data = {
      user_sex: gender,
      user_birthdate: birth,
      user_weight: Number(weight),
      user_height: Number(height),
      train_ids: somelist
    };
    console.log(data)

    fetch(`${constants.URL_BACK}/train`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        console.log(data)
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
          <Link className="link" to="/SelectExercise">Skip</Link>
            <p className="userinfotitl">선택정보<br/>입력</p>
            <div className="inputboxes-userinfo">
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
                  className="birthdayInput"
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
                  type="text"
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
                  type="text"
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
            <Link className="link" to="SelectExercise/">Skip</Link>
          </div>

      </div>
      </div>

    )

}
}
export default withRouter(UserInfo);
