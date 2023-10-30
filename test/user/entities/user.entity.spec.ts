import { User } from '../../../src/user/entities/user.entity';

describe('User', () => {
  test('should throw a Error(Email invalido) if the email is invalid ', async () => {
    try {
      new User({
        name: 'any_name',
        email: 'any_email',
        document: '12345678909',
        password: 'any_password',
      });
    } catch (err) {
      expect(err).toEqual(new Error('Email invalido'));
    }
  });

  test('should throw a Error(Documento invalido) if the document is invalid ', async () => {
    try {
      new User({
        name: 'any_name',
        email: 'any_email@mail.com',
        document: '12345678911',
        password: 'any_password',
      });
    } catch (err) {
      expect(err).toEqual(new Error('Documento invalido'));
    }
  });

  test('should throw a Error(Senha invalido) if the password is invalid ', async () => {
    try {
      new User({
        name: 'any_name',
        email: 'any_email@mail.com',
        document: '12345678909',
        password: 'any_password',
      });
    } catch (err) {
      expect(err).toEqual(new Error('Senha invalido'));
    }
  });
});
