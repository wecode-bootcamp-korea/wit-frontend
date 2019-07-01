import React from 'react';
import './ResultPage.scss';
import {withRouter} from 'react-router-dom';
import Resultcircle from '../../Components/Resultcircle/Resultcircle';



class ResultPage extends React.Component {
  constructor(props) {
    super(props);

    const currentIdx = 0;
    this.ex_list = JSON.parse(sessionStorage.getItem('settings')) || [{}]

    this.real_total = [];
    let total_time =0;
    for (var i=0; i <this.ex_list.length; i++){
      total_time += (Number(this.ex_list[i].action_min)*60 + Number(this.ex_list[i].action_sec)) * Number(this.ex_list[i].set)
      this.real_total.push(total_time)
    }
    this.total_min = Math.floor(this.real_total[this.real_total.length-1]/60)
    var temp = this.real_total[this.real_total.length-1] - this.total_min;
    this.total_sec = temp.toString().slice(0,2)

    let total_kcal = 0;
    for (var i=0; i <this.ex_list.length; i++) {
      total_kcal += (this.ex_list[i].kcal * this.ex_list[i].set)
    }
    this.total_kcal = total_kcal;

    //운동결과 post용 데이터 전처리
    var post_list=[]
    var new_temp={};
    for (var i=0; i < this.ex_list.length; i++){
      post_list.push(
        {
          'activation_time': '00:'+this.ex_list[i].action_min+":"+this.ex_list[i].action_sec,
          'break_time': '00:'+this.ex_list[i].break_min+":"+this.ex_list[i].break_sec,
          'train_id': this.ex_list[i].exname,
          'train_set': this.ex_list[i].set,
          'ex_kcal': this.ex_list[i].kcal
        }
      )
    }
    console.log('post_list:', post_list)
    console.log('valeu', post_list[0].train_id)



    //운동한글명을 코드값으로 변경
    var ex_list_code= {"push up":1, "crunch":2, "plank":3, "burpee":4, "squat":5,
                       "jump":6, "reptile":7,"knees":8,"lunges":9,"spiderman":10, "mountain":11,"scissors":12}
    console.log(Object.keys(ex_list_code)[1], Object.values(ex_list_code)[1])


    for (var k=0; k < post_list.length; k++) {
      for (var u=0; u <Object.keys(ex_list_code).length; u++){
          if (post_list[k].train_id === Object.keys(ex_list_code)[u]) {
              post_list[k].train_id = Object.values(ex_list_code)[u]
              }
            }
          }
    console.log('final_post_type', post_list)
}


  resultPost=()=> {
    let token = localStorage.getItem('wit-token')

    if (!token) {
      this.props.history.push('/Seduce')
    }

    else {
    fetch('http://13.125.249.35:8000/train', {
      method:'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        all_ex_info: this.post_list
      })
    })

    .then(response => response.json())
    .then(response => {
      // 운동 결과를 저장하고 마지막 엔딩 페이지로 연결
      this.goToEndingPage()
  })
}
}
  // 엔딩페이지로 가는 함수
  goToEndingPage=()=> {
    this.props.history.push('/Ending');
  }

  render() {

    return (
      <div>
        <div className="top-bar">
          <p className="unify-text"> Result Page </p>
        </div>

        <div className="result-blocking">
          {this.ex_list.map((el, idx) => {
            return (<Resultcircle
                    key={idx}
                    info={el}
                    />)})}
        </div>

        <div className="result-bar">
          <span className="result-bar-text"> Action. {this.ex_list.length}</span>
          <span className="result-bar-text"> Time. {this.total_min >= 10 ? this.total_min : "0"+this.total_min}:{this.total_sec} </span>
          <span className="result-bar-text"> Kcal. {this.total_kcal} </span>

        </div>

        <div className="ment-today">
          <p className="result-text">진행하신 운동은 어떠셨나요?</p>
          <p className="result-text">똑같은 세팅으로 운동하시려면,</p>
          <p className="result-text">지금 저장하세요.</p>
        </div>

        <div className="final-button">
          <button onClick={this.resultPost} className="final-save-button">
          <p className="final-save-text">저장하기</p>
          </button>
        </div>

        <div className="final-ment">
          <p className="result-text2">SORE TODAY,</p>
          <p className="result-text2">STRONG TOMORROW</p>
        </div>


      </div>
    )
  }
 }


export default withRouter(ResultPage);
