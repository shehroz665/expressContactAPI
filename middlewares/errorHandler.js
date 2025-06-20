const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : constants.SERVER_ERROR;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.status(constants.VALIDATION_ERROR).json({
        title: "Validation Error",
        message: err.message,
        stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      res.status(constants.UNAUTHORIZED).json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
      });
      break;

    case constants.FORBIDDEN:
      res.status(constants.FORBIDDEN).json({
        title: "Forbidden",
        message: err.message,
        stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.status(constants.NOT_FOUND).json({
        title: "Not Found",
        message: err.message,
        stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
      });
      break;

    case constants.SERVER_ERROR:
      res.status(constants.SERVER_ERROR).json({
        title: "Internal Server Error",
        message: err.message,
        stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
      });
      break;

    default:
      console.log("No error, all good!");
      break;
  }
};

module.exports = errorHandler;
