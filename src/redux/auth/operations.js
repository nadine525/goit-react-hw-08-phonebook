import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import {
  setAuthHeader,
  clearAuthHeader,
  singUp,
  logIn,
  logOut,
  refreshUser,
} from 'services/auth-api';

export const singUpUser = createAsyncThunk('/users/signup');
