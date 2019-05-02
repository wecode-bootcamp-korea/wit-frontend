import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './Pages/Login/Login'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
