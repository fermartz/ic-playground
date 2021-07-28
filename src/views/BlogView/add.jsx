import React, { useState, useCallback } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { blog } from "../../agent.js";

function AddPost() {
  const [inputStr, SetInputStr] = useState("");
  const [postObj, setPostObj] = useState({});
  const createPost = useCallback(async () => {
    let post = await blog.insert({ content: inputStr, author: "krema" });
    console.log(post);
  });
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
      <p className="text-2xl text-indigo-600 my-3">Add a blog post</p>
      <input
        className="px-3 py-3 my-8 w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 "
        value={inputStr}
        onChange={(e) => SetInputStr(e.target.value)}
        placeholder="write a greeting and send it"
      ></input>
      <div>
        <button
          className="px-8 py-2 my-4 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
          aria-label="Increment value"
          onClick={createPost}
        >
          Create post
        </button>
      </div>
    </div>
  );
}

export default AddPost;
