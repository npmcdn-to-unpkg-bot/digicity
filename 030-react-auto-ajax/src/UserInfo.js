import React, { Component } from 'react';
import axios from 'axios';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resString: "resString"
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/happypeter')
         .then((res) => {
            this.setState({resString: res.data.avatar_url});
            console.log(res);
          });
  }
  render() {
    return (
      <div>
        <h1> My Github Info</h1>
        <img src={this.state.resString} />
      </div>
    );
  }
}

export default UserInfo;
