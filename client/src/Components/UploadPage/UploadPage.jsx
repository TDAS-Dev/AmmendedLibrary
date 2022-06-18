
import Upload from "./Upload"
import NavBar from "../Utility/NavBar"
import MobileNavBar from "../Utility/MobileNavBar"

function UploadPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <MobileNavBar />
            <Upload />
        </div>
    );
}

export default UploadPage;
