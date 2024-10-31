/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { Router } from "express";
import { eventController } from "../controllers";
import authenticateJWT from "../middleware/authenticate-jwt";
import { upload } from "~/middleware/multer";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /event/create-event:
   *    post:
   *      tags: [Event]
   *      summary: Create event
   *      requestBody:
   *        required: true
   *        content:
   *          multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                title:
   *                  type: string
   *                desc:
   *                  type: string
   *                startDate:
   *                  type: string
   *                  format: date
   *                endDate:
   *                  type: string
   *                  format: date
   *                file:
   *                  type: string
   *                  format: binary
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/create-event",
    upload.single("file"),
    eventController.createEvent
  )

  /**
   *  @swagger
   *  /event/update-event/{id}:
   *    put:
   *      tags: [Event]
   *      summary: Update event
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *            example: 1
   *      requestBody:
   *        required: true
   *        content:
   *          multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                title:
   *                  type: string
   *                desc:
   *                  type: string
   *                startDate:
   *                  type: string
   *                  format: date
   *                endDate:
   *                  type: string
   *                  format: date
   *                file:
   *                  type: string
   *                  format: binary
   *      responses:
   *        200:
   *          description: OK
   */
  .put(
    "/update-event/:id",
    upload.single("file"),
    eventController.createEvent
  )

  /**
   *  @swagger
   *  /event/get-event/{id}:
   *    get:
   *      tags: [Event]
   *      summary: Get event
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *            example: 1
   *      responses:
   *        200:
   *          description: OK
   */
  .get(
    "/get-event/:id",
    eventController.getEvent
  )

  /**
   *  @swagger
   *  /event/delete-event/{id}:
   *    delete:
   *      tags: [Event]
   *      summary: Delete event
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *            example: 1
   *      responses:
   *        200:
   *          description: OK
   */
  .delete(
    "/delete-event/:id",
    eventController.deleteEvent
  )
export default router;
