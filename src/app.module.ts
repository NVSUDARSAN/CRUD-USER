/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }), 
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/usersData'),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
