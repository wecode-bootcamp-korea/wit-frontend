import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
