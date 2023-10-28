import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DbRegisterUserUsecase } from './usecases/register-user.usecase';
import { REGISTER_USER_USECASE } from './common/contants/usecase';
import { DatabaseModule } from 'src/infra/database/database.module';
import { BcryptModule } from 'src/infra/bcrypt/bcrypt.module';

@Module({
  imports: [DatabaseModule, BcryptModule],
  controllers: [UserController],
  providers: [
    {
      provide: REGISTER_USER_USECASE,
      useClass: DbRegisterUserUsecase,
    },
  ],
})
export class UserModule {}
