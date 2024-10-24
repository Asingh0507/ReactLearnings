import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  todos: [{ id: 1, text: 'hello world' }],
};

// slice is made which will consist reducers as it's convention of redux
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // state and action are default paramters which will be available for every reducer
    addToDo: (state, action) => {
      const toDo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(toDo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export const { addToDo, removeToDo } = todoSlice.actions; // these actions needs to be imported also bcuz we will use these as functions

export default todoSlice.reducer; // export reducer of other slices also so that sore can ger aware of it
