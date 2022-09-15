import { IPost } from "../../types/post";
import { PostItem } from "../PostItem";
import style from "./style.module.css";

interface IProps {
  posts: IPost[];
  onClickPost: (id: number) => void;
}

export const PostList = (props: IProps) => {
  return (
    <div className={style.container}>
      {props.posts.map((item) => {
        const clickPost = () => {
          props.onClickPost(item.id);
        };
        return (
          <div onClick={clickPost}>
            <PostItem
              key={item.id}
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
      })}
    </div>
  );
};
