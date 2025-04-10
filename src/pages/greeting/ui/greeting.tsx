import { selectUser } from '@/entities/user';
import { useAppSelector } from '@/shared/types/store.ts';
import { Typography } from '@/shared/ui-kit';

export const GreetingPage = () => {
  const userName = useAppSelector(selectUser);

  return (
    <div>
      Main
      <Typography variant={'head1'}>{userName}</Typography>
    </div>
  );
};
