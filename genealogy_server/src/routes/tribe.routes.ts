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
   *  /tribe/get-tribe/{id}:
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
  .get("/get-tribe/:id", authenticateJWT, tribeController.getTribe)

  /**
   *  @swagger
   *  /tribe/update-tribe:
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
    "/update-tribe",
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
  )

  /**
   *  @swagger
   *  /tribe/update-tribe-tree-member/{id}:
   *    put:
   *      tags: [Tribe]
   *      summary: Update tribe tree member
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
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
   *                avatar:
   *                  type: string
   *                  format: binary
   *      responses:
   *        200:
   *          description: "Cập nhật thành công"
   */
  .put(
    "/update-tribe-tree-member/:id",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    upload.single("avatar"),
    tribeController.updateTribeTreeMember
  )

  /**
   *  @swagger
   *  /tribe/get-tribe-tree:
   *    get:
   *      tags: [Tribe]
   *      summary: Retrieve the entire tribe tree structure from ancestor to descendants
   *      responses:
   *        200:
   *          description: Successfully retrieved tribe tree
   */
  .get("/get-tribe-tree", authenticateJWT, tribeController.getTribeTree)

  /**
   *  @swagger
   *  /tribe/get-tribe-tree:
   *    delete:
   *      tags: [Tribe]
   *      summary: Delete tree member
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Successfully retrieved tribe tree
   */
  .delete(
    "/delete-tree-member/:id",
    permission([Role.LEADER, Role.ADMIN]),
    authenticateJWT,
    tribeController.deleteTreeMember
  );

export default router;
