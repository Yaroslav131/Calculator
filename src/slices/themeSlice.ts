import { createSlice } from '@reduxjs/toolkit';
import { dackColors } from '../themes/dark';
import { ligthColors } from '../themes/lignt';
import { IThemeColors } from '../types/IThemeColors';

interface InputExpressionState {
  name: string
  value: IThemeColors;
}

const initialState: InputExpressionState = {
  value: dackColors,
  name: 'dark'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      state.name = state.name === "dark" ? "light" : "dark"
      state.value = state.name === "dark" ? ligthColors : dackColors;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
