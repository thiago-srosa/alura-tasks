import { useState } from "react";
import { Button } from "src/components/Button";
import style from "src/components/CustomForm/CustomForm.module.scss";
import { ITask } from "src/types/task";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const CustomForm = ({ setTasks }: Props) => {
  const [task, setTask] = useState("Test");
  const [time, setTime] = useState("00:01");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((previousTasks) => [
      ...previousTasks,
      {
        task,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setTask("Test");
    setTime("01:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add new task:</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
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
