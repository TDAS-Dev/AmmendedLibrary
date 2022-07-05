import { FaPlus } from "react-icons/fa";
import Button from "../../Utility/Button"
import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ethers } from "ethers";
import contractABI from "../../../constants/contractABI.json"
import contractAddress from "../../../constants/constants.js"

//create the ipfs infura link client for uploads
const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


function DesktopForm() {
    const [file, setFile] = useState({});
    const [fileTitle, setFileTitle] = useState("");
    const [fileStatus, setFileStatus] = useState("");
    
    // Function to get the file loaded into the system. It is done using the buffer package.
    const preUpload = (e) => {
        console.log("fired")
        if (e.target.value !== '') {
            setFile(e.target.files[0])
        } else {
            setFile({})
        }
    }
    
    //Function to handle uploading a file to ipfs.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const added = await ipfs.add(file);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            const hash = (added.path).toString()
            const fileName= (file.name.substr(0, file.name.lastIndexOf("."))).toString()
            const fileType= (file.name.split('.').pop()).toString()
            upload(fileName, fileTitle, hash, url, fileStatus, fileType)     
        }
        catch (error) {
            console.log(error.message);
        }
    }
    
    // Ethers.js Write function to add file to smart contract
    const upload = async(_fileName, _fileTitle, _hash, _url, _fileStatus, _fileType)=> {
        //create a provider that injects the wallet in the current window
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        //request for your request
        await provider.send("eth_requestAccounts", [])
        //signer account to face this place
        const signer = await provider.getSigner()
        const decentralizedLibrary = new ethers.Contract(contractAddress, contractABI, signer)

        await decentralizedLibrary._upload(_fileName, _fileTitle, _hash, _url, _fileStatus, _fileType)
    }

    return (
        <div className="bg-white rounded-xl w-72 drop-shadow">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center my-6 pl-5">
                    <div className="bg-red-600 hover:bg-red-500 rounded-full aspect-square w-[2.5rem] flex justify-center items-center cursor-pointer">
                        <label htmlFor="file-upload" className="cursor-pointer">
                            <FaPlus className="text-1xl text-white"/>
                        </label>
                        <input type="file" name="data" className="" onChange={(e) => preUpload(e)} id="file-upload"/>
                    </div>
                    <div className="mx-4">
                        <h1 className="text-[1.4rem] font-normal">Upload files</h1>
                        <h2 className="text-[0.85rem] underline underline-offset-[1.5px] font-light cursor-pointer">Or select multiple files</h2>
                    </div>
                </div>
                <div className="border-t border-b border-gray-300 mt-6 pl-5 w-full pr-4">
                    <div className="border-b border-gray-300 px-1 pt-3 pb-2">
                        <h1 className="text-[0.95rem] font-normal text-gray-600">Title</h1>
                        <input type="text" placeholder= "" className="h-4 focus:outline-none text-[0.8rem] mb-2" onChange={(e) => setFileTitle(e.target.value)}/>
                    </div>
                    <div className="border-b border-gray-300 px-1 pt-3 pb-2">
                        <h1 className="text-[0.95rem] font-normal text-gray-600">Description</h1>
                        <input type="text" placeholder= "" className="h-4 focus:outline-none text-[0.8rem] mb-2"/>
                    </div>
                    <div className="px-1 pt-3 pb-2">
                        <h1 className="text-[0.95rem] font-normal text-gray-600">Private/Public</h1>
                        <input type="text" placeholder= "" className="h-4 focus:outline-none text-[0.8rem] mb-2" onChange={(e) => setFileStatus(e.target.value)}/>
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
