import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authOperations from './auth-operations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authOperations.register.fulfilled]: (_, { payload }) => payload.user,
  [authOperations.logIn.fulfilled]: (_, { payload }) => payload.user,
});
const token = createReducer(null, {
  [authOperations.register.fulfilled]: (_, { payload }) => payload.token,
  [authOperations.logIn.fulfilled]: (_, { payload }) => payload.token,
});
const error = createReducer(null, {
  [authOperations.register.rejected]: (_, { error }) => error.message,
  [authOperations.logIn.rejected]: (_, { error }) => error.message,
});

export default combineReducers({
  user,
  token,
  error,
});
