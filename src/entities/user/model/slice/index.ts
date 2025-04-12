import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
}

const initialState = { username: '' } satisfies UserState as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;
export const userReducer = userSlice.reducer;
