import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DbRegisterUserUsecase } from './usecases/register-user.usecase';

@Module({
  controllers: [UserController],
  providers: [DbRegisterUserUsecase],
})
export class UserModule {}
