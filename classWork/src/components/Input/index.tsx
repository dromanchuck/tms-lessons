import { ChangeEventHandler, useContext } from "react";
import { Context } from "../../App";
import styles from "./style.module.css";

interface Input {
  value?: string;
  placeholder?: string;
  refObj?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: () => void;
  onBlur?: () => void;
  //:NEW
  error?: string;
  name?: string;
  required?: boolean;
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
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        required={props.required}
      ></input>
      <p style={{ color: "red" }}>{props.error}</p>
    </label>
  );
};
