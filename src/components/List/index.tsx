import { Item } from "src/components/List/Item";
import style from "./List.module.scss";

export const List = () => {
  return (
    <aside className={style.tasksList}>
      <h2>Activities of the day</h2>
      <ul>
        <Item />
      </ul>
    </aside>
  );
};
