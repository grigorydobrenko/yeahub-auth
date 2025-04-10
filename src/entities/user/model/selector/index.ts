import { RootState } from '@/shared/types/store.ts';

export const selectUser = (state: RootState) => state.user.username;
