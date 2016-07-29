import React , { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/digicity/home">Home</Link></li>
          <li><Link to="/digicity/about">About</Link></li>
          <li><Link to="/digicity/account">Account</Link></li>
        </ul>
        {this.props.children}
        <div>My Footer</div>
      </div>
    );
  }
}
export default App;
