const { StatusCodes } = require("http-status-codes");
const { ApiError } = require("../utils");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber || !req.body.capacity) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(
          StatusCodes.BAD_REQUEST,
          null,
          "Model number and capacity are required"
        )
      );
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
