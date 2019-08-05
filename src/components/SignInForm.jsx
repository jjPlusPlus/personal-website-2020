import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
    this.props.authenticate(credentials);
    // maybe this returns a boolean and i can update the location?
    // maybe i can do it in the reducer?
    // maybe in componentwillmount i can check the props for user and redirect?
  }

  render() {
    return (
      <div className="sign-in-form">
        <p>Prove it.</p>
        <form onSubmit={this.authenticate}>
          <input type="text" value={this.state.email} onChange={this.inputChange('email')} />
          <input type="password" value={this.state.password} onChange={this.inputChange('password')} />
          <button type="submit"> lets do eit. </button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, actions)(SignInForm);
