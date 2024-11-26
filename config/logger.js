// config/logger.js
const winston = require('winston');
const path = require('path');

// Custom color configuration
const customColors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'cyan'
};

// Add colors to winston
winston.addColors(customColors);

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
  })
);

const logger = winston.createLogger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
  },
  format: logFormat,
  transports: [
    new winston.transports.Console({
      level: 'debug'
    }),
    new winston.transports.File({
      filename: path.join('logs', 'error.log'),
      level: 'error'
    }),
    new winston.transports.File({
      filename: path.join('logs', 'combined.log')
    })
  ]
});

module.exports = logger;