export const validateEmail = (email: string): boolean => {
  const validateEmail = /\S+@\S+\.\S+/;
  return validateEmail.test(email);
};
