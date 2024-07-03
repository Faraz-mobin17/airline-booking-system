const { StatusCodes } = require("http-status-codes");
const { ApiError } = require("../utils");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if (!response) {
      throw new ApiError(StatusCodes.NOT_FOUND, null, "Airplane not found");
    }
    return response;
  }

  async get(data) {
    const response = await this.model.findByPK(data);
    if (!response) {
      throw new ApiError(
        StatusCodes.NOT_FOUND,
        null,
        "Airplane with the given ID not found"
      );
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async update(id, data) {
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return response;
  }
}

module.exports = CrudRepository;