import { Role } from '@prisma/client';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  NotContains,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  username: string;

  @MinLength(8)
  @IsString()
  @NotContains(' ')
  password: string;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsNotEmpty()
  role: Role;

  @IsOptional()
  @IsString()
  tribeCode: string;

  @IsOptional()
  tribeName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(11)
  phoneNumber: string;
}
