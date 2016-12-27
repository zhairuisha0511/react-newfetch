import React, {Component} from 'react'
import { Link } from 'react-router'
class Home extends Component{
    render() {
        return (
      <div>
        <h2>ReactApp:</h2>
        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/demo">Demo</Link></li>
          <li><Link to='/user'>User</Link></li>
          <li><Link to='/account'>Account</Link></li>
          <li><Link to='/transaction'>Transaction</Link></li>
          <li><Link to='/borrow'>Borrow</Link></li>
          <li><Link to='/invest'>Invest</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
    }
}

export default Home;