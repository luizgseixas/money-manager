import { BcryptHashPasswordUsecase } from '../../../src/infra/bcrypt/usecases/hash-password.usecase';

jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed_password'),
}));

describe('BcryptHashPasswordUsecase', () => {
  let sut: BcryptHashPasswordUsecase;

  beforeEach(() => {
    sut = new BcryptHashPasswordUsecase();
  });

  test('should be defined', async () => {
    expect(sut).toBeDefined();
  });

  test('should return a hashed password on success', async () => {
    const response = await sut.execute('any_password');

    expect(response).toBe('hashed_password');
  });
});
