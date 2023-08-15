import { createSlice } from '@reduxjs/toolkit';
import { darkColors, ligthColors } from '../themes';

import { IThemeColors } from '../types';
import { themeNames } from '../constants';

interface InputExpressionState {
  name: string
  value: IThemeColors;
}

const initialState: InputExpressionState = {
  value: darkColors,
  name: themeNames.dark
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      const newThemeName = state.name === themeNames.dark ? themeNames.light : themeNames.dark;
      state.name = newThemeName;

      state.value = state.name === themeNames.dark ? darkColors : ligthColors;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
