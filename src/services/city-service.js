const { CityRepository } = require("../repositories");
const { ApiError } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    throw new ApiError(
      StatusCodes.CONFLICT,
      error,
      `Duplicate Entry for City ${error.value}`
    );
  }
}

async function getcitys() {
  try {
    console.log("inside city service");
    const citys = await cityRepository.getAll();
    return citys;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot fetch the data of all the citys"
    );
  }
}

async function getcity(id) {
  try {
    const city = await cityRepository.get(id);

    return city;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot fetch the data of the city"
    );
  }
}

async function destroycity(id) {
  try {
    const city = await cityRepository.destroy(id);
    return city;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error,
      "Cannot delete the city"
    );
  }
}

module.exports = {
  createCity,
  getcitys,
  getcity,
  destroycity,
};
