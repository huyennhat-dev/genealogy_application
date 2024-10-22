import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from 'src/core/auth/dto/register.dto';
import { hashPassword } from 'src/utils/hash.util';
import { generateTransCode } from 'src/utils/generate.util';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async generateUniqueTribeCode(): Promise<string> {
    const code = await generateTransCode(); // Tạo mã mới
    const checkCode = await this.prisma.tribe.findFirst({
      where: {
        tribeCode: code,
      },
    });
    if (checkCode) return this.generateUniqueTribeCode();
    return code;
  }

  async register(registerDto: RegisterDto): Promise<any> {
    try {
      const {
        username,
        password,
        role,
        phoneNumber,
        tribeCode,
        tribeName,
        fullname,
      } = registerDto;
      const exited = await this.prisma.user.findUnique({
        where: {
          username: username,
        },
      });
      if (exited)
        throw new HttpException(
          'Username đã tồn tại, vui lòng nhập email khác',
          HttpStatus.CONFLICT,
        );
      const hashPasswordValue = await hashPassword(password);

      let newUser: any;

      if (role == 'SECRETARY') {
        const code = await this.generateUniqueTribeCode();
        const tribe = await this.prisma.tribe.create({
          data: {
            tribeCode: code,
            tribeName: tribeName,
          },
        });

        newUser = await this.prisma.user.create({
          data: {
            username: username,
            password: hashPasswordValue,
            role: role,
            fullname: fullname,
            tribeId: tribe.id,
            phone: phoneNumber,
          },
        });
      } else {
        const tribe = await this.prisma.tribe.findUnique({
          where: {
            tribeCode: tribeCode,
          },
        });
        newUser = await this.prisma.user.create({
          data: {
            username: username,
            password: hashPasswordValue,
            role: role,
            fullname: fullname,
            tribeId: tribe.id,
            phone: phoneNumber,
          },
        });
      }
      const payload = {
        id: newUser.id,
        role: newUser.role,
      };
      const token = await this.jwtService.signAsync(payload, {
        expiresIn: process.env.JWT_EXPIRES_IN,
        secret: process.env.JWT_SECRET_KEY,
      });
      return {
        accessToken: token,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
