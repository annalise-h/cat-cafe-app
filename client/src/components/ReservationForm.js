import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalOpenContext } from "../modalOpenContext";

import add from "date-fns/add";
import Calendar from "react-calendar";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { cyan } from "@mui/material/colors";
import "../css/ReservationForm.css";

const ReservationForm = () => {
  const modalOpenContext = useContext(ModalOpenContext);
  const [modalOpen, setModalOpen] = modalOpenContext;

  let tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  const [date, setDate] = useState(tomorrowDate);
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    findMinDate();
    findMaxDate();
  }, []);

  const onChange = (date) => {
    setDate(date);
  };

  const handleSelectChange = (event) => {
    const newTime = event.target.value;
    setTime(newTime);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalOpen(true);

    const formData = new FormData(e.target);
    try {
      await fetch("/reservations", {
        method: "POST",
        body: formData,
      });
    } catch (e) {
      console.log(e);
    }

    navigate("/see-cats");
  };

  const findMinDate = () => {
    const todayFullDate = new Date();
    const minDate = add(todayFullDate, { days: 1 });
    setMinDate(minDate);
  };

  const findMaxDate = () => {
    const todayFullDate = new Date();
    const maxDate = add(todayFullDate, { months: 2 });
    setMaxDate(maxDate);
  };

  return (
    <Container id="reservation-form-container">
      <form id="reservation-form" onSubmit={handleSubmit}>
        <p id="reservation-info" className="form-item">
          You can request a reservation to visit the Cat Cafe. A reservation
          will be a one hour time slot to meet and potentially adopt any of the
          lovely cats here at the cafe. <br />
          <br />A reservation at the cafe comes with a free beverage of choice!
        </p>
        <p id="reservation-info" className="form-item"></p>
        <FormControl className="form-item">
          <InputLabel htmlFor="name">Your Name</InputLabel>
          <Input id="your-name-input" name="name" required />
        </FormControl>
        <FormControl className="form-item">
          <InputLabel htmlFor="email">Your Email</InputLabel>
          <Input id="your-email-input" name="email" required />
        </FormControl>
        <Calendar
          onChange={onChange}
          value={date}
          minDate={minDate}
          maxDate={maxDate}
        />
        <p className="helper-text form-item">
          Note: reservations can only be made up to two months in advance
        </p>
        <FormControl className="form-item">
          <InputLabel htmlFor="reservationDate">Reservation Date</InputLabel>
          <Input
            id="reservation-date-input"
            name="reservationDate"
            value={date.toLocaleDateString()}
            required
          ></Input>
        </FormControl>
        <FormControl className="form-item">
          <InputLabel htmlFor="reservationTime">Reservation Time</InputLabel>
          <Select
            id="demo-simple-select"
            label="reservationTime"
            value={time}
            name="reservationTime"
            onChange={handleSelectChange}
            required
          >
            <MenuItem value={10}>10am</MenuItem>
            <MenuItem value={11}>11am</MenuItem>
            <MenuItem value={12}>12pm</MenuItem>
            <MenuItem value={13}>1pm</MenuItem>
            <MenuItem value={14}>2pm</MenuItem>
            <MenuItem value={15}>3pm</MenuItem>
            <MenuItem value={16}>4pm</MenuItem>
            <MenuItem value={17}>5pm</MenuItem>
            <MenuItem value={18}>6pm</MenuItem>
          </Select>
        </FormControl>

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
          type="submit"
        >
          Reserve!
        </Button>
      </form>
    </Container>
  );
};

export default ReservationForm;
