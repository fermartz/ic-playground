import React, { useCallback, useEffect, useState } from "react";
import { playground } from "../../agent";

function ItemOneView() {
  const [inputStr, SetInputStr] = useState("");
  const [hello, setHello] = useState("");
  const doGreet = useCallback(async () => {
    let greeting = await playground.greet(inputStr);
    setHello(greeting);
  });
  return (
    <div>
      <p className="text-3xl text-purple-700">{hello}</p>
      <input
        className="px-3 py-3 my-8 w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
        value={inputStr}
        onChange={(e) => SetInputStr(e.target.value)}
        placeholder="write a greeting and send it"
      ></input>
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

export default ItemOneView;
