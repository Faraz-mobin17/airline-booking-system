const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { ApiError, ApiResponse } = require("../utils");

async function createCity(req, res) {
  try {
    console.log("inside controller");
    const city = await CityService.createCity({
      name: req.body.name,
    });

    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(StatusCodes.CREATED, city, "city created successfully")
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
  createCity,
};
