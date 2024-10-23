"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const environment_1 = __importDefault(require("../configs/environment"));
const errorHandler = (err, req, res, next) => {
    if (!err.statusCode) {
        err.statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    }
    const responseError = {
        statusCode: err.statusCode,
        message: err.message || http_status_codes_1.StatusCodes[err.statusCode],
        stack: environment_1.default.BUILD_MODE === "dev" ? err.stack : undefined,
    };
    // Trả về phản hồi lỗi
    res.status(err.statusCode).json(responseError);
};
exports.default = errorHandler;
