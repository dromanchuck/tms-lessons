import style from "./style.module.css";

interface UserProps {
  username: string;
  isDark: boolean;
}
export const Username = (props: UserProps) => {
  const initial = props.username.split(" ");

  return (
    <div className={style.mainDiv}>
      <div className={style.initial}>
        {initial[0][0].toUpperCase()}
        {initial[1] ? initial[1][0].toUpperCase() : ""}
      </div>
      <p className={style.name}>{props.username}</p>
    </div>
  );
};
