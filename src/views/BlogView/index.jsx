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
      <p className="text-2xl text-indigo-600 my-3">Hello from blog view</p>
      {list.length > 0 &&
        list.map((i) => {
          return (
            <RouterLink to={`/app/blog/post/${i[0]}`} key={i[0]}>
              <p className="text-2xl text-indigo-600 my-3">{i[1].content}</p>
            </RouterLink>
          );
        })}
    </div>
  );
}

export default BlogView;
