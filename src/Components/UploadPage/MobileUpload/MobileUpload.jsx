// import mobileBackground from "../../Images/PB_hd_mobile2.jpg"
import mobileBackground1 from "../../../Images/PB_hd_phone.jpg"
// import mobileBackground2 from "../../Images/PB_hd_mobile2.jpg"
import MobileUploadButton from "./MobileUploadButton";
import MobileForm from "./MobileForm";
import MobileNavBar from "../../Utility/MobileNavBar"

function MobileUpload() {
    return (
        <div className={uploadMobilePageStyle} style={uploadMobileStyle}>
            {/* overlay start */}
            {/* <div className="absolute top-0 bg-zinc-900 h-full p-2 w-full opacity-20 -z-10">
            </div> */}
            {/* overlay ends */}
            {/* imageCredit start */}
            <div className="md:hidden sm:block absolute bottom-0 w-full h-[8vh] bg-none text-center text-white">
                <div className="text-[0.75rem] font-light">Imagecredit</div>
                <div className="text-[1rem] font-medium">Akinlolu Oluwatobi Isaac</div> 
            </div>
            {/* imageCredit ends */}
            <MobileNavBar />
            <MobileUploadButton />
            <MobileForm />
        </div>
    );
}

const uploadMobilePageStyle = `md:hidden sm:block relative min-h-screen max-h-fit w-full max-h-100 mix-blend-overlay h-full object-cover bg-no-repeat bg-cover bg-center`
const uploadMobileStyle = {
    backgroundImage: `url(${mobileBackground1})`,
}

export default MobileUpload;
