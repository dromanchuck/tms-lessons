import style from "./style.module.css";

import { IPost } from "../../types/post";

interface IProps extends IPost {
  isLarge?: boolean;
}

export const PostItem = (props: IProps) => {
  return (
    <div className={`${style.post} ${props.isLarge ? style.largePost : ""}`}>
      {props.image ? (
        <img
          className={`${style.image} ${props.isLarge ? style.largeImage : ""}`}
          src={props.image}
          alt={props.title}
        />
      ) : (
        <img className={style.image} src={"/picture3.png"} alt={props.title} />
      )}
      <h3 className={style.title}>{props.title}</h3>
      <p className={style.text}>{props.text}</p>
      <p className={style.date}>{props.date}</p>
    </div>
  );
};
