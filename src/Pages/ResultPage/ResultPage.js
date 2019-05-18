import React from 'react';
import './ResultPage.scss';
import {withRouter} from 'react-router-dom';
import Resultcircle from '../../Components/Resultcircle/Resultcircle'

class ResultPage extends React.Component {
  constructor() {
    super();

    const currentIdx = 0;
    this.ex_list = JSON.parse(sessionStorage.getItem('settings')) || [{}]

    this.state = {
      }
  }
  render() {



    return (
      <div>
        <div className="top-bar">
          <p className="unify-text"> Result Page </p>
        </div>
        <div className="blocking">
          {this.ex_list.map((el) => {
            return (<Resultcircle
                    info={el}
                    />)})}
        </div>
        <div className="result-bar">
        </div>
        <div className="ment-today">
          <p className="result-text">진행하신 운동은 어떠셨나요?</p>
          <p className="result-text">똑같은 세팅으로 운동하시려면,</p>
          <p className="result-text">지금 저장하세요.</p>
        </div>
        <div className="final-save-button">
        <p className="final-save-text"> 저장하기 </p>
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
