import { BadRequestException } from '@nestjs/common';
import { GetUserByDocumentOrEmailRepository } from '../../../src/user/common/intefaces/get-user-by-document-or-email.repository';
import { SaveUserRepository } from '../../../src/user/common/intefaces/save-user.repository';
import { CreateUserDto } from '../../../src/user/dto/create-user.dto';
import { DbRegisterUserUsecase } from '../../../src/user/usecases/register-user.usecase';
import { User } from '../../../src/user/entities/user.entity';

describe('DbRegisterUserUsecase', () => {
  let sut: DbRegisterUserUsecase;
  let getUserByDocumentOrEmailRepository: GetUserByDocumentOrEmailRepository;
  let saveUserRepository: SaveUserRepository;

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
    getUserByDocumentOrEmailRepository = {
      getByDocumentOrEmail: jest.fn().mockResolvedValue(null),
    };
    saveUserRepository = { save: jest.fn() };
  });

  beforeEach(() => {
    sut = new DbRegisterUserUsecase(
      getUserByDocumentOrEmailRepository,
      saveUserRepository,
    );
  });

  test('should be defined', async () => {
    expect(getUserByDocumentOrEmailRepository).toBeDefined();
    expect(saveUserRepository).toBeDefined();
    expect(sut).toBeDefined();
  });

  test('should call GetUserByDocumentOrEmailRepository with correct params', async () => {
    await sut.execute(createUserMock);

    expect(
      getUserByDocumentOrEmailRepository.getByDocumentOrEmail,
    ).toHaveBeenCalledWith('any_document', 'any_email@mail.com');
  });

  test('should throw a BadRequestException if GetUserByDocumentOrEmailRepository return a user', async () => {
    jest
      .spyOn(getUserByDocumentOrEmailRepository, 'getByDocumentOrEmail')
      .mockResolvedValueOnce(userMock);

    const promise = sut.execute(createUserMock);

    expect(promise).rejects.toThrowError(
      new BadRequestException('Usuário já existe'),
    );
  });

  test('should call saveUserRepository with correct params', async () => {
    await sut.execute(createUserMock);

    expect(saveUserRepository.save).toHaveBeenCalledWith(createUserMock);
  });
});
