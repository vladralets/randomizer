import cx from "classnames";
import { NavLink, NavLinkProps } from "react-router-dom";

export interface INavLinkItemProps extends NavLinkProps {
  label: string;
}

const NavLinkItem = ({ label, to, ...rest }: INavLinkItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx("hover:text-orchid transition-colors", {
          "text-orchid": isActive,
        })
      }
      {...rest}
    >
      {label}
    </NavLink>
  );
};

export default NavLinkItem;
