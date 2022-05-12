import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import { cyan } from "@mui/material/colors";

import "../css/HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <div className="text-container">
          <h1 className=""> Welcome to Anna's Cat Cafe</h1>
          <Link to="/reservation" className="home-link">
            <Button
              sx={{
                m: 1,
                color: cyan[50],
                bgcolor: cyan[900],
                opacity: 0.8,
              }}
              id="make-reservation-btn"
              className="home-btn"
              variant="contained"
              color="secondary"
              disableElevation
            >
              Make a Reservation
            </Button>
          </Link>
          <Link to="/see-cats" className="home-link">
            <Button
              sx={{
                m: 1,
                color: cyan[50],
                bgcolor: cyan[900],
                opacity: 0.8,
              }}
              id="meet-cats-btn"
              className="home-btn"
              variant="contained"
              color="secondary"
              disableElevation
            >
              Meet the Cats
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
