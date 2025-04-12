import { baseApi } from '@/shared/api/base-api.ts';
import { setUserName } from '@/entities/user';

export const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    logout: build.query<void, void>({
      query: () => 'auth/logout',
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(setUserName(''));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLazyLogoutQuery } = extendedApi;
