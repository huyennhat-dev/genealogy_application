"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const authenticate_jwt_1 = __importDefault(require("../middleware/authenticate-jwt"));
const router = (0, express_1.Router)();
router
    /**
   * @swagger
   * /auth/login:
   *   post:
   *     summary: Login user
   *     description: Login to the application and return a JWT token
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: Successful login
   *       401:
   *         description: Unauthorized
   */
    .post("/login", controllers_1.authController.login)
    .post("/register", controllers_1.authController.register)
    .get("/me", controllers_1.authController.getMe)
    .get("/user/:id", controllers_1.authController.getUser)
    .get("/logout", authenticate_jwt_1.default, controllers_1.authController.logout);
exports.default = router;
