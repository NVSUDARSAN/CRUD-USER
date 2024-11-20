/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum category {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;
  @Prop()
  category: category;
}

export const UserSchema = SchemaFactory.createForClass(User);
