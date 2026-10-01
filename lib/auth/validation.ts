import { z } from "zod"

// Shared field schemas

const nameSchema = z
  .string({
    error: "لطفاً نامت را وارد کن.",
  })
  .trim()
  .min(2, {
    error: "نام باید حداقل ۲ کاراکتر باشد.",
  })
  .max(24, {
    error: "نام نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد.",
  })

const usernameSchema = z
  .string({
    error: "لطفاً نام کاربری‌ات را وارد کن.",
  })
  .trim()
  .min(3, {
    error: "نام کاربری باید حداقل ۳ کاراکتر باشد.",
  })
  .max(24, {
    error: "نام کاربری نمی‌تواند بیشتر از ۳۰ کاراکتر باشد.",
  })
  .regex(/^[a-zA-Z0-9_]+$/, {
    error: "نام کاربری فقط می‌تواند شامل حروف انگلیسی، عدد و _ باشد.",
  })

const emailSchema = z
  .string({
    error: "لطفاً ایمیلت را وارد کن.",
  })
  .trim()
  .pipe(
    z.email({
      error: "لطفاً یک ایمیل معتبر وارد کن.",
    })
  )

const passwordSchema = z
  .string({
    error: "لطفاً رمزت را وارد کن.",
  })
  .min(8, {
    error: "رمز عبور باید حداقل ۸ کاراکتر باشد.",
  })
  .max(128, {
    error: "رمز عبور نمی‌تواند بیشتر از ۱۲۸ کاراکتر باشد.",
  })

const confirmPasswordSchema = z.string({
  error: "لطفاً رمزت را تأیید کن.",
})

// Register

const registerFields = z.object({
  name: nameSchema,
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
})

export const registerApiSchema = registerFields.omit({
  confirmPassword: true,
})

export const registerSchema = registerFields.refine(
  (data) => data.password === data.confirmPassword,
  {
    path: ["confirmPassword"],
    error: "تأیید رمز با رمز عبور یکسان نیست.",
  }
)

export type RegisterFormValues = z.infer<typeof registerSchema>
export type RegisterApiValues = z.infer<typeof registerApiSchema>

// Login

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string({
    error: "لطفاً رمزت را وارد کن.",
  }),
})

export const loginApiSchema = loginSchema

export type LoginFormValues = z.infer<typeof loginSchema>
export type LoginApiValues = z.infer<typeof loginApiSchema>
