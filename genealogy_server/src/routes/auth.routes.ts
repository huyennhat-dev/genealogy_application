import { Router } from "express";
import { authController } from "~/controllers";
import authenticateJWT from "~/middleware/authenticate-jwt";

const router = Router();
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
 *       400:
 *         description: Bad request
 */
  .post("/login", authController.login)
  .post("/register", authController.register)
  .get("/me", authController.getMe)
  .get("/user/:id", authController.getUser)
  .get("/logout", authenticateJWT, authController.logout);

export default router;
