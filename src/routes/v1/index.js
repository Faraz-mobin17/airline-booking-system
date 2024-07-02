const express = require("express");

const { infoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-route");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);
router.get("/infos", infoController);

export default router;
