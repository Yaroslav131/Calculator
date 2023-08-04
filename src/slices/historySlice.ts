import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {HistoryType} from '../types';

interface HistoryState {
  value: HistoryType[];
}

const initialState: HistoryState = {
  value: [],
};

export const historySlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<HistoryType>) => {
      state.value.push(action.payload);
    },
    resetHistory: state => {
      state.value = [];
    },
  },
});

export const {addToHistory, resetHistory} = historySlice.actions;

export default historySlice.reducer;
