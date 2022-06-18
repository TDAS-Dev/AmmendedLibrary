import Button from "../Utility/Button"
import uploadIcon from "../../Images/uploadIcon.png"

function UploadIcon(props){
 
    return(
        <div className="flex flex-col justify-center items-center border-2 border-blue-500">
            <img src={uploadIcon} alt="" className="w-[200px] h-auto mb-16"/>
            <div className="flex lg:justify-center lg:items-center lg:space-x-10">
                <Button className="" name="Add a File"/>
                <Button className="" name="Add Multiple Files"/>
            </div>
        </div>
    )
}

export default UploadIcon;