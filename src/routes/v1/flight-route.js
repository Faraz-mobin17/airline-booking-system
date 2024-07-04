const express = require("express");

const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

const router = express.Router();

router.get("/", FlightController.getAllFlights);

router.post(
  "/",
  FlightMiddlewares.validateFlightRequest,
  FlightController.createFlight
);

module.exports = router;
