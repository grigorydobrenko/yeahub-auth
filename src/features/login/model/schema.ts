import { z } from 'zod';

export const schema = z.object({
    username: z.string().email('Неверный формат email'),
    password: z.string().min(8, 'Пароль должен быть минимум 8 символов'),
});

export type LoginFormData = z.infer<typeof schema>;
