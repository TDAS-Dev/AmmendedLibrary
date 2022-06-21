import Logo from "./Logo"
import {Link} from "react-router-dom"

function NavBar() {
    return (
      <div className="sm:hidden lg:flex md:flex items-center lg:h-[10vh] md:h-[8vh] md:px-14 lg:px-16 space-x-16">
        <Link to="/"><Logo className=""/></Link>
        <div className="flex lg:space-x-12 md:space-x-10" >
            <Link to="/home" className={linkStyle}>Home</Link>
            <Link to="/upload" className={linkStyle}>Upload</Link>
            <Link to="/private" className={linkStyle}>Private</Link>
            <Link to="/project-team" className={linkStyle}>Project Team</Link>
        </div>
      </div>
    );
}

const linkStyle = `font-lato font-semibold text-center lg:text-[1.1rem] md:text-[0.9rem]`

export default NavBar;