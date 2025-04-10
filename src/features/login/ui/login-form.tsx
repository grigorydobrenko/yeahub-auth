import { Button, FormField, Typography } from '@/shared/ui-kit';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormData, schema } from '../model/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './login-form.module.scss';
import { useLoginMutation } from '../api/login';
import { useNavigate } from 'react-router';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    await login(data).unwrap();
    navigate('/');
  };

  return (
    <div>
      <Typography className={s.title} variant={'head2'}>
        Вход в личный кабинет
      </Typography>
      <form
        className={s.form}
        onSubmit={handleSubmit(onSubmit, (errors) => console.log('Validation errors:', errors))}
      >
        <Controller
          name={'username'}
          control={control}
          render={({ field }) => (
            <FormField
              label={'Электронная почта'}
              placeholder={'Введите электронную почту'}
              autoComplete={'off'}
              errorMessage={errors.username?.message}
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
              autoComplete={'off'}
              errorMessage={errors.password?.message}
              {...field}
            />
          )}
        />
        <Button className={s.button} size={'L'} disabled={isLoading} fullWidth>
          Вход
        </Button>
      </form>
    </div>
  );
};
