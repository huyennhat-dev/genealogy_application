"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const constants_1 = require("../utils/constants");
const environment_1 = __importDefault(require("../configs/environment"));
const http_status_codes_1 = require("http-status-codes");
const api_error_1 = __importDefault(require("../utils/api-error"));
exports.corsOptions = {
    origin: function (origin, callback) {
        if (!origin && environment_1.default.BUILD_MODE === "dev") {
            return callback(null, true);
        }
        if (constants_1.WHITELIST_DOMAINS.includes(origin)) {
            return callback(null, true);
        }
        return callback(new api_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, `${origin} not allowed by our CORS Policy.`));
    },
    optionsSuccessStatus: 200,
    credentials: true,
};
