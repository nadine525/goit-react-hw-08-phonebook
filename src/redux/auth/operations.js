import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import {
  setAuthHeader,
  clearAuthHeader,
  signUp,
  logIn,
  logOut,
  refreshUser,
} from 'services/auth-api';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await signUp(credentials);
      setAuthHeader(res.data.token);
      return res.data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await logIn(credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      logOut();
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue('user is undefined');
    }
    try {
      setAuthHeader(token);
      return await refreshUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
