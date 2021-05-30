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
      </header>
      <div className="px-16">{children}</div>
    </div>
  );
}

export default HomeLayout;
