import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.authenticate(credentials);
  }

  render() {
    const { authenticating, user, authError } = this.props;

    return (
      <div className="admin-page">
        <h2>This is my website and I want to change shit</h2>
        { user
          ? <div className="admin-dashboard">
              <strong>{user.email}</strong>
            </div>
          : <div className="sign-in-form">
              <p>Prove it.</p>
              <form onSubmit={this.authenticate}>
                <input type="text" value={this.state.email} onChange={this.inputChange('email')} />
                <input type="password" value={this.state.password} onChange={this.inputChange('password')} />
                <button type="submit"> lets do eit. </button>
              </form>
            </div>
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, actions)(Admin);
