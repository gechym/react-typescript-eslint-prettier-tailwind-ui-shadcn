import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    saveToke: (state, action: PayloadAction<{
      accessToken: string,
      refreshToken: string,
    }>) => {
      console.log(1);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
    saveTokenLocalStorage: (state, action) => {
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
  },
});

export default tokenSlice;
