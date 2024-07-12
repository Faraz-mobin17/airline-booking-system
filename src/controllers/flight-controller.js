const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { ApiError, ApiResponse } = require("../utils");

async function createFlight(req, res) {
  try {
    console.log("inside controller");
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          flight,
          "flight created successfully"
        )
      );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          error,
          "Unable to create a flight"
        )
      );
  }
}

async function getAllFlights(req, res) {
  try {
    const flights = await FlightService.getAllFlights(req.query);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          flights,
          "All flights fetched successfully"
        )
      );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          error,
          "Unable to fetch all flights"
        )
      );
  }
}

async function getFlight(req, res) {
  try {
    const flight = await FlightService.getFlight(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, flight, "Flight fetched successfully")
      );
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json(new ApiError(StatusCodes.NOT_FOUND, error, "Flight not found"));
  }
}
module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
};
