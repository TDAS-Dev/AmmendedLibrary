import { FaPlus } from "react-icons/fa";

function MobileUpload(props){
       
    return(
        <div className="md:hidden sm:flex flex-col items-center space-y-1 my-5">
            <div className="bg-red-500 rounded-full aspect-square w-[4.5rem] flex justify-center items-center">
                <FaPlus className="text-3xl text-white"/>
            </div>
            <h1 className="text-2xl font-semibold">Upload Files</h1>
            <p className="text-[0.5rm] font-normal">Add up to 2 GB</p>
        </div>
    )
}

export default MobileUpload;