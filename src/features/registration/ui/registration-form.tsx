import { Button, FormField, Typography } from '@/shared/ui-kit';
import s from './registration-form.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterMutation } from '../api/registration';
import { RegistrationFormData, schema } from '../model/schema';
import { routes } from '@/shared/const/router.ts';
import { useNavigate } from 'react-router';
import { useAuth } from '@/app/providers/auth-provider.tsx';
import { useEffect } from 'react';

export const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
  });
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { token, setToken } = useAuth();

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    const { username, password, email } = data;
    const credentials = {
      username,
      password,
      email,
    };
    const result = await register(credentials).unwrap();
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
        Регистрация
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={'username'}
          control={control}
          render={({ field }) => (
            <FormField
              label={'Имя'}
              placeholder={'Введите имя'}
              errorMessage={errors.username?.message}
              {...field}
            />
          )}
        />
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
              type={'password'}
              label={'Пароль'}
              placeholder={'Введите пароль'}
              errorMessage={errors.password?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={'confirmPassword'}
          control={control}
          render={({ field }) => (
            <FormField
              type={'password'}
              label={'Подтвердить пароль'}
              placeholder={'Введите пароль'}
              errorMessage={errors.confirmPassword?.message}
              {...field}
            />
          )}
        />
        <Button className={s.button} size={'L'} disabled={isLoading || !isValid} fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};
