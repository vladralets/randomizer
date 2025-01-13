// src/components/molecules/NavList.tsx
import React from "react";
import NavLinkItem from "../atoms/NavLinkItem";

const NavList: React.FC = () => {
  return (
    <nav className="flex space-x-4 text-lg font-medium">
      <NavLinkItem to="/" label="Home" />
      <NavLinkItem to="/tests" label="Tests" />
      <NavLinkItem to="/questions" label="Questions" />
      <NavLinkItem to="/tasks" label="Tasks" />
    </nav>
  );
};

export default NavList;
