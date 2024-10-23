"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError extends Error {
    statusCode;
    constructor(statusCode, message) {
        super(message);
        this.name = `[ApiError] ${this.message}`;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ApiError;
