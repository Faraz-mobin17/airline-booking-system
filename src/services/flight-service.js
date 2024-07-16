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
  let sortFilter = [];
  const ENDING_TRIP_TIME = "23:59:59";
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

  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }
  if (query.tripDate) {
    customFilter.departureDate = {
      [Op.between]: [query.tripDate, query.tripDate + ENDING_TRIP_TIME],
    };
  }
  if (query.sort) {
    const params = query.sort.split(",");
    const sortFilters = params.map((param) => param.split("_"));
    sortFilter = sortFilters;
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

async function getFlight(id) {
  try {
    const flight = await flightRepository.get(id);
    return flight;
  } catch (error) {
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      error,
      "Cannot fetch the data of the flight"
    );
  }
}

async function updateRemainingSeats(data) {
  try {
    const response = await flightRepository.updateRemainingSeats(
      data.flightId,
      data.seats,
      data.dec
    );
    return response;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot update the remaining seats of the flight"
    );
  }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateRemainingSeats,
};
