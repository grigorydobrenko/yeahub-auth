import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/user';
import { baseApi } from '@/shared/api/base-api.ts';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
