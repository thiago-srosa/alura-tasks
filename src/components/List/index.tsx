import { ITask } from "src/types/task";
import { Item } from "src/components/List/Item";
import style from "./List.module.scss";

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

export const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className={style.tasksList}>
      <h2>Activities of the day</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
};
