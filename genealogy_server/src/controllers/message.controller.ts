/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/api-error";
import { ConversationRole } from "~/utils/type";
import conversationModel from "~/models/conversation.schema";
import messageModel from "~/models/message.schema";
import { sendSuccessResponse } from "~/utils/api-response";
import userModel from "~/models/user.schema";

const messageController = {
  createMessage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let newMessage;
      const senderId = req.user.id;
      const { receiverId, conversationId, messageType, content } = req.body;
      const file = req.file;

      const payload: any = {
        conversation: conversationId,
        sender: senderId,
        ...(content && { content }), // Thêm content nếu có
        ...(file && { file: file.path }), // Thêm file nếu có
      };

      const createAndUpdateMessage = async (
        conversationId: string,
        newPayload: any
      ) => {
        const newMessage = await messageModel.create(newPayload);
        await conversationModel.findByIdAndUpdate(conversationId, {
          $set: {
            lastMessage: newMessage.id,
          },
        });
        return newMessage;
      };

      if (messageType === ConversationRole.GROUP) {
        newMessage = await createAndUpdateMessage(conversationId, payload);
      } else {
        if (conversationId) {
          newMessage = await createAndUpdateMessage(conversationId, payload);
        } else if (receiverId) {
          // Tìm cuộc trò chuyện hiện tại
          let conversation = await conversationModel.findOne({
            members: { $size: 2, $all: [receiverId, senderId] },
          });

          if (conversation) {
            newMessage = await createAndUpdateMessage(conversation.id, payload);
          } else {
            const newConversation = await conversationModel.create({
              type: ConversationRole.SINGLE,
              members: [senderId, receiverId],
            });
            payload.conversation = newConversation.id;
            newMessage = await createAndUpdateMessage(
              newConversation.id,
              payload
            );
          }
        }
      }

      return sendSuccessResponse(
        res,
        "Gửi tin nhắn thành công",
        { newMessage },
        StatusCodes.CREATED
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }

      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  getConversation: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { page = 1, limit = 1000 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      const user = await userModel.findById(userId).exec();
      if (!user) {
        new ApiError(StatusCodes.BAD_REQUEST, "Khong tim thay user");
      }

      let tribeGroupConversation: any;
      if (page == 1) {
        tribeGroupConversation = await conversationModel.findOne({
          tribe: user?.tribe,
          type: ConversationRole.GROUP,
        });
      }

      const conversations = await conversationModel
        .find({
          type: ConversationRole.SINGLE,
          members: { $all: [userId] },
        })
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(Number(limit));

      const totalConversations = await conversationModel.countDocuments({
        type: ConversationRole.SINGLE,
        members: { $all: [userId] },
      });
      const totalPages = Math.ceil(totalConversations / Number(limit));
      const pagingResponse = {
        data: [tribeGroupConversation, ...conversations],
        meta: {
          page,
          limit,
          total: totalConversations,
          totalPages,
        },
      };
      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
        { pagingResponse },
        StatusCodes.CREATED
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }

      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  getMessage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const conversationId = req.params.id;
      const { page = 1, limit = 1000 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      const messages = await messageModel
        .find({
          conversation: conversationId,
        })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .exec();

      const totalMessages = await messageModel.countDocuments({
        conversation: conversationId,
      });
      const totalPages = Math.ceil(totalMessages / Number(limit));
      const pagingResponse = {
        data: [...messages],
        meta: {
          page,
          limit,
          total: totalMessages,
          totalPages,
        },
      };
      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
        { pagingResponse },
        StatusCodes.CREATED
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }

      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
};

export default messageController;
