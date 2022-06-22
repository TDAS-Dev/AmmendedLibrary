import Logo from "./Logo"
import {Link, useLocation } from "react-router-dom"

function NavBar() {
  //retrieve the useLocation object
  const location = useLocation();

  //use es6 destructuring for the location object
  const { pathname } = location;

  //slit the location into an array
  const splitLocation = pathname.split("/");

  return (
    <nav className="sm:hidden lg:flex md:flex items-center lg:h-[10vh] md:h-[8vh] md:px-14 lg:px-16 space-x-16">
      <Link to="/"><Logo className=""/></Link>
      <div className="flex lg:space-x-12 md:space-x-10">
        <div className={loneLinkStyle}>
          <Link to="/home" className={linkStyle}>Home</Link>
          <div className={splitLocation[1] === "home" ? activeCircleLink : inactiveCircleLink}></div>
        </div>
        <div className={loneLinkStyle}>
          <Link to="/upload" className={linkStyle}>Upload</Link>
          <div className={splitLocation[1] === "upload" ? activeCircleLink : inactiveCircleLink}></div>
        </div>
        <div className={loneLinkStyle}>
          <Link to="/private" className={linkStyle}>Private</Link>
          <div className={splitLocation[1] === "private" ? activeCircleLink : inactiveCircleLink}></div>
        </div>
        <div className={loneLinkStyle}>
          <Link to="/project-team" className={linkStyle}>Project Team</Link>
          <div className={splitLocation[1] === "project-team" ? activeCircleLink : inactiveCircleLink}></div>
        </div>
      </div>
    </nav>
  );
}

const loneLinkStyle = `flex flex-col items-center justify-center cursor-pointer`
const linkStyle = `font-lato font-semibold text-center lg:text-[1.1rem] md:text-[0.9rem]`
const activeCircleLink = `lg:w-[0.7rem] md:w-2 aspect-square bg-red-600 rounded-full`
const inactiveCircleLink = `lg:w-[0.7rem] md:w-2 aspect-square rounded-full`

export default NavBar;