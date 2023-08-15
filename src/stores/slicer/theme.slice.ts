import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type
import ThemeStateType from 'types/theme.type';
import setThemeClass from 'utils/setThemeClass';

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
  },
});

export default themeSlice;
