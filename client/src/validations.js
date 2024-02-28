export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !email
    ? "Email cannot be empty"
    : email.length > 34
    ? "Email cannot have more than 35 characters"
    : !emailRegex.test(email)
    ? "Invalid email format"
    : null;
}

export function validatePassword(password) {
  const passwordRegEx = /^(?=.*\d).{6,10}$/;

  return !password
    ? "Password cannot be empty"
    : password.length > 10
    ? "Password cannot have more than 10 characters"
    : !passwordRegEx.test(password)
    ? "Invalid password format. Must contain at least one digit"
    : null;
}

export const allowedUser = {
  email: "ndepratg@gmail.com",
  password: "n0trichyet",
};
