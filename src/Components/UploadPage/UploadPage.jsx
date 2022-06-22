
import MobileUpload from "./MobileUpload/MobileUpload";
import DesktopUpload from "./DesktopUpload/DesktopUpload";
// import FileUploadTest from "./FileUploadTest";

function UploadPage() {
    return (
        <div className="">
            <MobileUpload />
            <DesktopUpload />
            {/* <FileUploadTest /> */}
        </div>
    );
}
export default UploadPage;


