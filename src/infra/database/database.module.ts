import { Module } from '@nestjs/common';
import {
  FIND_USER_BY_DOCUMENT_OR_EMAIL_REPOSITORY,
  SAVE_USER_REPOSITORY,
} from 'src/user/common/contants/repository';
import { PrismaSaveUserRepository } from './prisma/repositories';
import { PrismaFindUserByDocumentOrEmailRepository } from './prisma/repositories/find-user-by-document-or-email.repository';
import { PrismaService } from './prisma';

@Module({
  imports: [],
  providers: [
    PrismaService,
    {
      provide: FIND_USER_BY_DOCUMENT_OR_EMAIL_REPOSITORY,
      useClass: PrismaFindUserByDocumentOrEmailRepository,
    },
    {
      provide: SAVE_USER_REPOSITORY,
      useClass: PrismaSaveUserRepository,
    },
  ],
  exports: [FIND_USER_BY_DOCUMENT_OR_EMAIL_REPOSITORY, SAVE_USER_REPOSITORY],
})
export class DatabaseModule {}
