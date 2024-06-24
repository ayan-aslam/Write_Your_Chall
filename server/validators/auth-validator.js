const { z } = require("zod");

//creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "name must be atleast of 3 chars." })
    .max(255, { message: "name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "Email must be atleast of 3 chars." })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be atleast of 10 chars." })
    .max(13, { message: "phone must not be more than 13 characters" }),
  password: z
    .string({ required_error: "passsword is required" })
    .trim()
    .min(7, { message: "password must be atleast of 7 chars." })
    .max(1024, { message: "password must not be more than 1024 characters" }),
});

module.exports = signupSchema;
