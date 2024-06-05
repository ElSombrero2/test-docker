import { Injectable } from '@nestjs/common';
import { CreateUser, FindUser } from '../../schema/dto/user-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../schema/user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private UserModel: Model<User>) {}

  public async create(user: CreateUser): Promise<FindUser> {
    const u = new this.UserModel(user);
    return (await u.save()) as unknown as FindUser;
  }

  public async find(): Promise<FindUser[]> {
    return await this.UserModel.find();
  }
}
