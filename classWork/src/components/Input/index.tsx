import { ChangeEventHandler } from "react";
import styles from "./style.module.css";

interface Input {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const Input = (props: Input) => {
  return (
    <label>
      {props.placeholder}
      <input
        className={styles.input}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </label>
  );
};
