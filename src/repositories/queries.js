function addRowLockOnFlights(flightId) {
  return `SELECT * FROM Flights WHERE id = ${flightId} FOR UPDATE;`;
}

module.exports = {
  addRowLockOnFlights,
};
