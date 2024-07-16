const { StatusCodes } = require("http-status-codes");
const { ApiError } = require("../utils");

function validateFlightRequest(req, res, next) {
  if (!req.body.flightNumber) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(StatusCodes.BAD_REQUEST, null, "flight number not found")
      );
  }
  if (!req.body.airplaneId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(StatusCodes.BAD_REQUEST, null, "airplaneId not found")
      );
  }
  if (!req.body.departureAirportId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(
          StatusCodes.BAD_REQUEST,
          null,
          "departureAirportId not found"
        )
      );
  }
  if (!req.body.arrivalAirportId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(
          StatusCodes.BAD_REQUEST,
          null,
          "arrivalAirportId not found"
        )
      );
  }
  if (!req.body.arrivalTime) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(StatusCodes.BAD_REQUEST, null, "arrivalTime not found")
      );
  }
  if (!req.body.departureTime) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(StatusCodes.BAD_REQUEST, null, "departureTime not found")
      );
  }
  if (!req.body.price) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(new ApiError(StatusCodes.BAD_REQUEST, null, "price not found"));
  }
  if (!req.body.boardingGate) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(StatusCodes.BAD_REQUEST, null, "boardingGate not found")
      );
  }

  if (!req.body.totalSeats) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        new ApiError(StatusCodes.BAD_REQUEST, null, "totalSeats not found")
      );
  }

  next();
}

function validateUpdateSeatsInput(req, res, next) {
  if (!req.body.seats) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(new ApiError(StatusCodes.BAD_REQUEST, null, "seats not found"));
  }
  next();
}

module.exports = {
  validateFlightRequest,
  validateUpdateSeatsInput,
};
