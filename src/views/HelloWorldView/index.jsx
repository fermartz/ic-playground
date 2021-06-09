import React, { useState, useCallback } from "react";
import { playground } from "../../agent";

function HellowWorldView() {
  const [helloWorld, setHelloWorld] = useState("");

  const queryHelloWorld = useCallback(async () => {
    setHelloWorld("Query is in progress...");
    let hello = await playground.hello();
    setHelloWorld(hello);
  });
  return (
    <div>
      <p className="text-2xl text-indigo-600 my-3">{helloWorld}</p>
      <button
        className="px-8 py-2 my-4 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
        aria-label="Increment value"
        onClick={queryHelloWorld}
      >
        Query hello world
      </button>
    </div>
  );
}

export default HellowWorldView;
