import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Link,browserHistory} from 'react-router';
// import "./home.scss";

class Singup extends Component{
	render(){
		return (
      <div>
			<h5>我是singup</h5>
      <Link to='/home'>click me返回home</Link>
      </div>
		);
	}
}

export default Singup;
