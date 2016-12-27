import React, { Component } from 'react';

import './App.css';

import Home from './home';
import {Router,Route,IndexRoute,Link,browserHistory} from 'react-router';

class App extends Component {



  render() {

    return (
      <div className="App">

        <div className="App-intro">
        {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
