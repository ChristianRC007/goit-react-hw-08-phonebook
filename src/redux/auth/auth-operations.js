import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/registerUser', async creds => {
  const { data } = await axios.post('/users/signup', creds);
  return data;
});

const logIn = createAsyncThunk('auth/loginUser', async creds => {
  const { data } = await axios.post('/users/login', creds);
  return data;
});

// eslint-disable-next-line
export default { register, logIn };
