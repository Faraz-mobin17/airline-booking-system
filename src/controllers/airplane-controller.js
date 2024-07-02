const { StatusCodes } = require("http-status-codes");
const { AirplaceService } = require("../services");
const { ApiError, ApiResponse } = require("../utils");

async function createAirplane(req, res) {
  try {
    console.log("inside controller");
    const airplane = await AirplaceService.createAirplane({
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

module.exports = {
  createAirplane,
};
