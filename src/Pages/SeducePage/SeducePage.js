import React from 'react';
import '../../Style/config.scss'
import {withRouter} from 'react-router-dom';
import './SeducePage.scss'

class SeducePage extends React.Component {
  constructor() {
    super();
  }

goToMainPage = () => {
  this.props.history.push('/');
}

  render() {
    let self = this;
    return (
      <div>
        <div className="modalposition">
          <div className="mainwit">
            <h1 class="mainsmwit">DONE</h1>
            <h2
            className="wetrain">
            {`회원이 아니시군요..

              지금 당장 가입하세요!`}</h2>
          </div>
          <div>
            <h1
            className="mainlog"
            onClick={this.goToMainPage}>가입하기</h1>
          </div>

        </div>

      </div>
    )
  }
}

export default withRouter(SeducePage);
