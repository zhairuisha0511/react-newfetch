import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './user';
import Home from './home';
import Account from './accounts';
import Transaction from './transaction';
import Borrow from './borrow';
import Invest from './invest';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';
console.log('aaaaa')
ReactDOM.render((
  <Router history={browserHistory}>
      <Route path='/' component={Home} >
        <Route path='/demo' component={App} />
        <Route path='/user' component={User} />
        <Route path='/account' component={Account} />
        <Route path='/transaction' component={Transaction} />
        <Route path='/borrow' component={Borrow} />
        <Route path='/invest' component={Invest} />
      </Route>
  </Router>
),
  // <App />,
  document.getElementById('root')
);
