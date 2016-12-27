import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './home';
import SingUp from './singup';
import Login from './login';
import Register from './register';
import './index.css';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
ReactDOM.render(
  // <App />,

( <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/singup" component={SingUp} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Route>
</Router>),
  document.getElementById('root')
);
