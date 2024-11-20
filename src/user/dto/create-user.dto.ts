/* eslint-disable prettier/prettier */

import { category } from "../schemas/user.schema";

// DTO - Data Transfer Object.

// use to create Users
export class CreateUserDto{
    readonly name : string;
    readonly email:string;
    readonly category: category;
}
