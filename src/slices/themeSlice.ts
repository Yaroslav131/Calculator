import { createSlice } from '@reduxjs/toolkit';
import { darkColors, ligthColors } from '../themes';

import { IThemeColors } from '../types';

interface InputExpressionState {
  name: string
  value: IThemeColors;
}

const initialState: InputExpressionState = {
  value: darkColors,
  name: 'dark'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      state.name = state.name === "dark" ? "light" : "dark"
      state.value = state.name === "dark" ? darkColors :  ligthColors;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
