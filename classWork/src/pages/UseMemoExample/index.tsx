import React, { ChangeEventHandler, useMemo } from "react";

const slowNthFibCalulator = (n: number) => {
  var result = 0;
  if (n <= 2) {
    return n - 1;
  }
  result = slowNthFibCalulator(n - 1) + slowNthFibCalulator(n - 2);
  return result;
};

export const UseMemoExample = () => {
  const [username, setUsername] = React.useState("John");
  const [position, setPosition] = React.useState(35);

  const fibonacciNumber = useMemo(
    () => slowNthFibCalulator(position),
    [position]
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    if (name === "username") {
      setUsername(value);
    } else {
      setPosition(parseInt(value, 10));
    }
  };

  return (
    <div>
      Username:{" "}
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br /> <br />
      Position of the fibonnaci number:{" "}
      <input
        type="number"
        name="position"
        value={position}
        onChange={handleChange}
      />
      <br /> <br />
      Hey {username} your Fibonacci number is {fibonacciNumber}
    </div>
  );
};
