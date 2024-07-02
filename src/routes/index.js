const express = require("express");
const v1Routes = require("./v1");

// import your routes

const router = express.Router();

// below is the example of how to use the router
router.use("/v1", v1Routes);

export default router;
