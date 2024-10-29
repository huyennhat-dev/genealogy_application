/**
 * Author: Jinn
 * Date: 2024-10-30
 */

import { Router } from "express";
import { tribeController } from "../controllers";
import authenticateJWT from "../middleware/authenticate-jwt";
import permission from "../middleware/permission";
import { Role } from "../utils/type";
import { upload } from "~/middleware/multer";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /tribe/{id}:
   *    get:
   *      tags: [Tribe]
   *      summary: Get all tribes
   *      parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The user ID
   *      responses:
   *        200:
   *          description: OK
   */
  .get("/:id", authenticateJWT, tribeController.getTribe)

  /**
   *  @swagger
   *  /tribe:
   *    put:
   *      tags: [Tribe]
   *      summary: Update tribe info
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                name:
   *                    type: string
   *                address:
   *                    type: string
   *                description:
   *                    type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .put(
    "/",
    authenticateJWT,
    permission([Role.LEADER]),
    tribeController.updateTribe
  )

  /**
   *  @swagger
   *  /tribe/update-permission:
   *    put:
   *      tags: [Tribe]
   *      summary: Update member permission
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                role:
   *                    type: string
   *                    enum:
   *                        - MEMBER
   *                        - ADMIN
   *                memberId:
   *                    type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .put(
    "/update-permission",
    authenticateJWT,
    permission([Role.LEADER]),
    tribeController.updatePermission
  )

  /**
   *  @swagger
   *  /tribe/create-tribe-tree:
   *    post:
   *      tags: [Tribe]
   *      summary: Create tribe tree
   *      requestBody:
   *        required: true
   *        content:
   *          multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                fullName:
   *                  type: string
   *                address:
   *                  type: string
   *                gender:
   *                  type: string
   *                  enum:
   *                    - MALE
   *                    - FEMALE
   *                    - OTHER
   *                dateOfBirth:
   *                  type: string
   *                  format: date
   *                dateOfDeath:
   *                  type: string
   *                  format: date
   *                description:
   *                  type: string
   *                parent:
   *                  type: string
   *                couple:
   *                  type: string
   *                avatar:
   *                  type: string
   *                  format: binary
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/create-tribe-tree",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    upload.single("avatar"),
    tribeController.createTribeTree
  );
export default router;
