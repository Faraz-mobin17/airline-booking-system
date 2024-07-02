const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Hello from v1",
    error: {},
    data: {},
  });
};

module.exports = { info };
