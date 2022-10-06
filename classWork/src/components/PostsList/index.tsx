import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../types/post";
import { Button } from "../Button";
import { PostItem } from "../PostItem";
import style from "./style.module.css";

interface IProps {
  posts: IPost[];
  onClickDelete?: (id: number) => void;
}

export const PostList = (props: IProps) => {
  const navigate = useNavigate();

  const navigateToSelectedPost = (postId: number) => {
    navigate(`/selected-post/${postId}`);
  };

  return (
    <div className={style.container}>
      {props.posts.length !== 0 ? (
        props.posts.map((item) => {
          const clickPost = () => {
            navigateToSelectedPost(item.id);
          };

          const clickDelete: MouseEventHandler<HTMLButtonElement> = (event) => {
            // if (props.onClickDelete) {
            event.stopPropagation();
            props?.onClickDelete?.(item.id);
            // }
          };

          return (
            <div key={item.id} onClick={clickPost}>
              {props.onClickDelete ? (
                <Button
                  text="Remove post"
                  type="primary"
                  onClick={clickDelete}
                />
              ) : null}
              <PostItem
                image={item.image}
                text={item.text}
                date={item.date}
                title={item.title}
                id={item.id}
                lesson_num={item.lesson_num}
                author={item.author}
              />
            </div>
          );
        })
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
};
