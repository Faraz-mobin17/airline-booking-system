const { StatusCodes } = require("http-status-codes");
const { ApiError } = require("../utils");

function validateAirportRequest(req, res, next) {
  if (!req.body.name) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(StatusCodes.BAD_REQUEST, null, "airport name not found")
      );
  }
  if (!req.body.code) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(StatusCodes.BAD_REQUEST, null, "airport code not found")
      );
  }

  if (!req.body.cityId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(StatusCodes.BAD_REQUEST, null, "airport cityId not found")
      );
  }

  next();
}

module.exports = {
  validateAirportRequest,
};
