import React, { Component } from "react";
import { eitherFunctionOrNot } from "../../utils/generalUtils";

export default class CreateBookingPage extends Component {
  static propTypes = {
    error: React.PropTypes.object,
    onCreateBooking: React.PropTypes.func,
    message: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      bookingNumber: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBookingNumberChange = this.handleBookingNumberChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const onCreateBooking = this.props.onCreateBooking;
    eitherFunctionOrNot(onCreateBooking).fold(
      () => {},
      () => onCreateBooking(this.state.bookingNumber)
    );
  }

  handleBookingNumberChange(event) {
    this.setState({ bookingNumber: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mytrip-content__login-form">
        <div className="mytrip-content__login-form-row">
          <label htmlFor="bookingNumber">Booking number:</label>
          <input
            className="mytrip-content__login-form-input-field"
            name="bookingNumber"
            type="text"
            value={this.state.bookingNumber}
            onChange={this.handleBookingNumberChange}
          />
        </div>
        <div className="mytrip-content__login-form-row">
          <button type="submit">
            Create
          </button>
        </div>
        {this.props.message &&
          <div>
            {this.props.message}
          </div>}
      </form>
    );
  }
}
