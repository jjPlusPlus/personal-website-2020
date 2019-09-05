import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase'

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.authenticate = this.authenticate.bind(this)
  }

  inputChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  authenticate(event) {
    event.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.firebase.login(credentials).then(result => {
      alert("Good job, we knew it was you!");
    }).catch(error => {
      alert("Nice try!");
    });
  }

  render() {
    return (
      <div className="sign-in-form">
        <p>Oh rly?</p>
        <form onSubmit={this.authenticate}>
          <label htmlFor="email">Username / Email</label>
          <input className="text-input" type="text" name="email" value={this.state.email} onChange={this.inputChange('email')} />

          <label htmlFor="password">Password</label>
          <input className="text-input" type="password" name="password" value={this.state.password} onChange={this.inputChange('password')} />

          <div className="flex flex-row-reverse">
          <button type="submit" className="button submit-button float-right"> Prove it. </button>
          </div>
        </form>
      </div>
    )
  }
}

export default firebaseConnect()(SignInForm);
