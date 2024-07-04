const { FlightRepository } = require("../repositories");
const { ApiError } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "cannot create a flight"
    );
  }
}

async function getAllFlights(query) {
  let customFilter = {};
  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
  }

  if (query.price) {
    [maxPrice, minPrice] = query.price.split("-");
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice == undefined ? 20000 : maxPrice],
    };
  }
  try {
    const flights = await flightRepository.getAllFlights(customFilter);
    return flights;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot fetch the data of all the flights"
    );
  }
}

module.exports = {
  createFlight,
  getAllFlights,
};
