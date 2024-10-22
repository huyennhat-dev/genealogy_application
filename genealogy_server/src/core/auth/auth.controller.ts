import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from 'src/core/auth/auth.service';
import { RegisterDto } from 'src/core/auth/dto/register.dto';
import ApiResponse from 'src/global/api.response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    const result = await this.authService.register(body);
    return new ApiResponse<User>(
      'Register successfully',
      HttpStatus.OK,
      result,
    );
  }
}
