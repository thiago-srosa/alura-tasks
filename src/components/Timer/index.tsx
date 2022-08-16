import { useEffect, useState } from "react";
import { timeToSeconds } from "src/common/utils/time";
import style from "src/components/Timer/Timer.module.scss";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { RootState } from "src/redux/store";
import { setActiveTimerTaskById, setCompleted } from "src/redux/AppSlice";
import { Clock } from "./Clock";
import { Button } from "../Button";

export const Timer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { selectedTask } = useAppSelector((state: RootState) => state.app);

  const [time, setTime] = useState<number>();
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTask?.time) {
      if (time === undefined || time === 0) {
        setTime(timeToSeconds(selectedTask?.time));
      }
    }
  }, [selectedTask, time]);

  function regressive(counter: number = 0) {
    setIsTimerActive(true);
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      const handleSelectedTask = selectedTask;
      dispatch(setCompleted(handleSelectedTask));
      setIsTimerActive(false);
      return null;
    }, 1000);
  }

  function handleClickStartTimer() {
    if (isTimerActive === false) {
      dispatch(setActiveTimerTaskById(selectedTask.id));
      regressive(time);
    }
    // return null;
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the Timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => handleClickStartTimer()}>Start</Button>
    </div>
  );
};
