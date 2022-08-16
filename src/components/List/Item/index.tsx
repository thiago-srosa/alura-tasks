import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { RootState } from "src/redux/store";
import { setSelectedTask } from "src/redux/AppSlice";
import style from "./Item.module.scss";

export const Item = () => {
  const { tasks, selectedTask, activeTimerTaskById } = useAppSelector(
    (state: RootState) => state.app,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {tasks.map((task) => (
        <li
          className={`
            ${style.item} 
            ${selectedTask.id === task.id ? style.selectedItem : ""} 
            ${task.completed ? style.completedItem : ""}
            ${activeTimerTaskById === task.id ? style.activeTimer : ""}
            `}
          key={task.id}
        >
          <button type="button" onClick={() => dispatch(setSelectedTask(task))}>
            <h3>{task.taskName}</h3>
            <span>{task.time}</span>
            {task.completed && (
              <span className={style.completed} aria-label="completed task" />
            )}
          </button>
        </li>
      ))}
    </>
  );
};
