import React, { useCallback, useEffect, useState } from "react";
import { playground } from "../../agent";

function CounterView() {
  const [count, setCount] = useState();
  const [inProgress, setInProgress] = useState("");

  const refreshCounter = useCallback(async () => {
    const res = await playground.getValue();
    setCount(res.toString());
    setInProgress("");
  }, []);

  useEffect(() => {
    refreshCounter();
  }, []);

  const onIncrementClick = useCallback(async () => {
    setCount("...");
    setInProgress("Calculating...");
    await playground.increment();
    refreshCounter();
  }, [playground]);

  return (
    <div>
      <p>
        <button
          className="px-8 py-2 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
          aria-label="Increment value"
          onClick={onIncrementClick}
        >
          count is: {count}
        </button>
      </p>
      <p className="text-base text-indigo-600 my-3">{inProgress}</p>
    </div>
  );
}

export default CounterView;
