import React, { useCallback, useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import { counter } from "./agent";

function App() {
  const [count, setCount] = useState();
  const [hello, setHello] = useState("");
  const [inputStr, SetInputStr] = useState("");

  const refreshCounter = useCallback(async () => {
    const res = await counter.getValue();
    setCount(res.toString());
  }, []);

  useEffect(() => {
    refreshCounter();
  }, []);
  const doGreet = useCallback(async () => {
    let greeting = await counter.greet(inputStr);
    setHello(greeting);
  });
  const onIncrementClick = useCallback(async () => {
    await counter.increment();
    refreshCounter();
  }, [counter]);
  const getText = useCallback(async () => {
    var str = await counter.hello();
    setHello(str.toString());
  }, []);
  return (
    <div className="text-center container mx-auto">
      <header className="space-y-5 min-h-screen flex flex-col items-center justify-center text-lg">
        <img
          src={logo}
          className="pointer-events-none"
          style={{ height: "20vmin" }}
          alt="logo"
        />

        {/* <p>
          <button
            className="px-8 py-2 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
            aria-label="Increment value"
            onClick={onIncrementClick}
          >
            count is: {count}
          </button>
        </p> */}

        <div class="flex flex-col space-y-5">
          <input
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
            value={inputStr}
            onChange={(e) => SetInputStr(e.target.value)}
            placeholder="write a greeting and send it"
          ></input>
          <p>
            <button
              className="px-8 py-2 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
              aria-label="Increment value"
              onClick={doGreet}
            >
              Send greeting
            </button>
          </p>

          <p>{hello}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
