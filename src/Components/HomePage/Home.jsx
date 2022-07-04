
import Data from "./data/HomeData.js"
import HomeCard from "./HomeCard";

// import { useState } from "react";
// import { ethers } from "ethers";
// import contractABI from "../../constants/contractABI.json"
// import contractAddress from "../../constants/constants.js"

function Home() {
    // const [libraryFiles, setLibraryFiles] = useState([])

    // ..Ethers.js read function to check if address is an uploader
    // const fetchFiles = async () => {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     await provider.send("eth_requestAccounts", [])
    //     const decentralizedLibrary = new ethers.Contract(contractAddress, contractABI, provider)
    //     const contractFiles = await decentralizedLibrary._getListOfAllUploadedFiles()
    //     console.table(contractFiles[0][4]);
    //     // setLibraryFiles([])
    //     // console.log(libraryFiles)
    // }

    // fetchFiles()

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:mx-40 sm:mx-2">
            {Data.map((data, index) => {
                return (
                    <HomeCard
                        key={index}
                        className="break-normal hover:shadow-red-400 hover:scale-105 transition-all"
                        name = {data.name}
                        uploader = {data.uploader}
                        status = {data.status}
                        link = {data.link}
                    />
                )
            })}
        </div>
    );
}

export default Home;
