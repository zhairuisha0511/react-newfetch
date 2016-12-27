import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Link,browserHistory} from 'react-router';
// import "./home.scss";

class LoginForm extends Component{
	constructor(props) {
          super(props);
          this.state = {
						username: "",
            password: "",

    };

      }
			handleChange(e){

				this.setState({
					username:e.target.value,

				});
			}
			handleChange1(e){
				this.setState({

						password:e.target.value,
				});
			}
			handleClick(){
				var data = {
            username : this.state.username,
            password : this.state.password,
        };
        // $.ajax({...});
				browserHistory.push('/register')
			}
	render(){
		return (
			<div className="loginForm">
	              <div className="eleItem">
	                <label>登录名：</label>
	                <input type="text" value={this.state.username} placeholder="不能包含特殊字符" onChange={this.handleChange.bind(this)} />
	              </div>
	              <div className="eleItem">
	                <label>密&nbsp;码：</label>
	                <input type="password" value={this.state.password} placeholder="六位数字密码" onChange={this.handleChange1.bind(this)} />
	              </div>
	              <div className="btnItem">
	                  <input type="submit" value="提交" onClick={this.handleClick.bind(this)} />
	              </div>
	      </div>
		);
	}
}

export default LoginForm;
