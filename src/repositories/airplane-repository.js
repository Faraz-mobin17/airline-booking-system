class AirplaneRepository {
  constructor(model) {
    this.model = model;
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
