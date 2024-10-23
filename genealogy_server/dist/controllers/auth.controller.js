"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const authController = {
    register: (req, res) => {
        return res.status(http_status_codes_1.StatusCodes.CONFLICT).send("register");
    },
    login: (req, res) => {
        res.send("login");
    },
    logout: (req, res) => {
        res.send("logout");
    },
    getMe: (req, res) => {
        res.send("getMe");
    },
    getUser: (req, res) => {
        res.send("getUser");
    },
};
exports.default = authController;
