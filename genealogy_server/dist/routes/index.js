"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
// Nhập khẩu các routes khác
const router = (0, express_1.Router)();
// Sử dụng các route
router.use('/auth', auth_routes_1.default);
// Sử dụng các routes khác
exports.default = router;
