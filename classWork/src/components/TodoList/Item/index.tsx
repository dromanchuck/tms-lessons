import { Component, useEffect, useState } from "react";
import { Button } from "../../Button";

interface IProps {
  text: string;
  checked: boolean;
  onClickRemove: () => void;
  onClickChecked: () => void;
}

export const Item = (props: IProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setInterval");
      setCount((state) => state + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (count === 5) {
      alert("555555");
    }
  }, [count]);

  return (
    <div style={{ border: "1px solid black", marginBottom: "10px" }}>
      <input
        type={"checkbox"}
        checked={props.checked}
        onChange={props.onClickChecked}
      />
      <p>{props.text}</p>
      <p>{count}</p>
      <Button text="Remove" onClick={props.onClickRemove} type="primary" />
    </div>
  );
};

export class Item1 extends Component<IProps> {
  componentDidMount() {
    console.log("mounted");
    let clickCount = 0;
    document.body.onclick = () => {
      clickCount += 1;
      console.log(clickCount);
    };
  }

  componentDidUpdate() {
    console.log("update", this.props.checked);
  }

  componentWillUnmount() {
    document.body.onclick = null;
  }

  render() {
    return (
      <div style={{ border: "1px solid black", marginBottom: "10px" }}>
        <input
          type={"checkbox"}
          checked={this.props.checked}
          onChange={this.props.onClickChecked}
        />
        <p>{this.props.text}</p>
        <Button
          text="Remove"
          onClick={this.props.onClickRemove}
          type="primary"
        />
      </div>
    );
  }
}
