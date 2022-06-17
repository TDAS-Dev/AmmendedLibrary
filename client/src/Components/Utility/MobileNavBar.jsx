
function MobileNavBar() {
    return (
      <div className="lg:hidden md:hidden absolute flex flex-col justify-around items-center h-[100vh] top-0 left-0 w-[60%] bg-gray-400 backdrop-opacity-10">
        
        <a href="/" className={aStyle}>Home</a>
        <a href="/" className={aStyle}>Upload</a>
        <a href="/" className={aStyle}>Private</a>
        <a href="/" className={aStyle}>Project Team</a>
      </div>
    );
}

const aStyle = `font-lato font-semibold text-center text-[1.2rem] text-white`

export default MobileNavBar;