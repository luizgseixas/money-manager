export const validatePassword = (password: string): boolean => {
  const validatePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
  return validatePassword.test(password);
};
