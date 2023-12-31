import { Link } from "react-router-dom";
import MenuDropDown from "./MenuDropDown";
import useAuth from "../Hooks/UseAuth";


const Navbar = () => {
  const {user} = useAuth()
  const NavItems = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/shope'>Shope</Link></li>

<li>
  <details>
    <summary>Parent</summary>
    <ul className="p-2">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </details>
</li>


  </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-white bg-opacity-40">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        {NavItems}

      </ul>
    </div>
    <a className="font-extrabold text-xs md:text-xl">D E F O T</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
    {NavItems}

    </ul>
  </div>

  <div className="navbar-end">
 {
  user?  <MenuDropDown/> : <>
  <Link to='/login'><button className="btn btn-sm bg-black text-white">Login</button></Link>
  </>
 }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;