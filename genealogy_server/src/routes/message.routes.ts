/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { Router } from "express";
import { messageController } from "../controllers";
import authenticateJWT from "../middleware/authenticate-jwt";
import { upload } from "~/middleware/multer";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /message/create-message:
   *    post:
   *      tags: [Message]
   *      summary: Create message
   *      requestBody:
   *        required: true
   *        content:
   *          multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                receiverId:
   *                  type: string
   *                conversationId:
   *                  type: string
   *                messageType:
   *                  type: string
   *                  enum:
   *                    - GROUP
   *                    - SINGLE
   *                content:
   *                  type: string
   *                file:
   *                  type: string
   *                  format: binary
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/create-message",
    upload.single("file"),
    messageController.createMessage
  )

  /**
   *  @swagger
   *  /message/get-conversation:
   *    get:
   *      tags: [Message]
   *      summary: Get conversation
   *      parameters:
   *        - in: query
   *          name: page
   *          required: true
   *          description: Page number for pagination
   *          schema:
   *            type: integer
   *            example: 1
   *        - in: query
   *          name: limit
   *          required: true
   *          description: Number of items per page
   *          schema:
   *            type: integer
   *            example: 24
   *      responses:
   *        200:
   *          description: OK
   */
  .get("/get-conversation", messageController.getConversation)

  /**
 *  @swagger
 *  /message/get-message/{id}:
 *    get:
 *      tags: [Message]
 *      summary: Get message by conversation
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: The conversation ID
 *          schema:
 *            type: string
 *            example: "5"  # Sử dụng dấu ngoặc kép để đảm bảo rằng ID được hiểu là chuỗi
 *        - in: query
 *          name: page
 *          required: true
 *          description: Page number for pagination
 *          schema:
 *            type: integer
 *            example: 1
 *        - in: query
 *          name: limit
 *          required: true
 *          description: Number of items per page
 *          schema:
 *            type: integer
 *            example: 24
 *      responses:
 *        200:
 *          description: OK
 *        404:
 *          description: Conversation not found
 *        500:
 *          description: Internal Server Error
 */
.get("/get-message/:id", messageController.getMessage);

export default router;
