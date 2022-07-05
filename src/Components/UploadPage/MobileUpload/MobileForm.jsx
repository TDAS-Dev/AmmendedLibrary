import { FaPlus } from "react-icons/fa";
import Button from "../../Utility/Button";
import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ethers } from "ethers";
import contractABI from "../../../constants/contractABI.json"
import contractAddress from "../../../constants/constants.js"

//create the ipfs infura link client for uploads
const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


function MobileForm(props){
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
       
    return(
        <div className="">
            <div className="md:hidden sm:flex flex-col items-center space-y-1 my-5">
                <div className="bg-red-500 rounded-full aspect-square w-[4.5rem] flex justify-center items-center">
                    <label htmlFor="file-upload">
                        <FaPlus className="text-3xl text-white"/>
                    </label>
                    <input type="file" name="data" className="" onChange={(e) => preUpload(e)} id="file-upload"/>
                </div>
                <h1 className="text-2xl font-semibold text-white">Upload Files</h1>
                <p className="text-[0.5rm] font-normal text-white">Add up to 2 GB</p>
            </div>
            <form className="md:hidden sm:flex flex-col mx-4 my-16" onSubmit={handleSubmit} id="uploadIpfs">
                <div className="sm:flex flex-col bg-gray-100 px-4 py-4 drop-shadow my-4">
                    <h1 className="text-xl font-medium">Title</h1>
                    <p className="text-[0.75rem] font-light">Add a Title to reference your document</p>
                    <input type="text" className="bg-gray-100 border-b-[0.5px] border-b-gray-300 h-8 focus:outline-none" onChange={(e) => setFileTitle(e.target.value)}/>
                </div>
                <div className="sm:flex flex-col bg-gray-100 px-4 py-4 drop-shadow my-4">
                    <h1 className="text-xl font-medium">Description</h1>
                    <p className="text-[0.75rem] font-light">Add description for your document</p>
                    <input type="text" className="bg-gray-100 border-b-[0.5px] border-b-gray-300 h-8 focus:outline-none"/>
                </div>
                <div className="sm:flex flex-col bg-gray-100 px-4 py-4 drop-shadow my-4">
                    <h1 className="text-xl font-medium">Status</h1>
                    <p className="text-[0.75rem] font-light">Set Public or Private file</p>
                    <input type="text" className="bg-gray-100 border-b-[0.5px] border-b-gray-300 h-8 focus:outline-none" onChange={(e) => setFileStatus(e.target.value)}/>
                </div>
                <Button className="my-4" name="Upload" type="submit" form="uploadIpfs"/>
            </form>
        </div>
    )
}

export default MobileForm;