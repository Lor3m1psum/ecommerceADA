export const password = {
  required: true,
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
    message:
      "Password must have at least one uppercase letter, one lowercase letter, and one number",
  },
  minLength: {
    value: 8,
    message: "Password must have at least 8 characters",
  },
  maxLength: {
    value: 20,
    message: "Password must have at most 20 characters",
  },
};

export const username = {
  required: true,
  minLength: {
    value: 8,
    message: "Username must have at least 8 characters",
  },
  maxLength: {
    value: 16,
    message: "Username must have at most 16 characters",
  },
};

export const email = {
  required: true,
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Invalid email address",
  },
};
