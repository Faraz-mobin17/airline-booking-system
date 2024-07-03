const { createLogger, format, transport, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

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
    new transports.Console(),
    new transports.File({ filename: "logs/info.log" }),
  ],
});

module.exports = Logger;
