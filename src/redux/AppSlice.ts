import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "src/redux/store";
import { ITask } from "src/types/task";

// Define a type for the slice state
interface AppState {
  tasks: ITask[];
  selectedTask: ITask;
  activeTimerTaskById: number;
}

// Define the initial state using that type
const initialState: AppState = {
  tasks: [],
  selectedTask: {
    taskName: "",
    time: "",
    completed: false,
    id: 0,
  },
  activeTimerTaskById: 0,
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
    addTask: (state: AppState, action: PayloadAction<ITask>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    setSelectedTask: (state: AppState, action: PayloadAction<ITask>) => {
      state.selectedTask = action.payload;
    },
    setActiveTimerTaskById: (
      state: AppState,
      action: PayloadAction<number>,
    ) => {
      state.activeTimerTaskById = action.payload;
    },
    setCompleted: (state: AppState, action: PayloadAction<ITask>) => {
      const handleTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          const handleTask = {
            taskName: action.payload.taskName,
            time: action.payload.time,
            completed: true,
            id: action.payload.id,
          };
          return handleTask;
        }
        return task;
      });
      state.tasks = handleTasks;
    },
  },
});

export const {
  setCompleted,
  setActiveTimerTaskById,
  setSelectedTask,
  setTasks,
  addTask,
} = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAppState = (state: RootState) => state.app.tasks;

export default appSlice.reducer;
