import { validateCpf } from '../../src/utils/validate-cpf.util';

describe('validateCpf', () => {
  test('should return false if cpf is 00000000000', async () => {
    const isValidCpf = validateCpf('00000000000');

    expect(isValidCpf).toBe(false);
  });

  test('should return false if cpf length is different from 11', async () => {
    const isValidCpf1 = validateCpf('1234567890');
    const isValidCpf2 = validateCpf('123456789091');

    expect(isValidCpf1).toBe(false);
    expect(isValidCpf2).toBe(false);
  });

  test('should return false if cpf is invalid', async () => {
    const isValidCpf = validateCpf('123456789098');

    expect(isValidCpf).toBe(false);
  });

  test('should return true if is validcpf', async () => {
    const isValidCpf = validateCpf('12345678909');

    expect(isValidCpf).toBe(true);
  });
});
