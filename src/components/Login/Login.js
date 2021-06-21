import { Component } from 'react';
import Container from '../Container';

import './Login.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <Container>
        <form
          className="login-form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <label>
            <input
              className="login-input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="E-mail"
              required
            />
          </label>
          <label>
            <input
              className="login-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              required
            />
          </label>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </Container>
    );
  }
}

export default Login;
