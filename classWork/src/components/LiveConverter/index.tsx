import { ChangeEventHandler, useEffect, useState } from "react";
import { Input } from "../Input";

export const LiveConverter = () => {
  const [byn, setByn] = useState("");
  const [usd, setUsd] = useState("");
  const [activeRate, setActiveRate] = useState(0);

  useEffect(() => {
    const promise = fetch("https://www.nbrb.by/api/exrates/rates/431");

    promise
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setActiveRate(value.Cur_OfficialRate);
      });
  }, []);

  useEffect(() => {
    console.log("byn is changing");
    const num = +byn;

    if (!isNaN(num) && activeRate !== 0) {
      setUsd(String(num / activeRate));
    }
  }, [byn]);

  // useEffect(() => {}, [usd]);

  const handleByn: ChangeEventHandler<HTMLInputElement> = (event) => {
    const num = Number(event.target.value);

    if (!isNaN(num)) {
      setByn(event.target.value);
    }
  };

  const handleUsd: ChangeEventHandler<HTMLInputElement> = (event) => {
    const num = Number(event.target.value);

    if (!isNaN(num)) {
      setUsd(event.target.value);
    }
  };

  return (
    <div>
      <h1>Live currency converter</h1>
      <label>
        BYN
        <Input value={byn} onChange={handleByn} />
      </label>

      <label>
        USD
        <Input value={usd} onChange={handleUsd} />
      </label>
    </div>
  );
};
