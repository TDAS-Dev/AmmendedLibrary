import { MdOutlineClose } from "react-icons/md";
import {Link} from "react-router-dom"
import Logo from "./Logo";

function MobileNavBarActive2({setMenuActive}) {
  const menuActiveHandler = () => {
    setMenuActive(false)
  }

  return (
    <div className="lg:hidden md:hidden absolute flex flex-col h-[100vh] top-0 left-0 w-[60%] bg-gray-400 backdrop-opacity-10 z-50">
      <div className="absolute left-4 h-[8vh] flex items-center">
        <MdOutlineClose className="text-[2.2rem] text-white" onClick={menuActiveHandler}/>
      </div>
      <div className="h-[8vh] flex items-center mx-4 cursor-pointer justify-center">
        <Logo onClick={menuActiveHandler}/>
      </div>
      <div className="flex flex-col justify-around items-center h-[92vh]">
        <Link to="/home" className={aStyle}>Home</Link>
        <Link to="/upload" className={aStyle}>Upload</Link>
        <Link to="/private" className={aStyle}>Private</Link>
        <Link to="/project-team" className={aStyle}>Project Team</Link>
      </div>
    </div>
  );
}


const aStyle = `font-lato font-semibold text-center text-[1.2rem] text-white`

export default MobileNavBarActive2;