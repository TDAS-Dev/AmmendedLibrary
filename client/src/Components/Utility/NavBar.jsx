import Logo from "./Logo"
// import {Link} from "react-router-dom"

function NavBar() {
    return (
      <div className="flex items-center h-[10vh] px-16 space-x-20">
        {/* <Link><Logo className=""/></Link> */}
        <Logo className=""/>
        <div className="flex space-x-14" >
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