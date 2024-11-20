/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    // get All the Users.
    @Get()
    async getAllUsers():Promise<User[]>{
        return this.userService.findAll()
    }

    //Createing user
    @Post()
    async createUser(
        @Body()
        user:CreateUserDto,
    ): Promise<User>{
        return this.userService.create(user)

    }

    //Get the Users data
    @Get(':id')
    async getUser(
        @Param('id')
        id:string,
    ):Promise<User>{
        return this.userService.findById(id);
    }

    //Update the User Data
    @Put(':id')
        async updateUser(
            @Param('id') id: string,
            @Body() user: UpdateUserDto, // Partial update object
        ): Promise<User> {
            return this.userService.updateById(id, user);
        }

     //Delete the user   
    @Delete(':id')
    async deleteUser(
        @Param('id')
        id: string,

    ): Promise<User>{
        return this.userService.deleteById(id);
    }
}
