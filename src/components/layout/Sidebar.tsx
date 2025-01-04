import React from "react";
import { NavLink } from "react-router"; // Change to react-router-dom
import InfoIcon from "../icons/InfoIcon";
import MoviesIcon from "../icons/MoviesIcon";
import TvIcon from "../icons/TvIcon";

const navItems = [
  { icon: TvIcon, label: "Series", path: "/series" },
  { icon: MoviesIcon, label: "Home", path: "/" },
  { icon: InfoIcon, label: "Info", path: "/info" },
];

const Sidebar = () => {
  return (
    <div className="w-[57px] h-screen fixed left-0 top-0 bg-gradient-sidebar">
      <nav className="flex flex-col items-center justify-center gap-6 h-dvh">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `
              relative p-2 text-foreground rounded-lg transition-all duration-200
              ${
                isActive
                  ? "text-primary after:absolute after:left-[42px] after:top-1/2 after:-translate-y-1/2 after:w-[3px] after:h-[26px] after:bg-primary"
                  : "hover:text-primary"
              }
            `}
            title={label}
          >
            <Icon />
            <span className="sr-only">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
