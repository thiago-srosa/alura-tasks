import style from "src/components/Button/Button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({ onClick, type, children }: Props): JSX.Element => {
  return (
    <>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={onClick} type={type} className={style.button}>
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  type: undefined,
  onClick: () => null,
  children: null,
};
