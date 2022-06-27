import NavBar from "../Utility/NavBar";
import MobileNavBar from "../Utility/MobileNavBar";
import comingSoon from "../../Images/comingSoon.png"

function PrivatePage() {
    return (
        <div className="">
            <NavBar />
            <MobileNavBar />
            <div className="flex flex-col md:h-[90vh] sm:h-[80vh] justify-center items-center w-[100%]">
                <h1 className={h1style}>Coming Soon...</h1> 
                <img src={comingSoon} alt="maintenance" className="h-auto md:w-[50%] sm:w-[80%]"></img>
            </div>
        </div>
    );
}
const h1style = `text-black font-bold lg:text-3xl md:text-4xl sm:text-2xl text-center font-lato mb-20`

export default PrivatePage;
