import React, { useCallback, useEffect, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";

const Items = ["counter", "greeting", "item-one", "item-two", "item-three"];

function HomePageView() {
  return (
    <div className="grid grid-cols-2 gap-16">
      {Items.map((i, x) => {
        return (
          <RouterLink to={`/app/${i}`} key={x}>
            <div className="py-8 rounded-md text-white text-2xl bg-gradient-to-r from-indigo-600 to-pink-500">
              {i}
            </div>
          </RouterLink>
        );
      })}
    </div>
  );
}

export default HomePageView;
