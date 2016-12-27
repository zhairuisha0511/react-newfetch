import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Link,browserHistory} from 'react-router';
// import "./home.scss";

class Home extends Component{
	render(){
		return (
      <div>
			<h5>我是home</h5>
      <Link to='/login'>click me返回login</Link>
      </div>
		);
	}
}

export default Home;
