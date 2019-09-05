import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase'

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      valid: false
    }
    this.authenticate = this.authenticate.bind(this)
  }

  inputChange = field => event => {
    this.setState({
      [field]: event.target.value,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // only if the state that changed was one of the form field states
    if (prevState.email !== this.state.email || prevState.password !== this.state.password) {
      // perform basic validation here
      const emailIsValid = this.state.email.length !== 0;
      const passwordIsValid = this.state.password.length !== 0;
      const formIsValid = emailIsValid && passwordIsValid;
      this.setState({
        valid: formIsValid
      })
    }
  }

  authenticate(event) {
    event.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.firebase.login(credentials).then(result => {
      console.log(result);
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
          <button type="submit" className="button submit-button float-right" disabled={!this.state.valid}> Prove it. </button>
          </div>
        </form>
      </div>
    )
  }
}

export default firebaseConnect()(SignInForm);
