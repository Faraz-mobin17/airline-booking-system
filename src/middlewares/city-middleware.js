const { StatusCodes } = require("http-status-codes");
const { ApiError } = require("../utils");

function validateCityName(req, res, next) {
  if (!req.body.name) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(
          StatusCodes.BAD_REQUEST,
          null,
          "City named not found in the incoming request"
        )
      );
  }
  next();
}

module.exports = {
  validateCityName,
};
