import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";

// let timer: NodeJS.Timer | null = null;

export const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const onClickStart = () => {
    if (!timerRef.current) {
      console.log(timerRef.current);
      timerRef.current = setInterval(() => {
        setCount((state) => state + 1);
      }, 1000);
      console.log(timerRef.current);
    }
  };

  const onClickStop = () => {
    //1. Очищает interval
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    //2. обновить ref -> null
  };

  const onClickReset = () => {
    //1. Очищает interval
    //2. обновить ref -> null
    //3. установить count в 0
  };

  return (
    <div>
      <h3>{count}</h3>
      <div>
        <Button type="primary" text={"start"} onClick={onClickStart} />
        <Button type="primary" text={"stop"} onClick={() => {}} />
        <Button type="primary" text={"reset"} onClick={() => {}} />
      </div>
    </div>
  );
};
