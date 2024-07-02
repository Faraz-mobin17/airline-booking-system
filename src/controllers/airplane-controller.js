const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { ApiError, ApiResponse } = require("../utils");

async function createAirplane(req, res) {
  try {
    console.log("inside controller");
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          airplane,
          "Airplane created successfully"
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

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airplanes,
          "Airplanes fetched successfully"
        )
      );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          error,
          "Cannot fetch the data of all the airplanes"
        )
      );
  }
}

async function getAirplane(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplane(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airplanes,
          "Airplane fetched successfully"
        )
      );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          error,
          "Cannot fetch the data of all the airplanes"
        )
      );
  }
}

async function destroyAirplane(req, res) {
  try {
    const airplane = await AirplaneService.destroyAirplane(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          airplane,
          "Airplane deleted successfully"
        )
      );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          error,
          "Cannot delete the airplane"
        )
      );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};
