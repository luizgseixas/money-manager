export const validateCpf = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let primeiroDigito = 11 - (soma % 11);
  if (primeiroDigito === 10 || primeiroDigito === 11) {
    primeiroDigito = 0;
  }
  if (primeiroDigito !== parseInt(cpf.charAt(9))) {
    return false;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let segundoDigito = 11 - (soma % 11);
  if (segundoDigito === 10 || segundoDigito === 11) {
    segundoDigito = 0;
  }
  if (segundoDigito !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
};
