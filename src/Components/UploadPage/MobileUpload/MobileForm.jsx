import { FaPlus } from "react-icons/fa";
import Button from "../../Utility/Button";
import { useState } from "react";
import { Buffer } from "buffer";
import { create } from "ipfs-http-client";

//create the ipfs infura link client for uploads
const client = create('https://ipfs.infura.io:5001/api/v0')

function MobileForm(props){
    const [file, setFile] = useState(null);
    const [urlArr, setUrlArr] = useState([]);

    //Function to get the file loaded into the system. It is done using the buffer package.
    const retrieveFile = (e) => {
        const data = e.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend = () => {
            console.log("Buffer data: ", Buffer(reader.result));
            setFile(Buffer(reader.result));
        }
        e.preventDefault();
    }

    //Function to handle uploading a file to ipfs.
    //function returns the ipfs link (hash) to the file and saves it in the urlArr state.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const created = await client.add(file);
            const url = `https://ipfs.infura.io/ipfs/${created.path}`;
            setUrlArr(prev => [...prev, url]);      
        }
        catch (error) {
            console.log(error.message);
        }
        console.log(urlArr)
    } 
       
    return(
        <div className="">
            <div className="md:hidden sm:flex flex-col items-center space-y-1 my-5">
                <div className="bg-red-500 rounded-full aspect-square w-[4.5rem] flex justify-center items-center">
                    <label htmlFor="file-upload">
                        <FaPlus className="text-3xl text-white"/>
                    </label>
                    <input type="file" name="data" className="hidden" onChange={retrieveFile} id="file-upload"/>
                </div>
                <h1 className="text-2xl font-semibold text-white">Upload Files</h1>
                <p className="text-[0.5rm] font-normal text-white">Add up to 2 GB</p>
            </div>
            <form className="md:hidden sm:flex flex-col mx-4 my-16" onSubmit={handleSubmit} id="uploadIpfs">
                <div className="sm:flex flex-col bg-gray-100 px-4 py-4 drop-shadow my-4">
                    <h1 className="text-xl font-medium">Title</h1>
                    <p className="text-[0.75rem] font-light">Add a Title to reference your document</p>
                    <input type="text" className="bg-gray-100 border-b-[0.5px] border-b-gray-300 h-8 focus:outline-none"/>
                </div>
                <div className="sm:flex flex-col bg-gray-100 px-4 py-4 drop-shadow my-4">
                    <h1 className="text-xl font-medium">Description</h1>
                    <p className="text-[0.75rem] font-light">Add description for your document</p>
                    <input type="text" className="bg-gray-100 border-b-[0.5px] border-b-gray-300 h-8 focus:outline-none"/>
                </div>
                <Button className="my-4" name="Upload" type="submit" form="uploadIpfs"/>
            </form>
        </div>
    )
}

export default MobileForm;