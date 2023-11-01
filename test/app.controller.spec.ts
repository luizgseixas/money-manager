import { AppController } from '../src/app.controller';

describe('AppController', () => {
  let sut: AppController;

  beforeEach(async () => {
    sut = new AppController();
  });

  test('should be defined', async () => {
    expect(sut).toBeDefined();
  });

  test('should return an OK message', async () => {
    const response = sut.getHello();
    expect(response).toEqual({ message: 'OK' });
  });
});
