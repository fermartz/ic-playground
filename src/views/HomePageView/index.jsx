import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

function HomePageView() {
  return (
    <div>
      <p>Home Page view</p>
      <p>
        <RouterLink to="/app/item-one">Item one</RouterLink>
      </p>
      <p>
        <RouterLink to="/app/item-two">Item two</RouterLink>
      </p>
      <p>
        <RouterLink to="/app/item-three">Item three</RouterLink>
      </p>
    </div>
  );
}

export default HomePageView;
