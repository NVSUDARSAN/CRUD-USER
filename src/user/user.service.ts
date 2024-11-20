/* eslint-disable prettier/prettier */
import {  Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(id: string, user: UpdateUserDto): User | PromiseLike<User> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ){}


    async findAll(): Promise<User[]>{
        const users=await this.userModel.find();
            return users
        
    }

    async create(user:User):Promise<User>{
        const res = await this.userModel.create(user)
        return res
    }


    async findById(id:string):Promise<User>{
        const user = await this.userModel.findById(id)

        if(!user){
            throw new NotFoundException('User not Found.');
        }
        return user
    }


    async updateById(id:string, user:User):Promise<User>{
        return await this.userModel.findByIdAndUpdate(id,user,{
            new: true,
            runValidators: true,
        });
        
    }

    async deleteById(id:string):Promise<User>{
        return await this.userModel.findByIdAndDelete(id);
        
    }

}
