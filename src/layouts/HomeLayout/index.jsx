import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

function HomeLayout({ children }) {
  return (
    <div className="text-center container mx-auto">
      <header className="my-20 flex flex-col items-center justify-center text-lg">
        <RouterLink to="/">
          <img
            src={logo}
            className="pointer-events-none"
            style={{ height: "20vmin" }}
            alt="logo"
          />
        </RouterLink>
        <h1 className="text-3xl md:text-4xl lg:text-5xl my-5 py-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-pink-500">
          IC Playground
        </h1>
      </header>
      <div className="px-16">{children}</div>
    </div>
  );
}

export default HomeLayout;
