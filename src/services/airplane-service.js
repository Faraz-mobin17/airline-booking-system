const { AirplaneRepository } = require("../repositories");
const { ApiError } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Internal server error"
    );
  }
}

async function getAirplanes() {
  try {
    console.log("inside airplane service");
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot fetch the data of all the airplanes"
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);

    return airplane;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot fetch the data of the airplane"
    );
  }
}

async function destroyAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id);
    return airplane;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot delete the airplane"
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};
