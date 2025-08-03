import { RootState, useAppDispatch, useAppSelector } from '@/redux';
import { User } from '@/types/features/auth';
import { useCallback } from 'react';
import { authActions } from '@/redux/reducers/authSlice';

const user = (state: RootState) => state.auth.user as User;
// For Adding items to our redux store
export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  return {
    setUser: useCallback(
      (user: User) => {
        dispatch(authActions.setUser(user));
      },
      [dispatch]
    ),
    logout: useCallback(() => dispatch(authActions.clearUser()), [dispatch]),
  };
};

export const useAuth = () => {
  return useAppSelector(user);
};
