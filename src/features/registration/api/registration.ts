import { baseApi } from '@/shared/api/base-api.ts';
import { ACCESS_TOKEN } from '@/shared/const/local-storage.ts';
import { setUserName } from '@/entities/user';
import {toast} from "react-toastify";

type AuthPayload = {
  username: string;
  password: string;
  email: string;
};

export type AuthResponse = {
  access_token: string;
  user: {
    username: string;
    email: string;
    country: string | null;
    city: string | null;
    birthday: string | null;
    address: string | null;
    avatarUrl: string | null;
    id: string;
    createdAt: string; // ISO string
    updatedAt: string; // ISO string
  };
};

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<AuthResponse, AuthPayload>({
      query: (auth) => ({
        url: 'auth/signUp',
        method: 'POST',
        body: auth,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(ACCESS_TOKEN, result.data.access_token);
          dispatch(setUserName(result.data.user.username));
        } catch (error) {
          console.log(error);
          toast.error('Ошибка при регистрации. Проверьте данные');
        }
      },
    }),
  }),
});

export const { useRegisterMutation } = extendedApi;
