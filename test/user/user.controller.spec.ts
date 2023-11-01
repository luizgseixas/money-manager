import { RegisterUserUsecase } from '../../src/user/common/interfaces/register-user';
import { UserController } from '../../src/user/user.controller';

describe('UserController', () => {
  let sut: UserController;
  let registerUserUsecase: RegisterUserUsecase;

  beforeAll(() => {
    registerUserUsecase = { execute: jest.fn() };
  });

  beforeEach(async () => {
    sut = new UserController(registerUserUsecase);
  });

  test('should be defined', async () => {
    expect(sut).toBeDefined();
  });

  test('should call RegisterUseUsecase with correct params', async () => {
    await sut.create({
      name: 'any_name',
      email: 'any_email@mail.com',
      document: '12345678909',
      password: 'any_password',
    });

    expect(registerUserUsecase.execute).toHaveBeenCalledWith({
      name: 'any_name',
      email: 'any_email@mail.com',
      document: '12345678909',
      password: 'any_password',
    });
  });
});
