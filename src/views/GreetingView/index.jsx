import React, { useCallback, useEffect, useState } from "react";
import { playground } from "../../agent";

function GreetingView() {
  const [inputStr, SetInputStr] = useState("");
  const [hello, setHello] = useState("");
  const doGreet = useCallback(async () => {
    setHello("Greeting in progress...");
    let greeting = await playground.greet(inputStr);
    console.log(greeting);
    setHello(greeting);
  });
  return (
    <div>
      <input
        className="px-3 py-3 my-8 w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 "
        value={inputStr}
        onChange={(e) => SetInputStr(e.target.value)}
        placeholder="write a greeting and send it"
      ></input>
      <p className="text-3xl text-purple-700">{hello}</p>
      <p>
        <button
          className="px-8 py-2 my-4 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
          aria-label="Increment value"
          onClick={doGreet}
        >
          Send greeting
        </button>
      </p>
    </div>
  );
}

export default GreetingView;
