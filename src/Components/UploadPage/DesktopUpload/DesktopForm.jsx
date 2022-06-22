import { FaPlus } from "react-icons/fa";
import Button from "../../Utility/Button"
import { useState } from "react";
import { Buffer } from "buffer";
import { create } from "ipfs-http-client";
const client = create('https://ipfs.infura.io:5001/api/v0')

function DesktopForm() {
    const [file, setFile] = useState(null);
    const [urlArr, setUrlArr] = useState([]);

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

    return (
        <div className="bg-white rounded-xl w-72 drop-shadow">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center my-6 pl-5">
                    <div className="bg-red-600 hover:bg-red-500 rounded-full aspect-square w-[2.5rem] flex justify-center items-center cursor-pointer">
                        <label htmlFor="file-upload" className="cursor-pointer">
                            <FaPlus className="text-1xl text-white"/>
                        </label>
                        <input type="file" name="data" className="hidden" onChange={retrieveFile} id="file-upload"/>
                    </div>
                    <div className="mx-4">
                        <h1 className="text-[1.4rem] font-normal">Upload files</h1>
                        <h2 className="text-[0.85rem] underline underline-offset-[1.5px] font-light cursor-pointer">Or select multiple files</h2>
                    </div>
                </div>
                <div className="border-t border-b border-gray-300 mt-6 pl-5 w-full pr-4">
                    <div className="border-b border-gray-300 px-1 pt-3 pb-2">
                        <h1 className="text-[0.95rem] font-normal text-gray-600">Title</h1>
                        <input type="text" placeholder= "" className="h-4 focus:outline-none text-[0.8rem] mb-2"/>
                    </div>
                    <div className="border-b border-gray-300 px-1 pt-3 pb-2">
                        <h1 className="text-[0.95rem] font-normal text-gray-600">Description</h1>
                        <input type="text" placeholder= "" className="h-4 focus:outline-none text-[0.8rem] mb-2"/>
                    </div>
                    <div className="px-1 pt-3 pb-2">
                        <h1 className="text-[0.95rem] font-normal text-gray-600">Private/Public</h1>
                        <input type="text" placeholder= "" className="h-4 focus:outline-none text-[0.8rem] mb-2"/>
                    </div>
                </div>
                <div className="flex justify-center py-4 w-full">
                    <Button name="Upload" type="submit"/>
                </div>
            </form>
        </div>
    );
}

export default DesktopForm;
