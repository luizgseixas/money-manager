import { BadRequestException, Injectable } from '@nestjs/common';
import { SaveUserRepository } from '../common/intefaces/save-user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { GetUserByDocumentOrEmailRepository } from '../common/intefaces/get-user-by-document-or-email.repository';

@Injectable()
export class DbRegisterUserUsecase {
  constructor(
    private readonly getUserByDocumentOrEmailRepository: GetUserByDocumentOrEmailRepository,
    private readonly saveUserRepository: SaveUserRepository,
  ) {}

  public async execute(user: CreateUserDto) {
    const userAlreadyExist =
      await this.getUserByDocumentOrEmailRepository.getByDocumentOrEmail(
        user.document,
        user.email,
      );
    if (userAlreadyExist) throw new BadRequestException('Usuário já existe');

    await this.saveUserRepository.save(user);
  }
}
