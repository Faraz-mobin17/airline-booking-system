const express = require("express");

const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

const router = express.Router();

router.get("/", FlightController.getAllFlights);
router.get("/:id", FlightController.getFlight);
router.post(
  "/",
  FlightMiddlewares.validateFlightRequest,
  FlightController.createFlight
);
router.patch(
  "/:id/seats",
  FlightMiddlewares.validateUpdateSeatsInput,
  FlightController.updateRemainingSeats
);
module.exports = router;
