export const password = {
  required: true,
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
    message:
      "Password must have at least one uppercase letter, one lowercase letter, and one number",
  },
  minLength: {
    value: 4,
    message: "Password must have at least 4 characters",
  },
  maxLength: {
    value: 6,
    message: "Password must have at most 6 characters",
  },
};

export const username = {
  required: true,
  minLength: {
    value: 4,
    message: "Username must have at least 4 characters",
  },
  maxLength: {
    value: 20,
    message: "Username must have at most 20 characters",
  },
};

export const email = {
  required: true,
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Invalid email address",
  },
};
