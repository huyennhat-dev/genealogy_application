"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../utils/token");
const api_error_1 = __importDefault(require("../utils/api-error"));
const http_status_codes_1 = require("http-status-codes");
const authenticateJWT = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        return next(new api_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, http_status_codes_1.ReasonPhrases.UNAUTHORIZED));
    }
    const token = authorizationHeader.split(" ")[1];
    const user = (0, token_1.verifyAccessToken)(token);
    if (!user) {
        return next(new api_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, http_status_codes_1.ReasonPhrases.UNAUTHORIZED));
    }
    req.user = user;
    next();
};
exports.default = authenticateJWT;
