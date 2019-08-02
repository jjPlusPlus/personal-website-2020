import React, { Component } from 'react';

class Admin extends Component {
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

  }

  render() {
    return (
      <div className="admin">
        <h2>This is my website and I want to change shit</h2>
        <p>Prove it.</p>
        <form onSubmit={this.authenticate}>
          <input type="text" value={this.state.email} onChange={this.inputChange('email')} />
          <input type="password" value={this.state.password} onChange={this.inputChange('password')} />
          <button type="submit"> lets do eit. </button>
        </form>
      </div>
    );
  }
}

export default Admin;
