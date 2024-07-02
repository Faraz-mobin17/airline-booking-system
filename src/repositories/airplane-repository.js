const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");
class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
  async createAirplane(airplane) {
    try {
      const response = await this.model.create(airplane);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async destroyAirplane(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
