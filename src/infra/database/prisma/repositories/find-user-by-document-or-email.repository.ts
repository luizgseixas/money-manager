import { Injectable } from '@nestjs/common';
import { FindUserByDocumentOrEmailRepository } from '../../../../user/common/interfaces/user-repository';
import { User } from 'src/user/entities/user.entity';
import { PrismaService } from '..';

@Injectable()
export class PrismaFindUserByDocumentOrEmailRepository
  implements FindUserByDocumentOrEmailRepository
{
  constructor(private readonly prismaService: PrismaService) {}

  public async findByDocumentOrEmail(
    document?: string,
    email?: string,
  ): Promise<User> {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [{ document }, { email }],
      },
    });

    return new User(user);
  }
}
