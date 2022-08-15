import style from "src/components/Timer/Clock/Clock.module.scss";

interface Props {
  time: number | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Clock = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteDozens, minuteUnity] = String(minutes).padStart(2, "0");
  const [secondDozens, secondUnity] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.clockNumber}>{minuteDozens}</span>
      <span className={style.clockNumber}>{minuteUnity}</span>
      <span className={style.clockSection}>:</span>
      <span className={style.clockNumber}>{secondDozens} </span>
      <span className={style.clockNumber}>{secondUnity}</span>
    </>
  );
};
