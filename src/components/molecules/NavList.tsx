// src/components/molecules/NavList.tsx
import React from "react";
import NavLinkItem from "../atoms/NavLinkItem";

const NavList: React.FC = () => {
  return (
    <nav className="flex space-x-4 text-lg font-medium">
      <NavLinkItem to="/" label="Home" />
      <NavLinkItem to="/questions" label="Questions" />
    </nav>
  );
};

export default NavList;
