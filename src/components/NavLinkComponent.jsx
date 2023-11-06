import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ routeName, route }) => {
  console.log(routeName, route)
  return (
    <NavLink
      to={`/${route}`}
      className="text-base font-bold text-yellow-900 transition duration-100 hover:text-yellow-700 active:text-yellow-700"
    >
      {routeName}
    </NavLink>
  );
};

export default NavLinkComponent;
