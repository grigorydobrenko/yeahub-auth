import { Button, FormField, Typography } from '@/shared/ui-kit';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormData, schema } from '../model/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './login-form.module.scss';
import { useLoginMutation } from '../api/login';
import { useNavigate } from 'react-router';
import { routes } from '@/shared/const/router.ts';
import { useAuth } from '@/app/providers/auth-provider.tsx';
import { useEffect } from 'react';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { token, setToken } = useAuth();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const credentials = { username: data.email, password: data.password };
    const result = await login(credentials).unwrap();
    setToken(result.access_token);
    navigate(routes.home);
  };

  useEffect(() => {
    if (token) {
      navigate(routes.home);
    }
  }, [navigate, token]);

  return (
    <div>
      <Typography className={s.title} variant={'head2'}>
        Вход в личный кабинет
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={'email'}
          control={control}
          render={({ field }) => (
            <FormField
              label={'Электронная почта'}
              placeholder={'Введите электронную почту'}
              errorMessage={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={'password'}
          control={control}
          render={({ field }) => (
            <FormField
              label={'Пароль'}
              placeholder={'Введите пароль'}
              type={'password'}
              errorMessage={errors.password?.message}
              {...field}
            />
          )}
        />
        <Button className={s.button} size={'L'} disabled={isLoading || !isValid} fullWidth>
          Вход
        </Button>
      </form>
    </div>
  );
};
