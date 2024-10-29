/**
 * Author: Jinn
 * Date: 2024-10-24
 */

interface JwtSignInPayload {
  id: string;
  role: Role;
}

enum Role {
  MEMBER = "MEMBER",
  LEADER = "LEADER",
  ADMIN = "ADMIN",
}

interface ApiResponse {
  statusCode: number;
  message?: string;
  data?: any;
  errors?: any;
}

interface PaginationResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export { JwtSignInPayload, Role, ApiResponse, PaginationResponse };
