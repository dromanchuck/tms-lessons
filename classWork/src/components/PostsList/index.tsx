import { memo, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../types/post";
import { Button } from "../Button";
import { PostItem } from "../PostItem";
import style from "./style.module.css";

interface IProps {
  posts: IPost[];
  onClickDelete?: (id: number) => void;
  onClickEdit?: (id: number) => void;
}

export const PostList = memo((props: IProps) => {
  const navigate = useNavigate();
  console.log("render");
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

          const clickEdit: MouseEventHandler<HTMLButtonElement> = (event) => {
            // if (props.onClickDelete) {
            event.stopPropagation();
            props?.onClickEdit?.(item.id);
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

              {props.onClickEdit ? (
                <Button text="Edit post" type="secondary" onClick={clickEdit} />
              ) : null}
              <PostItem
                image={item.image}
                text={item.text}
                date={item.date}
                title={item.title}
                id={item.id}
                lesson_num={item.lesson_num}
                author={item.author}
                marked={item.marked}
                liked={item.liked}
              />
            </div>
          );
        })
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
});
