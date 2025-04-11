import { z } from 'zod';

export const schema = z
  .object({
    username: z
      .string()
      .min(1, 'Это поле обязательно')
      .min(3, 'Минимум 3 символа')
      .refine(
        (value) => /^[a-zA-Z0-9\u0400-\u04FF]*$/.test(value),
        'Имя должно содержать только буквы и цифры'
      ),
    email: z.string().min(1, 'Это поле обязательно').email('Неверный формат email'),
    password: z
      .string()
      .min(1, 'Это поле обязательно')
      .min(8, 'Минимум 8 символов')
      .refine(
        (value) =>
          // eslint-disable-next-line @/max-len
          /^(?=.*[A-Z\u0400-\u042F])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|])[A-Za-z\u0400-\u04FF\d!@#$%^&*()_+\-=\[\]{}|]{8,}$/.test(
            value
          ),
        'Пароль должен содержать хотя бы одну заглавную букву, одну цифру и один специальный символ'
      ),
    confirmPassword: z.string().min(1, 'Пожалуйста, подтвердите пароль'),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Пароли должны совпадать',
        path: ['confirmPassword'],
      });
    }
  });

export type RegistrationFormData = z.infer<typeof schema>;
