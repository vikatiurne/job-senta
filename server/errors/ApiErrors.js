class ApiErrors extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message, errors = []) {
    return new ApiErrors(404, message, errors);
  }

  static internal(message) {
    return new ApiErrors(500, message);
  }

  static forbidden(message) {
    return new ApiErrors(403, message);
  }
}

module.exports = ApiErrors;
