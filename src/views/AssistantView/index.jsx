import React, { useCallback, useState } from "react";

import { assistant } from "../../agent";

function AssistantView() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState("");

  const addTodo = useCallback(async () => {
    await assistant.addTodo("First todo");
  });
  const handleShow = useCallback(async () => {
    let result = await assistant.showTodos();
    console.log(result);
    setList(result);
  });
  return (
    <div>
      <p className="text-base text-purple-700">This is the assistant</p>
      <button
        className="px-8 py-2 mb-6 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
        aria-label="Increment value"
        onClick={() => addTodo()}
      >
        Insert
      </button>
      <button
        className="px-8 py-2 mb-6 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
        aria-label="Increment value"
        onClick={() => handleShow()}
      >
        show
      </button>
      <p className="text-base text-purple-700">{list}</p>
    </div>
  );
}

export default AssistantView;
