import style from "./style.module.css";

import { IPost } from "../../types/post";
import { ReactEventHandler, useState } from "react";

interface IProps extends IPost {
  isLarge?: boolean;
}

export const PostItem = (props: IProps) => {
  const [image, setImage] = useState(props.image);

  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage("/picture3.png");
  };

  return (
    <div className={`${style.post} ${props.isLarge ? style.largePost : ""}`}>
      {image ? (
        <img
          className={`${style.image} ${props.isLarge ? style.largeImage : ""}`}
          src={image}
          alt={props.title}
          onError={handleError}
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
