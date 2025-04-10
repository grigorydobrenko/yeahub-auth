import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {ACCESS_TOKEN} from "@/shared/const/local-storage.ts";


const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.yeatwork.ru/',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

    if (refreshResult.data) {
      const { access_token } = refreshResult.data as { access_token: string };

      localStorage.setItem(ACCESS_TOKEN, access_token);
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log('should redirect to login');
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});

