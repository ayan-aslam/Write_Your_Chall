const {z} = require('zod')

const loginSchema = z.object({
    email:z
    .string({required_error : "email is required"})
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "Email must be atleast of 3 chars." })
    .max(255, { message: "Email must not be more than 255 characters" }),

    password: z
    .string({ required_error: "passsword is required" })
    .trim()
    .min(7, { message: "password must be atleast of 7 chars." })
    .max(1024, { message: "password must not be more than 1024 characters" }),

})

module.exports = loginSchema