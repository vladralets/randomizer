import NavLinkItem from "../atoms/NavLinkItem";
import NavList from "../molecules/NavList";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <NavList />
        <NavLinkItem to="/admin" label="Admin" />
      </div>
    </header>
  );
};

export default Header;
