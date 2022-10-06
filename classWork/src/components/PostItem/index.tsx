import style from "./style.module.css";

import { IPost } from "../../types/post";
import {
  MouseEventHandler,
  ReactEventHandler,
  useContext,
  useState,
} from "react";
import { marked, liked } from "../../assets";
import { Context } from "../../App";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { likePost } from "../../redux/actions/posts";

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

  const handleLikePost: MouseEventHandler<HTMLImageElement> = (event) => {
    event.stopPropagation();
    dispatch(likePost(post));
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
          <img src={marked} />
          <img src={liked} onClick={handleLikePost} />
        </>
      ) : null}
    </div>
  );
};
