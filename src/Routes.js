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

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/StartInterval" component={Interval} />
          <Route path="/SelectExercise" component={Choice} />
          <Route path="/settimer" component={SetTimer} />
          <Route exact path="/userInfo" component={UserInfo} />


          <Route path="/ResultPage" component={ResultPage} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
