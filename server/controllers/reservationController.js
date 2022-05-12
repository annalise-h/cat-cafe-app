const mongoose = require("mongoose");
const Reservation = mongoose.model("Reservation");

exports.getReservations = async (req, res) => {
  try {
    const reservation = await Reservation.find();
    res.json(reservation);
  } catch (e) {
    console.log(e.message);
  }
};

exports.getOneReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.json(reservation);
  } catch (e) {
    console.log(e.message);
  }
};

exports.createReservation = async (req, res) => {
  const resDate = req.body.reservationDate;
  const resTime = req.body.reservationTime;

  const fullResTime = new Date(`${resDate} ${resTime}:`);

  try {
    const reservation = await Reservation.create({
      reservationDate: fullResTime,
      clientName: req.body.name,
      clientEmail: req.body.email,
    });
  } catch (e) {
    console.log(e.message);
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const newReservationBody = req.body;
    newReservationBody.updatedAt = Date.now();
    const updatedReservation = await Reservation.findOneAndUpdate(
      { _id: req.params.id },
      newReservationBody,
      {
        returnDocument: "after",
      }
    );

    res.json(updatedReservation);
  } catch (e) {
    console.log(e.message);
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.deleteOne({
      _id: req.params.id,
    });
    res.json(reservation);
  } catch (e) {
    console.log(e.message);
  }
};
