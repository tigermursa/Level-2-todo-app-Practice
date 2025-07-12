import type { Itask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InitialState {
  task: Itask[];
}

const initialState: InitialState = {
  task: [
    {
      id: "hello1234",
      title: "don't forget",
      description: "Create Home pate",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },
    {
      id: "hello1234d",
      title: "don't forget",
      description: "Create Home pate",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "hello1234c",
      title: "don't forget update",
      description: "Create Home pate",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.task.task;
};

export default taskSlice.reducer;
