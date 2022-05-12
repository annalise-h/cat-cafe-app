const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const catController = require("../controllers/catController");
const reservationController = require("../controllers/reservationController");

router.post("/admin/register", adminController.register);

router.post("/admin/login", adminController.login);
router.get("/admin/logout", adminController.logout);

router.get("/cats", catController.getCats);
router.get("/cats/:id", catController.getOneCat);
router.post("/cats", catController.createCat);
router.put("/cats/:id", catController.updateCat);
router.delete("/cats/:id", catController.deleteCat);

router.get("/reservations", reservationController.getReservations);
router.get("/reservations/:id", reservationController.getOneReservation);
router.post("/reservations", reservationController.createReservation);
router.put("/reservations/:id", reservationController.updateReservation);
router.delete("/reservations/:id", reservationController.deleteReservation);

module.exports = router;
