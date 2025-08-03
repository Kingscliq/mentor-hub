import { User } from '@/types/features/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user: User | null;
}
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
    },
  },
});

export const authActions = { ...authSlice.actions };
export const authReducer = authSlice.reducer;
