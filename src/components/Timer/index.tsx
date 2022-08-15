import { useEffect, useState } from "react";
import { ITask } from "src/types/task";
import { timeToSeconds } from "src/common/utils/time";
import style from "src/components/Timer/Timer.module.scss";
import { Clock } from "./Clock";
import { Button } from "../Button";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export const Timer = ({ selected, finishTask }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTime(contador - 1);
        return regressiva(contador - 1);
      }
      finishTask();
      return null;
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the Timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressiva(time)}>Start</Button>
    </div>
  );
};
