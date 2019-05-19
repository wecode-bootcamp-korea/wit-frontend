import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Login from './Pages/Login/Login'
import Interval from './Pages/StartInterval/StartInterval'
import Signup from './Pages/Signup/Signup'
import Choice from './Pages/SelectExercise/SelectExercise'
import SetTimer from './Pages/SetTimer/SetTimer'
import UserInfo from './Pages/userInfo/userInfo'
import ResultPage from './Pages/ResultPage/ResultPage'
import ModalRe from './Pages/Modal/ModalRe'
import ModalUnre from './Pages/Modal/ModalUnre'
import Main from './Pages/Main/Main'
import EndingPage from './Pages/EndingPage/EndingPage'
import SeducePage from './Pages/SeducePage/SeducePage'


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/StartInterval" component={Interval} />
          <Route path="/SelectExercise" component={Choice} />
          <Route path="/settimer" component={SetTimer} />
          <Route exact path="/userInfo" component={UserInfo} />
          <Route path="/Result" component={ResultPage} />
          <Route exact path="/ModalRe" component={ModalRe} />
          <Route exact path="/ModalUnre" component={ModalUnre} />
          <Route exact path="/" component={Main} />
          <Route exact path="/Ending" component={EndingPage} />
          <Route exact path="/Seduce" component={SeducePage} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
