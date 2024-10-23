import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import envConfig from "~/configs/environment";
import ApiError from "~/utils/api-error";

/**
 * Express error-handling middleware.
 * Handles instances of ApiError and formats the error response.
 * If no statusCode is provided, defaults to 500 (Internal Server Error).
 * Includes stack trace in the error response if in development mode.
 * 
 * @param {ApiError} err - The error object, expected to be an instance of ApiError.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function in the stack.
 */
const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err.statusCode) {
    err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }

  const responseError = {
    statusCode: err.statusCode,
    message: err.message || StatusCodes[err.statusCode],
    stack: envConfig.BUILD_MODE === "dev" ? err.stack : undefined,
  };

  // Trả về phản hồi lỗi
  res.status(err.statusCode).json(responseError);
};

export default errorHandler;
