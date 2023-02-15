import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './authOperations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null},
  token: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action){
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    [logIn.fulfilled](state, action){
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    [logOut.fulfilled](state, action){
      state.user={ name: null, email: null}
      state.token=null
      state.isLoggedIn=false
    }
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};

const authReducer = authSlice.reducer

export const persistedReducerAuth = persistReducer(persistConfig, authReducer);
