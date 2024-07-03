const express = require("express");

const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");
const router = express.Router();

router.get("/", AirportController.getAirports);
router.get("/:id", AirportController.getAirport);
router.post(
  "/",
  AirportMiddlewares.validateAirportRequest,
  AirportController.createAirport
);
router.delete("/:id", AirportController.destroyAirport);

module.exports = router;
