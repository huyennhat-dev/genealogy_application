/**
 * Author: Jinn
 * Date: 2024-10-30
 */

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/api-error";
import tribeModel from "../models/tribe.schema";
import { sendSuccessResponse } from "../utils/api-response";
import userModel from "~/models/user.schema";
import infoModel from "~/models/info.schema";

const tribeController = {
  /**
   * Lays the tribe data of the authenticated user.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the user is not found or if an internal server error occurs.
   * @returns {Response} - Returns a success response with the tribe data if found.
   */
  getTribe: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const tribe = await tribeModel
        .findById(id)
        .populate({
          path: "leader",
          select: "-password",
          populate: {
            path: "info",
          },
        })
        .populate("members")
        .exec();

      if (!tribe) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
        tribe,
        StatusCodes.OK
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
  /**
   * Updates the tribe information of the authenticated user.
   *
   * @param {Request} req - The Express request object, containing tribe update details such as name, address, and description in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the tribe is not found or if an internal server error occurs.
   * @returns {Response} - Returns a success response with the updated tribe information if the update is successful.
   */
  updateTribe: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.user.id;
      const { name, address, description } = req.body;

      const updateData: any = {};
      if (name) updateData.name = name;
      if (address) updateData.address = address;
      if (description) updateData.description = description;

      const user = await userModel.findById(id).exec();
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      const tribe = await tribeModel
        .findByIdAndUpdate(user?.tribe, { $set: updateData }, { new: true })
        .populate({
          path: "leader",
          select: "-password",
        })
        .exec();

      if (!tribe) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      return sendSuccessResponse(
        res,
        "Cập nhật dữ liệu thành công",
        tribe,
        StatusCodes.OK
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

  /**
   * Cập nhật vai trò của 1 thành viên trong gia tộc
   * @param {Request} req - The Express request object, containing role and memberId in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the user is not found, if the member is not a member of the tribe, or if an internal server error occurs.
   * @returns {Response} - Returns a success response with the updated user information if the update is successful.
   */
  updatePermission: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { role, memberId } = req.body;

      const leader = await userModel.findById(req.user.id).exec();

      const user = await userModel
        .findById(memberId)
        .select("-password")
        .exec();

      if (!leader || !user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      if (leader.tribe.toString() != user.tribe.toString()) {
        throw new ApiError(
          StatusCodes.BAD_REQUEST,
          "Member này không thuộc gia tộc của bạn"
        );
      }

      user.role = role;
      await user.save();

      return sendSuccessResponse(
        res,
        "Cập nhật dữ liệu thành công",
        user,
        StatusCodes.OK
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

  /**
   * Creates a new tree for a tribe.
   *
   * @param {Request} req - The Express request object, containing information about the tree to be created in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the required information is missing or if the tribe is not found.
   * @returns {Response} - Returns a success response with the created tree if the operation is successful.
   */
  createTribeTree: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.user.id;
      const {
        fullName,
        address,
        gender,
        dateOfBirth,
        dateOfDeath,
        description,
        parent,
        couple,
      } = req.body;

      const avatar = req.file;
      const tribe = await tribeModel.findOne({ leader: id }).exec();
      if (!tribe) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Gia tộc không tồn tại");
      }
      if (!fullName) {
        throw new ApiError(
          StatusCodes.BAD_REQUEST,
          "fullName không được để trống"
        );
      }

      const memberInfo: any = {
        fullName,
        address,
        gender,
        dateOfBirth,
        dateOfDeath,
        description,
        parent,
        couple: couple ? [couple] : undefined,
        avatar: avatar ? avatar.path : undefined,
      };

      const newTreeMember = await infoModel.create({
        ...memberInfo,
        tribe: tribe.id,
      });

      if (parent) {
        const parentMember = await infoModel
          .findByIdAndUpdate(
            parent,
            {
              $addToSet: {
                children: newTreeMember.id,
              },
            },
            { new: true, runValidators: true }
          )
          .exec();

        if (!parentMember) {
          throw new ApiError(
            StatusCodes.NOT_FOUND,
            "Không tìm thấy thành viên cha"
          );
        }
      } else if (couple) {
        const coupleMember = await infoModel
          .findByIdAndUpdate(
            couple,
            {
              $addToSet: {
                couple: newTreeMember.id,
              },
            },
            { new: true, runValidators: true }
          )
          .exec();

        if (!coupleMember) {
          throw new ApiError(
            StatusCodes.NOT_FOUND,
            "Không tìm thấy thành vien couple"
          );
        }
      }

      return sendSuccessResponse(
        res,
        "Tạo dữ liệu thành công",
        newTreeMember,
        StatusCodes.OK
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

export default tribeController;
