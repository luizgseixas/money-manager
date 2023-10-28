import { BadRequestException } from '@nestjs/common';
import {
  FindUserByDocumentOrEmailRepository,
  SaveUserRepository,
} from '../../../src/user/common/interfaces/repository';
import { CreateUserDto } from '../../../src/user/dto/create-user.dto';
import { DbRegisterUserUsecase } from '../../../src/user/usecases/register-user.usecase';
import { User } from '../../../src/user/entities/user.entity';
import { HashPassword } from 'src/user/common/interfaces/hash-password';

describe('DbRegisterUserUsecase', () => {
  let sut: DbRegisterUserUsecase;
  let findUserByDocumentOrEmailRepository: FindUserByDocumentOrEmailRepository;
  let saveUserRepository: SaveUserRepository;
  let hashPasswordProvider: HashPassword;

  const createUserMock: CreateUserDto = {
    name: 'any_user_name',
    email: 'any_email@mail.com',
    document: 'any_document',
    password: 'any_password',
  };

  const userMock: User = {
    id: 'any_user_id',
    name: 'any_user_name',
    email: 'any_email@mail.com',
    document: 'any_document',
    password: 'any_password',
    createdAt: new Date('2023-10-27'),
    updatedAt: new Date('2023-10-27'),
  };

  beforeAll(() => {
    findUserByDocumentOrEmailRepository = {
      findByDocumentOrEmail: jest.fn().mockResolvedValue(null),
    };
    saveUserRepository = { save: jest.fn() };
    hashPasswordProvider = {
      execute: jest.fn().mockResolvedValue('hashed_password'),
    };
  });

  beforeEach(() => {
    sut = new DbRegisterUserUsecase(
      findUserByDocumentOrEmailRepository,
      saveUserRepository,
      hashPasswordProvider,
    );
  });

  test('should be defined', async () => {
    expect(findUserByDocumentOrEmailRepository).toBeDefined();
    expect(saveUserRepository).toBeDefined();
    expect(sut).toBeDefined();
  });

  test('should call GetUserByDocumentOrEmailRepository with correct params', async () => {
    await sut.execute(createUserMock);

    expect(
      findUserByDocumentOrEmailRepository.findByDocumentOrEmail,
    ).toHaveBeenCalledWith('any_document', 'any_email@mail.com');
  });

  test('should throw a BadRequestException if GetUserByDocumentOrEmailRepository return a user', async () => {
    jest
      .spyOn(findUserByDocumentOrEmailRepository, 'findByDocumentOrEmail')
      .mockResolvedValueOnce(userMock);

    const promise = sut.execute(createUserMock);

    expect(promise).rejects.toThrowError(
      new BadRequestException('Usuário já existe'),
    );
  });

  test('should call HashPasswordProvider with correct params', async () => {
    await sut.execute(createUserMock);

    expect(hashPasswordProvider.execute).toHaveBeenCalledWith('any_password');
  });

  test('should call saveUserRepository with correct params', async () => {
    await sut.execute(createUserMock);

    expect(saveUserRepository.save).toHaveBeenCalledWith({
      name: 'any_user_name',
      email: 'any_email@mail.com',
      document: 'any_document',
      password: 'hashed_password',
    });
  });
});
