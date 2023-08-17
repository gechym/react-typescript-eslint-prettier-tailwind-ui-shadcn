// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

// type
import ThemeStateType from 'types/theme.type';
import setThemeClass from 'utils/setThemeClass';

const toggleTheme = createAction<string>('toggleTheme');

const initialState : ThemeStateType = {
  theme: 'light',
  font: 18,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action : PayloadAction<string>) => {
      state.theme = action.payload;
      setThemeClass(action.payload);
    },
    getTheme: (state) => {
      state.theme = localStorage.getItem('theme') || 'system';
      setThemeClass(state.theme);
    },
  },
  extraReducers(builder) {
    builder.addCase(toggleTheme, (state, action) => {
      state.theme = action.payload;
      setThemeClass(action.payload);
      return state;
    });
  },
});

export default themeSlice;
