import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TasksState {
  isModalBoxOpen: boolean;
  data: { task: '', points: '' };
}

const initialState: TasksState = {
  isModalBoxOpen: false,
  data: { task: '', points: '' },
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModalBox: (state) => {
      state.isModalBoxOpen = !state.isModalBoxOpen;
    },
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { toggleModalBox, getData } = modalSlice.actions;

export const isModalBoxOpen = (state: RootState) => state.isModalBoxOpen;

export default modalSlice.reducer;
