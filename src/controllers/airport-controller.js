const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { ApiError, ApiResponse } = require("../utils");

async function createAirport(req, res) {
  try {
    console.log("inside controller");
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          airport,
          "airport created successfully"
        )
      );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          ErrorResponse,
          "Internal server error"
        )
      );
  }
}

async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airports,
          "airports fetched successfully"
        )
      );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          error,
          "Cannot fetch the data of all the airports"
        )
      );
  }
}

async function getAirport(req, res) {
  try {
    const airports = await AirportService.getAirport(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airports,
          "airport fetched successfully"
        )
      );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          error,
          "Cannot fetch the data of all the airports"
        )
      );
  }
}

async function destroyAirport(req, res) {
  try {
    const airport = await AirportService.destroyAirport(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(StatusCodes.OK, airport, "airport deleted successfully")
      );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          error,
          "Cannot delete the airport"
        )
      );
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
};
