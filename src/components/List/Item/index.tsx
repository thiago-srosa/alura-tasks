import { ITask } from "src/types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export const Item = ({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) => {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ""} 
                  ${completed ? style.itemCompleted : ""}`}
    >
      <button
        type="button"
        onClick={() =>
          !completed &&
          selectTask({
            task,
            time,
            selected,
            completed,
            id,
          })
        }
      >
        <h3>{task}</h3>
        <span>{time}</span>
        {completed && (
          <span className={style.completed} aria-label="completed task" />
        )}
      </button>
    </li>
  );
};
