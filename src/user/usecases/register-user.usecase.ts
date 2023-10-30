import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  SaveUserRepository,
  FindUserByDocumentOrEmailRepository,
} from '../common/interfaces/user-repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { RegisterUserUsecase } from '../common/interfaces/register-user';
import {
  FIND_USER_BY_DOCUMENT_OR_EMAIL_REPOSITORY,
  SAVE_USER_REPOSITORY,
} from '../common/contants/repository';
import { HASH_PASSWORD_PROVIDER } from '../common/contants/hash';
import { HashPassword } from '../common/interfaces/hash-password';
import { User } from '../entities/user.entity';

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

  public async execute(userProps: CreateUserDto) {
    const userAlreadyExist =
      await this.findUserByDocumentOrEmailRepository.findByDocumentOrEmail(
        userProps.document,
        userProps.email,
      );
    if (userAlreadyExist) throw new BadRequestException('Usuário já existe');

    const hashedPassword = await this.hashPasswordProvider.execute(
      userProps.password,
    );
    userProps.password = hashedPassword;

    const user = new User(userProps);

    await this.saveUserRepository.save(user);
  }
}
