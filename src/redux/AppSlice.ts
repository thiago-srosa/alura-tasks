import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "src/redux/store";
import { ITask } from "src/types/task";

// Define a type for the slice state
interface AppState {
  tasks: ITask[];
}

// Define the initial state using that type
const initialState: AppState = {
  tasks: [],
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTasks: (state: AppState, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAppState = (state: RootState) => state.app.tasks;

export default appSlice.reducer;
