import type { Itask } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InitialState {
  task: Itask[];
}

const initialState: InitialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Itask>) => {
      state.task.push(action.payload);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.task.task;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
