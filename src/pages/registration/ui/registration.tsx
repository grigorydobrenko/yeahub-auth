import { RegistrationForm } from '@/features/registration';
import { ChangeAuthPage } from '@/widgets/change-auth-page';

export const RegistrationPage = () => {
  return (
    <>
      <RegistrationForm />
      <ChangeAuthPage currentPage={'registration'} />
    </>
  );
};
