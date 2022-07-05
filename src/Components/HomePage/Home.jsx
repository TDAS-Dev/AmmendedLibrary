
// import Data from "./data/HomeData.js"
import HomeCard from "./HomeCard";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "../../constants/contractABI.json"
import contractAddress from "../../constants/constants.js"

function Home() {
    const [libraryFiles, setLibraryFiles] = useState([])

    // ..Ethers.js read function to check if address is an uploader
    // const fetchFiles = async () => {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     await provider.send("eth_requestAccounts", [])
    //     const decentralizedLibrary = new ethers.Contract(contractAddress, contractABI, provider)
    //     const contractFiles = await decentralizedLibrary._getListOfAllUploadedFiles()
    //     setLibraryFiles(contractFiles)
    // }

    useEffect( () => {
        async function fetchFiles() {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", [])
            const decentralizedLibrary = new ethers.Contract(contractAddress, contractABI, provider)
            const contractFiles = await decentralizedLibrary._getListOfAllUploadedFiles()
            setLibraryFiles(contractFiles)
        }
        fetchFiles()
    }, [libraryFiles])

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:mx-40 sm:mx-2">
            {libraryFiles.map((file, index) => {
                return (
                    <HomeCard
                        key={index}
                        className="break-normal hover:shadow-red-400 hover:scale-105 transition-all"
                        name = {file[1]}
                        uploader = {file[2]}
                        status = {file[5]}
                        link = {file[4]}
                        type = {file[6]}
                    />
                )
            })}
        </div>
    );
}

export default Home;
