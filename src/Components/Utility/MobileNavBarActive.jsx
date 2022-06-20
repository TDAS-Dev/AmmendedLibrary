import { MdOutlineClose } from "react-icons/md";

function MobileNavBarActive() {
    return (
      <div className="lg:hidden md:hidden absolute flex flex-col h-[100vh] top-0 left-0 w-[60%] bg-gray-400 backdrop-opacity-10">
        <div className="h-[10vh] flex items-center mx-8 cursor-pointer">
          <MdOutlineClose className="text-[2.2rem] text-white"/>
        </div>
        <div className="flex flex-col justify-around items-center h-[90vh]">
          <a href="/" className={aStyle}>Home</a>
          <a href="/" className={aStyle}>Upload</a>
          <a href="/" className={aStyle}>Private</a>
          <a href="/" className={aStyle}>Project Team</a>
        </div>
      </div>
    );
}


const aStyle = `font-lato font-semibold text-center text-[1.2rem] text-white`

export default MobileNavBarActive;