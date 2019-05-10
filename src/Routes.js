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


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/StartInterval" component={Interval} />
          <Route path="/SelectExercise" component={Choice} />

        </Switch>
      </Router>
    )
  }
}

export default Routes;
