import style from "./style.module.css";

import { IPost } from "../../types/post";
import {
  MouseEventHandler,
  ReactEventHandler,
  useContext,
  useState,
} from "react";
import { Mark, Like } from "../../assets";
import { Context } from "../../App";
import { useDispatch } from "react-redux";
import { likePost, markPost } from "../../redux/actions/posts";

interface IProps extends IPost {
  isLarge?: boolean;
}

export const PostItem = (props: IProps) => {
  const [image, setImage] = useState(props.image);
  const { user } = useContext(Context);
  const dispatch = useDispatch();
  const { isLarge, ...post } = props;

  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage("/picture3.png");
  };

  const handleLikePost: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    dispatch(likePost(post));
  };

  const handleMarkPost: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    dispatch(markPost(post));
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
      {user ? (
        <>
          <button onClick={handleMarkPost}>
            <Mark fill={props.marked ? "black" : "#C6DDFF"} />
          </button>
          <button onClick={handleLikePost}>
            <Like fill={props.liked ? "green" : "black"} />
          </button>
        </>
      ) : null}
    </div>
  );
};
