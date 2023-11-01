import { validateEmail } from '../../src/utils/validate-email.util';

describe('validateEmail', () => {
  test('shoul return false id email is invalid', async () => {
    const isValidEmail = validateEmail('any_email');

    expect(isValidEmail).toBe(false);
  });

  test('shoul return true id email is valid', async () => {
    const isValidEmail = validateEmail('any_email@mail.com');

    expect(isValidEmail).toBe(true);
  });
});
