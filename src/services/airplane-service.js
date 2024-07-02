const { AirplaneRepository } = require("../repositories");
const { ApiError } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const airplaneRepository = new AirplaneRepository();

async function createAirplane(airplane) {
  try {
    const airplane = await airplaneRepository.create(airplane);
    return airplane;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Internal server error"
    );
  }
}

module.exports = {
  createAirplane,
};
