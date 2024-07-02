const { createLogger, format, transport } = require("winston");
const { combine, timestamp, label, printf } = require("winston-format");

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const Logger = createLogger({
  level: "info",
  format: combine(
    label({ label: "info" }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    myFormat
  ),
  transports: [
    new transport.Console(),
    new transport.File({ filename: "logs/info.log" }),
  ],
});

module.exports = Logger;
