const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../errors/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber || !req.body.capacity) {
    ErrorResponse.message =
      "Something went wrong while creating airplane. Please try again later.";
    ErrorResponse.error = { message: "Bad Request" };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
