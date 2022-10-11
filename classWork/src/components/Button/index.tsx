import { MouseEventHandler, useContext } from "react";
import { Context } from "../../App";
import style from "./style.module.css";

type ButtonColorType = "primary" | "secondary" | "secondary2";

interface Props {
  text: string;
  type: ButtonColorType;
  className?: string;
  disabled?: boolean;
  btnType?: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const getButtonStyle = (type: ButtonColorType, isDark: boolean) => {
  if (type === "primary") {
    return style.primary;
  }

  if (type === "secondary") {
    return style.secondary;
  }

  if (type === "secondary2") {
    return `${style.secondary2} ${isDark ? style.darkSecondary2 : ""}`;
  }
};

export const Button = (props: Props) => {
  const { isDark } = useContext(Context);
  return (
    <button
      className={`${style.button} ${getButtonStyle(props.type, isDark)} ${
        props.className
      }`}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.btnType}
    >
      {props.text}
    </button>
  );
};

export function sum(a: number, b: number) {
  return a + b;
}
