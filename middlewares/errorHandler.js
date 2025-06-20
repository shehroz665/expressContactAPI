const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : constants.SERVER_ERROR;
  const errorTitles = {
    [constants.VALIDATION_ERROR]: "Validation Error",
    [constants.UNAUTHORIZED]: "Unauthorized",
    [constants.FORBIDDEN]: "Forbidden",
    [constants.NOT_FOUND]: "Not Found",
    [constants.SERVER_ERROR]: "Internal Server Error",
  };
  const title = errorTitles[statusCode] || "Unknown Error";
 
  res.status(statusCode).json({
      title: title,
      message: err.message,
      stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

module.exports = errorHandler;
