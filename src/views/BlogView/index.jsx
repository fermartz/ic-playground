import React, { useCallback, useEffect, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { blog } from "../../agent.js";

function BlogView() {
  const [list, setList] = useState([]);
  const refreshBlog = async () => {
    const result = await blog.showEntries();
    setList(result);
    result.map((i) => {
      console.log(i);
    });
    console.log(result);
  };
  useEffect(() => {
    refreshBlog();
  }, []);
  return (
    <div>
      <p className="text-5xl text-indigo-600 ">Blog</p>
      <RouterLink to={`/app/blog/add`}>
        <button
          className="px-8 py-2 my-4 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
          aria-label="Go back"
        >
          Add a blog post
        </button>
      </RouterLink>
      <div class="grid grid-cols-3 gap-4">
        {list.length > 0 &&
          list.map((i) => {
            return (
              <RouterLink to={`/app/blog/post/${i[0]}`} key={i[0]}>
                <p className="text-2xl text-indigo-600 my-3">{i[1].content}</p>
                <p className="text-2xl text-indigo-600 my-3">{i[1].author}</p>
              </RouterLink>
            );
          })}
      </div>
    </div>
  );
}

export default BlogView;
