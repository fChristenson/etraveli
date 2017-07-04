import React, { Component } from "react";
import { eitherFunctionOrNot } from "../../utils/generalUtils";

export default class LoginPage extends Component {
  static propTypes = {
    error: React.PropTypes.object,
    onEmailChange: React.PropTypes.func,
    onBookingNumberChange: React.PropTypes.func,
    inLogin: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const onLogin = this.props.onLogin;
    eitherFunctionOrNot(onLogin).fold(
      () => {},
      () => onLogin(this.props.email, this.props.bookingNumber)
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mytrip-content__login-form">
        <div className="mytrip-content__login-form-row">
          <label htmlFor="email">Email:</label>
          <input
            className="mytrip-content__login-form-input-field"
            name="email"
            type="text"
            value={this.props.email}
            onChange={this.props.onEmailChange}
          />
        </div>
        <div className="mytrip-content__login-form-row">
          <label htmlFor="bookingNumber">Booking number:</label>
          <input
            className="mytrip-content__login-form-input-field"
            name="bookingNumber"
            type="password"
            value={this.props.bookingNumber}
            onChange={this.props.onBookingNumberChange}
          />
        </div>
        <div className="mytrip-content__login-form-row">
          <button type="submit">
            Login
          </button>
        </div>
        {this.props.error &&
          this.props.error.message &&
          <div className="mytrip-content__error">
            {this.props.error.message}
          </div>}
      </form>
    );
  }
}
