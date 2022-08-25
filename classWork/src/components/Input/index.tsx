import styles from "./style.module.css";

interface Input {
  value: string;
  placeholder?: string;
}
export const Input = (props: Input) => {
  return (
    <input
      className={styles.input}
      value={props.value}
      placeholder={props.placeholder}
    ></input>
  );
};
