import style from "./style.module.css";

interface Props {
  text: string;
}

export const Title = (props: Props) => {
  return <h1 className={style.title}>{props.text}</h1>;
};
