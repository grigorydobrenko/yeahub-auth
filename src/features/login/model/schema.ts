import { z } from 'zod';

export const schema = z.object({
  email: z.string().min(1, 'Это поле обязательно').email('Неверный формат email'),
  password: z
    .string()
    .min(1, 'Это поле обязательно')
    .min(8, 'Пароль должен быть минимум 8 символов'),
});

export type LoginFormData = z.infer<typeof schema>;
