import {  createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ITasks {
  name: string;
  points: number;
}
export interface TasksState {
  list: [ITasks] | any;
}

const initialState: TasksState = {
  list: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    saveTask: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter(
        (item: any) => item.task !== action.payload
      );
    },
  },
});

export const { saveTask, deleteTask } = tasksSlice.actions;

export const list = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
