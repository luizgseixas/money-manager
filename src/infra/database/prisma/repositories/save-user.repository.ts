import { Injectable } from '@nestjs/common';
import { SaveUserRepository } from '../../../../user/common/interfaces/user-repository';
import { UserProps } from 'src/user/entities/user.entity';
import { PrismaService } from '..';

@Injectable()
export class PrismaSaveUserRepository implements SaveUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(user: UserProps): Promise<void> {
    await this.prismaService.user.create({
      data: user,
    });
  }
}
