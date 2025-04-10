import { baseApi } from '@/shared/api/base-api.ts';
import { ACCESS_TOKEN } from '@/shared/const/local-storage.ts';
import { setUserName } from '@/entities/user/model/slice';

type Auth = {
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
    login: build.mutation<AuthResponse, Auth>({
      query: (auth) => ({
        url: 'auth/login',
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
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = extendedApi;
