import { baseApi } from '@/shared/api/base-api.ts';
import { setUserName } from '../model/slice/index';

interface Permission {
  id: number;
  name: string;
}

interface UserRole {
  id: number;
  name: string;
  permissions: Permission[];
}

interface GetProfileResponse {
  id: string;
  username: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  address: string;
  avatarUrl: string;
  birthday: string;
  updatedAt: string;
  createdAt: string;
  userRoles: UserRole[];
  isEmailVerified: boolean;
}

export const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<GetProfileResponse, void>({
      query: () => 'auth/profile',
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUserName(result.data.username));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetProfileQuery } = extendedApi;
