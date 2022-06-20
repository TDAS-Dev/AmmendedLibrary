import Logo from "./Logo"
// import {Link} from "react-router-dom"

function NavBar() {
    return (
      <div className="sm:hidden lg:flex md:flex items-center lg:h-[10vh] md:h-[8vh] md:px-14 lg:px-16 space-x-16">
        {/* <Link><Logo className=""/></Link> */}
        <Logo className=""/>
        <div className="flex lg:space-x-12 md:space-x-10" >
            <a href="/" className={aStyle}>Home</a>
            <a href="/" className={aStyle}>Upload</a>
            <a href="/" className={aStyle}>Private</a>
            <a href="/" className={aStyle}>Project Team</a>
        </div>
      </div>
    );
}

const aStyle = `font-lato font-semibold text-center lg:text-[1.1rem] md:text-[0.9rem] `

export default NavBar;