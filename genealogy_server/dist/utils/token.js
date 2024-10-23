"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = __importDefault(require("../configs/environment"));
const generateAccessToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, environment_1.default.JWT_SECRET, {
        expiresIn: environment_1.default.JWT_EXPIRES_IN,
    });
};
exports.generateAccessToken = generateAccessToken;
const verifyAccessToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, environment_1.default.JWT_SECRET);
    }
    catch (error) {
        return null;
    }
};
exports.verifyAccessToken = verifyAccessToken;
