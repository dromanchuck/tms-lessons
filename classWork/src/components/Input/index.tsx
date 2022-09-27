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
  error?: string;
  name?: string;
  required?: boolean;
  pattern?: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
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
        name={props.name}
        pattern={props.pattern}
        type={props.type}
        minLength={props.minLength}
        maxLength={props.maxLength}
      ></input>
      <p style={{ color: "red" }}>{props.error}</p>
    </label>
  );
};
