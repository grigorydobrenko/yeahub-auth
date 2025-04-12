import { RegistrationForm } from '@/features/registration';
import s from './registration.module.scss';
import { ChangeAuthPage } from '@/widgets/change-auth-page';

export const RegistrationPage = () => {
  return (
    <div className={s.container}>
      <RegistrationForm />
      <ChangeAuthPage currentPage={'registration'} />
    </div>
  );
};
