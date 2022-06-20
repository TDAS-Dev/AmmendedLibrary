import DestopBackground from "../../../Images/DesktopUpload.jpg"
import DesktopForm from "./DesktopForm"
import NavBar from "../../Utility/NavBar"

function DesktopUpload() {
    return (
        <div className={uploadDesktopPageStyle} style={uploadDesktopStyle}>
            {/* overlay start */}
            <div className="absolute top-0 bg-zinc-900 h-full p-2 w-full opacity-50 -z-10">
            </div>
            {/* overlay ends */}
            {/* imageCredit start */}
            <div className="absolute flex flex-col justify-center lg:items-end md:items-center bottom-0 w-full h-[10vh] bg-none text-white lg:pr-10">
                <div className="text-[1.1rem] font-light">Imagecredit</div>
                <div className="text-[1.3rem] font-medium">Akinlolu Oluwatobi Isaac</div> 
            </div>
            {/* imageCredit ends */}
            <NavBar />
            <div className="flex lg:h-[90vh] md:h-[92vh] w-full lg:justify-start md:justify-center md:items-center lg:p-16">
                <DesktopForm />
            </div>
            
        </div>
    );
}

const uploadDesktopPageStyle = `md:block sm:hidden relative min-h-screen max-h-fit w-full max-h-100 mix-blend-overlay h-full object-cover bg-no-repeat bg-cover bg-center`

const uploadDesktopStyle = {
    backgroundImage: `url(${DestopBackground})`,
}

export default DesktopUpload;
