const express = require("express");

// const { infoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-route");
const citiesRoutes = require("./city-route");
const airportRoutes = require("./airport-route");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);
// router.get("/infos", infoController);
router.use("/cities", citiesRoutes);
router.use("/airports", airportRoutes);

module.exports = router;
