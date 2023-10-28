import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  SaveUserRepository,
  FindUserByDocumentOrEmailRepository,
} from '../common/interfaces/repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { RegisterUserUsecase } from '../common/interfaces/register-user';
import {
  FIND_USER_BY_DOCUMENT_OR_EMAIL_REPOSITORY,
  SAVE_USER_REPOSITORY,
} from '../common/contants/repository';
import { HASH_PASSWORD_PROVIDER } from '../common/contants/hash';
import { HashPassword } from '../common/interfaces/hash-password';

@Injectable()
export class DbRegisterUserUsecase implements RegisterUserUsecase {
  constructor(
    @Inject(FIND_USER_BY_DOCUMENT_OR_EMAIL_REPOSITORY)
    private readonly findUserByDocumentOrEmailRepository: FindUserByDocumentOrEmailRepository,
    @Inject(SAVE_USER_REPOSITORY)
    private readonly saveUserRepository: SaveUserRepository,
    @Inject(HASH_PASSWORD_PROVIDER)
    private readonly hashPasswordProvider: HashPassword,
  ) {}

  public async execute(user: CreateUserDto) {
    const userAlreadyExist =
      await this.findUserByDocumentOrEmailRepository.findByDocumentOrEmail(
        user.document,
        user.email,
      );
    if (userAlreadyExist) throw new BadRequestException('Usuário já existe');

    const hashedPassword = await this.hashPasswordProvider.execute(
      user.password,
    );
    user.password = hashedPassword;

    await this.saveUserRepository.save(user);
  }
}
