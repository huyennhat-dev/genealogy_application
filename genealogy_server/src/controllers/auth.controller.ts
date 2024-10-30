/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
import userModel from "~/models/user.schema";
import ApiError from "~/utils/api-error";
import { generateUniqueTribeCode } from "~/utils/generate";
import tribeModel from "~/models/tribe.schema";
import infoModel from "~/models/info.schema";
import { generateAccessToken } from "~/utils/token";
import { sendSuccessResponse } from "~/utils/api-response";
import fs from "fs";
import { oldFilePath } from "~/middleware/multer";

const authController = {
  /**
   * Registers a new user and assigns them to a tribe based on the role.
   * If the user is a leader, a new tribe is created. If the user is a member,
   * they are added to an existing tribe. Generates an access token upon successful registration.
   *
   * @param {Request} req - The Express request object, containing user details such as phoneNumber, password, fullName, role, tribeCode, and tribeName in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if required information is missing, if the phone number already exists, or if the tribe is not found.
   * @returns {Response} - Returns a success response with an access token and user role if registration is successful.
   */
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { phoneNumber, password, fullName, role, tribeCode, tribeName } =
        req.body;

      if (!phoneNumber || !password || !role) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Thiếu thông tin bắt buộc");
      }

      const phoneNumberExists = await userModel.findOne({ phoneNumber }).exec();

      if (phoneNumberExists) {
        throw new ApiError(StatusCodes.CONFLICT, "Số điện thoại đã tồn tại");
      }

      if (role !== "MEMBER" && role !== "LEADER") {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Vai trò không hợp lệ");
      }

      if (role === "LEADER" && !tribeName) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Thiếu tên của dòng họ");
      } else if (role === "MEMBER" && !tribeCode) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Thiếu mã của dòng họ");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const jwtSignInPayload: any = {};
      let user: any;
      let info: any;

      if (role === "LEADER" && !tribeCode && tribeName) {
        let newTribeCode = await generateUniqueTribeCode(8);

        const tribe = await tribeModel.create({
          code: newTribeCode,
          name: tribeName,
        });

        user = await userModel.create({
          phoneNumber,
          password: hashedPassword,
          role,
          tribe: tribe.id,
        });

        info = await infoModel.create({
          fullName,
        });

        await tribe.updateOne({ leader: user.id });

        jwtSignInPayload.id = user.id;
        jwtSignInPayload.role = user.role;
      } else {
        const tribe = await tribeModel.findOne({ code: tribeCode }).exec();

        if (!tribe) {
          throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dòng họ");
        }

        user = await userModel.create({
          phoneNumber,
          password: hashedPassword,
          role,
          tribe: tribe.id,
        });

        info = await infoModel.create({
          fullName,
        });

        await tribeModel.updateOne(
          { code: tribeCode },
          { $addToSet: { members: user.id } }
        );

        jwtSignInPayload.id = user.id;
        jwtSignInPayload.role = user.role;
      }

      user.info = info.id;
      await user.save();

      const accessToken = generateAccessToken(jwtSignInPayload);

      return sendSuccessResponse(
        res,
        "Tạo tài khoản thành công",
        { accessToken, role },
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

  /**
   * Authenticates a user using their phone number and password.
   * If authentication is successful, an access token is returned.
   *
   * @param {Request} req - The Express request object, containing phoneNumber and password in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if required information is missing or if authentication fails.
   * @returns {Response} - Returns a success response with an access token and user role if authentication is successful.
   */
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { phoneNumber, password } = req.body;
      if (!phoneNumber || !password) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Thiếu thông tin bắt buộc");
      }

      const user = await userModel.findOne({ phoneNumber });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new ApiError(
          StatusCodes.BAD_REQUEST,
          "Tài khoản hoặc mật khẩu không đúng"
        );
      }

      const jwtSignInPayload: any = {
        id: user.id,
        role: user.role,
      };

      const accessToken = generateAccessToken(jwtSignInPayload);

      return sendSuccessResponse(
        res,
        "Đăng nhập thành công",
        { accessToken, role: user.role },
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
   * Logs out the user by sending a success response.
   *
   * @remarks
   * This function does not invalidate the token on the server side,
   * it relies on the client to remove the token from storage.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @returns {Response} - Returns a success response indicating logout.
   */
  logout: (req: Request, res: Response) => {
    return sendSuccessResponse(res, "Đăng xuất thành công", StatusCodes.OK);
  },

  /**
   * Retrieves the authenticated user's information.
   *
   * @param {Request} req - The Express request object, which should include a `user` property containing the user's ID.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the user is not found or if an internal server error occurs.
   * @returns {Response} - Returns a success response with the user's information if found.
   */
  getMe: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const uid = req.user.id;
      const user = await userModel
        .findById(uid)
        .select("-password")
        .populate({
          path: "tribe",
          select: "-members",
          populate: {
            path: "leader",
            select: "-password",
          },
        })
        .populate("info")
        .exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
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
   * Lấy thông tin user theo id
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the user is not found.
   * @returns {Response} - Returns a success response with the user information if the user is found.
   */
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await userModel
        .findById(id)
        .select("-password")
        .populate({
          path: "tribe",
          select: "-members",
          populate: {
            path: "leader",
            select: "-password",
          },
        })
        .populate("info")
        .exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
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
   * Cập nhật thông tin người dùng.
   * @param {Request} req - The Express request object, containing user details such as fullName, address, description, and avatar in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if required information is missing, if the phone number already exists, or if the tribe is not found.
   * @returns {Response} - Returns a success response with the updated user information if registration is successful.
   */
  updateUserInfo: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.user.id;
      const { fullName, address, description } = req.body;
      const avatar = req.file;
      const user = await userModel.findById(id).select("-password").exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      } else {
        const info = await infoModel.findById(user.info).exec();
        if (!info) {
          throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
        }
        if (fullName) info.fullName = fullName;
        if (address) info.address = address;
        if (avatar) {
          if (info.avatar) {
            const oldAvatarPath = oldFilePath(info.avatar);
            fs.unlink(oldAvatarPath, (err) => {
              if (err) {
                console.error("Không thể xoá ảnh cũ:", err);
              }
            });
          }
          info.avatar = avatar.path;
        }
        if (description) info.description = description;
        await info.save();
        user.info = info as any;
        return sendSuccessResponse(
          res,
          "Cập nhật thành công",
          user,
          StatusCodes.OK
        );
      }
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
   * Update the user's password.
   * The old password is required for authentication.
   * If the old password is incorrect, a 400 error is returned.
   * If the password is updated successfully, a 200 response is returned.
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the old password is incorrect or if an error occurs while updating the password.
   * @returns {Response} - Returns a success response with the updated user information if the password is updated successfully.
   */
  updatePassword: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.user.id;
      const { oldPassword, newPassword } = req.body;
      const user = await userModel.findById(id).select("-password").exec();
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      } else {
        if (!(await bcrypt.compare(oldPassword, user.password))) {
          throw new ApiError(StatusCodes.BAD_REQUEST, "Mật khẩu không đúng");
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        return sendSuccessResponse(
          res,
          "Thay đổi mật khẩu thành công",
          user,
          StatusCodes.OK
        );
      }
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      } else {
        return next(
          new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
        );
      }
    }
  },
};

export default authController;