import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationForm from "../components/ReservationForm";

class ReservationPage extends React.Component {
  render() {
    return (
      <div id="reservation-page">
        <Header />
        <ReservationForm />
        <Footer />
      </div>
    );
  }
}

export default ReservationPage;
