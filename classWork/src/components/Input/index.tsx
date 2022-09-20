import { ChangeEventHandler, useContext } from "react";
import { Context } from "../../App";
import styles from "./style.module.css";

interface Input {
  value: string;
  placeholder?: string;
  refObj?: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  //:NEW
  error?: string;
}
export const Input = (props: Input) => {
  const { isDark } = useContext(Context);

  return (
    <label>
      {props.placeholder}
      <input
        ref={props.refObj}
        className={`${styles.input} ${isDark ? styles.darkInput : ""} ${
          props.error ? styles.error : ""
        }`}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </label>
  );
};
