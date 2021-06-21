import { Component } from 'react';
import Container from '../Container';
import './Register.scss';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <Container>
        <form
          className="register-form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <label>
            <input
              className="register-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              required
            />
          </label>
          <label>
            <input
              className="register-input"
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
              className="register-input"
              type="password"
              name="password"
              // pattern="(?=.{7,})"
              title="Password should be at least 7 characters"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              required
            />
          </label>
          <button className="register-btn" type="submit">
            Register
          </button>
        </form>
      </Container>
    );
  }
}

export default Register;
