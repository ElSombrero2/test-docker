import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUser, FindUser } from '../../schema/dto/user-dto';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async create(@Body() user: CreateUser): Promise<FindUser> {
    try {
      return await this.userService.create(user);
    } catch (e) {
      console.log(e);
      throw new HttpException('Vode', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  public async find(): Promise<FindUser[]> {
    try {
      return await this.userService.find();
    } catch (e) {
      throw new HttpException('Vode', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
