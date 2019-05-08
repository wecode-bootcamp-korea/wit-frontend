import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Login from './Pages/Login/Login'
import Interval from './Pages/StartInterval/StartInterval'


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/StartInterval" component={Interval} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
