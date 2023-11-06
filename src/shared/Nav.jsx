import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import NavLinkComponent from "../components/NavLinkComponent";

const Nav = () => {
  

  const navigate =useNavigate();



  const handleLogout = () => {
    localStorage.removeItem('login-token');
    navigate('/login');
  }


  return (
    <div className=" fixed w-screen z-[1000] py-2 bg-yellow-200/50 border-b border-b-slate-100/70 backdrop-blur  ">
      <div className=" mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="flex items-center justify-between">
          {/* logo - start */}
          <NavLink
            to="/"
            className="inline-flex items-center gap-2.5 text-2xl font-extrabold text-yellow-900 md:text-3xl"
            aria-label="logo"
          >
            🍻 Brewery
          </NavLink>

          <nav className="hidden  gap-12 lg:flex">
            <NavLinkComponent route={""} routeName={"Home"} />
            {/* <NavLinkComponent route={"search"} routeName={"Search"} /> */}
            <NavLinkComponent route={"reviews"} routeName={"Reviews"} />

           
          </nav>
          <button
             onClick={handleLogout}
              className="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-yellow-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">
                  Logout <AiOutlineLogout className="inline-block ml-1" />
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
        </header>
      </div>
    </div>
  );
};

export default Nav;
