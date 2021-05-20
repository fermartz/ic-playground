import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

function HomeLayout({ children }) {
  return (
    <div className="text-center container mx-auto">
      <header className="space-y-5 min-h-screen flex flex-col items-center justify-center text-lg">
        <RouterLink to="/">
          <img
            src={logo}
            className="pointer-events-none"
            style={{ height: "20vmin" }}
            alt="logo"
          />
        </RouterLink>

        {children}
      </header>
    </div>
  );
}

export default HomeLayout;
