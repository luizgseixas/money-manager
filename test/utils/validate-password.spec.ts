import { validatePassword } from '../../src/utils/validate-password.util';

describe('validatePassword', () => {
  test('should return false if password does not have number', async () => {
    const isValidPassword = validatePassword('Batatinha@');

    expect(isValidPassword).toBe(false);
  });

  test('should return false if password does not have upper case', async () => {
    const isValidPassword = validatePassword('batatinha@20');

    expect(isValidPassword).toBe(false);
  });

  test('should return false if password does not have lower case', async () => {
    const isValidPassword = validatePassword('BATATINHA@20');

    expect(isValidPassword).toBe(false);
  });

  test('should return false if password does not have special character', async () => {
    const isValidPassword = validatePassword('Batatinha20');

    expect(isValidPassword).toBe(false);
  });

  test('should return true if password matches the pattern', async () => {
    const isValidPassword = validatePassword('Batatinha@20');

    expect(isValidPassword).toBe(true);
  });
});
