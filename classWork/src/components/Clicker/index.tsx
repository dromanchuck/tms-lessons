import { Component, useState } from "react";
import { Button } from "../Button";

export const Clicker = () => {
  let [clickCount, setClickCount] = useState(0);

  const onClickPlus = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      {clickCount === 10 && <h1>Хватит кликать</h1>}
      {clickCount === 10 ? <h1>Хватит кликать</h1> : null}
      <h2>{clickCount}</h2>
      <Button text={"+"} onClick={onClickPlus} type="primary" />
    </div>
  );
};

class Clicker1 extends Component<any, { clickCount: number }> {
  constructor(props: any) {
    super(props);

    this.state = {
      clickCount: 0,
    };

    this.onClickPlus = this.onClickPlus.bind(this);
  }

  onClickPlus() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.clickCount}</h2>
        <Button text={"+"} onClick={() => {}} type="primary" />
      </div>
    );
  }
}
