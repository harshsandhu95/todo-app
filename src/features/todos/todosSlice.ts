import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  task: string;
  completed: boolean;
  createdAt: string;
};

const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ task: string; completed: boolean }>,
    ) => {
      const { task, completed } = action.payload;
      const id = state.length ? state[state.length - 1].id + 1 : 0;
      state.push({ id, task, completed, createdAt: new Date().toISOString() });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
