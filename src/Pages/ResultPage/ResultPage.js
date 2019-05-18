import React from 'react';
import './ResultPage.scss';
import {withRouter} from 'react-router-dom';
import Resultcircle from '../../Components/Resultcircle/Resultcircle';


class ResultPage extends React.Component {

  render() {



    return (
      <div>
        <div className="top-bar">
          <p className="unify-text"> Result Page </p>
        </div>
          <div className="back-ground">
            <div className="blocking">
              {this.ex_list.map((el) => {
                return (<Resultcircle
                        info={el}
                        />)})}
            </div>
          </div>
          <div className="result-tab">
          </div>
          <div className="result-tab">
          </div>
          <div className="result-tab">
          </div>
          <div className="result-tab">
          </div>
          <div className="result-tab">
          </div>
    </div>
    )
  }
 }


export default ResultPage;
