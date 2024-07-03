const { AirportRepository } = require("../repositories");
const { ApiError } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const airportRepository = new AirportRepository();

async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Internal server error"
    );
  }
}

async function getAirports() {
  try {
    console.log("inside airport service");
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot fetch the data of all the airports"
    );
  }
}

async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id);

    return airport;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot fetch the data of the airport"
    );
  }
}

async function destroyAirport(id) {
  try {
    const airport = await airportRepository.destroy(id);
    return airport;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot delete the airport"
    );
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
};
