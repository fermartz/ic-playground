import React, { useCallback, useEffect, useState } from "react";

import { assistant } from "../../agent";

function AssistantView() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const addTodo = useCallback(async (v) => {
    setTodo("...");
    await assistant.addTodo(v);
    setTodo("");
    refreshAssistant();
  });
  // const handleShow = useCallback(async () => {
  //   let result = await assistant.showTodos();
  //   console.log(result);
  //   setList(result);
  // });
  const handleReset = useCallback(async () => {
    console.log("reset");
    const result = await assistant.clear();
    refreshAssistant();
  });
  const refreshAssistant = useCallback(async () => {
    const result = await assistant.showTodos();
    setList(result);
  });

  useEffect(() => {
    refreshAssistant();
  }, []);
  return (
    <div>
      <div>
        <input
          className="px-3 py-3 my-8 w-48 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 "
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter a todo item"
        ></input>
      </div>
      <button
        className="px-8 py-2 mb-6 mx-3 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
        aria-label="Increment value"
        onClick={() => addTodo(todo)}
      >
        Insert
      </button>

      <button
        className="px-8 py-2 mb-6 mx-3 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
        aria-label="Increment value"
        onClick={() => handleReset()}
      >
        reset
      </button>
      <p className="text-4xl text-purple-700">{`ToDo List`}</p>
      {list.length > 0 &&
        list.map((i, x) => {
          return (
            <p className="text-base text-purple-700 my-3" key={x}>
              {i.description}
            </p>
          );
        })}
    </div>
  );
}

export default AssistantView;
