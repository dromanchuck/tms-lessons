import { Button } from "../../Button";

interface IProps {
  text: string;
  onClickRemove: () => void;
}

export const Item = (props: IProps) => {
  return (
    <div style={{ border: "1px solid black", marginBottom: "10px" }}>
      <p>{props.text}</p>
      <Button text="Remove" onClick={props.onClickRemove} type="primary" />
    </div>
  );
};
