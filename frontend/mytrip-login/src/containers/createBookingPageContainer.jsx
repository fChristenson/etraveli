import React, { Component } from "react";
import * as myTripAPI from "../services/myTripAPI";

export default function createBooking(CreateBookingPage) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleCreateBooking = this.handleCreateBooking.bind(this);
      this.state = {
        message: null
      };
    }

    handleCreateBooking(bookingNumber) {
      myTripAPI
        .createBooking(bookingNumber)
        .then(response => {
          this.setState({ message: response.msg });
        })
        .catch(e => {
          console.error(e);
        });
    }

    render() {
      return (
        <CreateBookingPage
          {...this.state}
          onCreateBooking={this.handleCreateBooking}
        />
      );
    }
  };
}
