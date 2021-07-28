import React, { useCallback, useEffect, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { blog } from "../../agent.js";

function PostView({ match }) {
  console.log(typeof parseInt(match.params.id));
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  const refreshData = useCallback(async () => {
    const result = await blog.lookup(parseInt(match.params.id));
    setData(result);
    setContent(result[1].content);
    console.log(result);
  });
  useEffect(() => {
    refreshData();
  }, []);
  return (
    <div>
      <RouterLink to={`/app/blog`}>
        <button
          className="px-8 py-2 my-4 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
          aria-label="Go back"
        >
          Go back to blog
        </button>
      </RouterLink>
      <div>
        <p className="text-2xl text-indigo-600 my-3">{content}</p>
        <p className="text-2xl text-indigo-600 my-3">{i[1].author}</p>
      </div>
    </div>
  );
}

export default PostView;
