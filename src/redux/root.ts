import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './reducers';
import { authReducer } from '@/redux/reducers/authSlice';

const rootReducer = combineReducers({
  counterReducer,
  auth: authReducer,
});

export default rootReducer;
