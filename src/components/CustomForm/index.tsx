import { useState } from "react";
import { Button } from "src/components/Button";
import style from "src/components/CustomForm/CustomForm.module.scss";
import { addTask } from "src/redux/AppSlice";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { RootState } from "src/redux/store";

export const CustomForm = () => {
  const [taskName, setTaskName] = useState("Test");
  const [time, setTime] = useState("00:00:30");

  const { tasks } = useAppSelector((state: RootState) => state.app);

  const dispatch = useAppDispatch();

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(
      addTask({
        taskName,
        time,
        completed: false,
        id: tasks.length + 1,
      }),
    );
  }

  return (
    <form className={style.newTask} onSubmit={handleOnSubmit}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add new task:</label>
        <input
          type="text"
          name="task"
          id="task"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          placeholder="What is your new task?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};
