import React, { useState, useCallback } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { blog } from "../../agent.js";

function AddPost() {
  const [inputStr, SetInputStr] = useState("");
  const [authorStr, SetAuthorStr] = useState("");
  const [postObj, setPostObj] = useState({});
  const createPost = useCallback(async () => {
    let post = await blog.insert({ content: inputStr, author: authorStr });
    console.log(post);
  });
  return (
    <div>
      <p className="text-5xl text-indigo-600 my-3">Create a blog post</p>
      <RouterLink to={`/app/blog`} style={{ display: "block" }}>
        <button
          className="px-8 py-2 my-4 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
          aria-label="Go back"
        >
          Go back to blog
        </button>
      </RouterLink>
      <div>
        <input
          className="px-3 py-3 my-4 w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 "
          value={inputStr}
          onChange={(e) => SetInputStr(e.target.value)}
          placeholder="Add content"
        ></input>
      </div>
      <div>
        <input
          className="px-3 py-3 my-4 w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 "
          value={inputStr}
          onChange={(e) => SetAuthorStr(e.target.value)}
          placeholder="Author"
        ></input>
      </div>

      <div>
        <button
          className="px-8 py-2 my-4 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
          aria-label="submit post"
          onClick={createPost}
        >
          Submit post
        </button>
      </div>
    </div>
  );
}

export default AddPost;
