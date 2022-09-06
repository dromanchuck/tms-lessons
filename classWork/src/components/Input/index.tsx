import { ChangeEventHandler, useContext } from "react";
import { Context } from "../../App";
import styles from "./style.module.css";

interface Input {
  value: string;
  placeholder?: string;
  refObj?: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const Input = (props: Input) => {
  const values = useContext(Context);
  console.log({ values });

  return (
    <label>
      {props.placeholder}
      <input
        ref={props.refObj}
        className={styles.input}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </label>
  );
};
