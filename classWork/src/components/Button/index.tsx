import style from "./style.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

export const Button = (props: Props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export function sum(a: number, b: number) {
  return a + b;
}
