import React, { Component } from "react";
import { eitherFunctionOrNot } from "../../utils/generalUtils";

export default class CreateBookingPage extends Component {
  static propTypes = {
    error: React.PropTypes.object,
    bookingNumber: React.PropTypes.string,
    onCreateBooking: React.PropTypes.func,
    onChange: React.PropTypes.func,
    message: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const onCreateBooking = this.props.onCreateBooking;
    eitherFunctionOrNot(onCreateBooking).fold(
      () => {},
      () => onCreateBooking(this.props.bookingNumber)
    );
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
            value={this.props.bookingNumber}
            onChange={this.props.onChange}
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
