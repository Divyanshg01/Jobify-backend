import { StatusCodes } from "http-status-codes";

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.StatusCodes = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.StatusCodes = StatusCodes.BAD_REQUEST;
  }
}
export class UnAuthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnAuthenticatedError";
    this.StatusCodes = StatusCodes.UNAUTHORIZED;
  }
}
export class UnAuthorized extends Error {
  constructor(message) {
    super(message);
    this.name = "UnAuthorized";
    this.StatusCodes = StatusCodes.FORBIDDEN;
  }
}
