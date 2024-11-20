/* eslint-disable prettier/prettier */
import { category } from "../schemas/user.schema"

// Update  users information
export class UpdateUserDto{
    readonly name : string;
    readonly email:string;
    readonly category: category;
}



  
