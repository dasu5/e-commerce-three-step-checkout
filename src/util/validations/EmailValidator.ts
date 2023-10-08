export const EmailValidator = {
  required: {
    value: true,
    message: "Email is required",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Please enter a valid email",
  },
  maxLength: {
    value: 80,
    message: "Characters limit exceeded",
  },
};
