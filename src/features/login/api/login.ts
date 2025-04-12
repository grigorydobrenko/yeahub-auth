import { baseApi } from '@/shared/api/base-api.ts';
import { setUserName } from '@/entities/user/model/slice';
import {toast} from "react-toastify";

type AuthPayload = {
  username: string;
  password: string;
};

interface UserRole {
  id: number;
  name: string;
  permissions: string[]; // You can adjust this type if permissions have more specific structure
}

interface User {
  id: string;
  username: string;
  phone: string;
  country: string;
  city: string;
  email: string;
  birthday: string; // ISO 8601 date format, or use Date if needed
  address: string;
  avatarUrl: string;
  createdAt: string; // ISO 8601 date format
  updatedAt: string; // ISO 8601 date format
  isEmailVerified: boolean;
  userRoles: UserRole[];
}

interface AuthResponse {
  access_token: string;
  user: User;
}

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, AuthPayload>({
      query: (auth) => ({
        url: 'auth/login',
        method: 'POST',
        body: auth,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUserName(result.data.user.username));
        } catch (error) {
          console.log(error);
          toast.error('Ошибка при входе. Проверьте логин или пароль.');
        }
      },
    }),
  }),
});

export const { useLoginMutation } = extendedApi;
