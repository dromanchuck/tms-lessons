// import { useDispatch, useSelector } from "react-redux";
// import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { PostsTabs } from "../../components/PostsTabs";
// import { decrement, increment, setToNumber } from "../../redux/actions/counter";
// import { TState } from "../../redux/store";

export const Main = () => {
  // const dispatch = useDispatch();
  // const value = useSelector((state: TState) => state.counterReducer.value);
  // const items = new Array(10).fill(0).map((_item, index) => index);

  // const handleIncrement = () => {
  //   dispatch(increment());
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  // const handleSetToNumber = (num: number) => {
  //   dispatch(setToNumber(num));
  // };

  return (
    <Container>
      <Header />
      {/* <p>{value}</p>
      <Button text="+" onClick={handleIncrement} type="primary" />
      <Button text="-" onClick={handleDecrement} type="primary" /> */}
      {/* {items.map((item) => {
        const clickButton = () => {
          handleSetToNumber(item);
        };

        return (
          <Button
            key={item}
            type="primary"
            onClick={clickButton}
            text={item + ""}
          />
        );
      })} */}
      <PostsTabs />
    </Container>
  );
};
