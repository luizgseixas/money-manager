import { Module } from '@nestjs/common';
import { BcryptHashPasswordUsecase } from './usecases/hash-password.usecase';
import { HASH_PASSWORD_PROVIDER } from 'src/user/common/contants/hash';

@Module({
  providers: [
    {
      provide: HASH_PASSWORD_PROVIDER,
      useClass: BcryptHashPasswordUsecase,
    },
  ],
  exports: [HASH_PASSWORD_PROVIDER],
})
export class BcryptModule {}
