import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface CustomNavLinkProps extends NavLinkProps {
  children: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  children,
  ...props
}) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `rounded border border-white bg-black px-4 py-2 text-white transition duration-700 hover:bg-white hover:text-black ${isActive ? "outline outline-4 outline-blue-700" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
