
function About(){
    
    function githubHandler(data) {
        window.open(
            `${data}`,
            '_blank' 
        )
    }

    const imageStyle = `flex items-end md:h-[480px] md:w-[384px] sm:h-[432px] sm:w-[343px] bg-no-repeat bg-cover bg-center md:p-[24px] sm:p-[16px] mt-20`
    const imageExtraStyle = {
        backgroundImage: `url(https://bafybeihv7ijy6jniaszyqz26vyev2qbr3wldczj5ih5tio2hohh3n5kxca.ipfs.infura-ipfs.io/)`
    }

    return(
        <div className="flex flex-col items-center">
            <h1 className={h1Style}>Meet me and the project</h1>
            <h2 className={h2Style}>
                The Project originated as a BlockGames Zuri task in February 2022. It is built as an opportunity to explore the possibilities and applications of web3 and decentralization in our current ecosystem.
            </h2>
            <h2 className={h2Style}>
                It aims to solve the "occasional" failures of popular storage systems like google. However, there are few bugs in the current build as this is a relatively new endeavour. Enjoy.
            </h2>
            <div className="flex md:flex-row sm:flex-col-reverse md:justify-center md:mt-[40px] sm:mt-[32px] text-center">
                <button className="text-[#344054] font-500 text-[16px] bg-none rounded-[8px] md:px-[20px] py-[12px] border-[1px] md:mr-[40px] border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-red-400 hover:text-white" onClick={()=> githubHandler("https://github.com/TDAS-Dev/AmmendedLibrary")}>Project Github Repo</button>
                <button className="text-[#344054] font-500 text-[16px] bg-none rounded-[8px] md:px-[20px] py-[12px] border-[1px] md:mr-[40px] border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-red-400 hover:text-white" onClick={()=> githubHandler("https://github.com/arcteggzz")}>My Github Profile</button>
                <button className="text-[#344054] font-500 text-[16px] bg-none rounded-[8px] md:px-[20px] py-[12px] border-[1px] md:mr-[40px] border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-red-400 hover:text-white" onClick={()=> githubHandler("https://drive.google.com/file/d/1bOIvp80td1QYZ9GE5e9e2Jn3_laBJPhU/view?usp=sharing")}>View CV</button>
                <button className="text-[#344054] font-500 text-[16px] bg-none rounded-[8px] md:px-[20px] py-[12px] border-[1px] md:mr-[40px] border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-red-400 hover:text-white">Video Description</button>
            </div>
            <div className={imageStyle} style={imageExtraStyle}>
                <div className="py-[24px] md:px-[20px] sm:px-[16px] border-[1px] border-[rgba(255,255,255,0.5)] md:w-[336px] md:h-[188px] sm:w-[311px] sm:h-[204px] bg-[rgba(255,255,255,0.3)] backdrop-blur-[24px]">
                    <h1 className="md:text-[30px] sm:text-[24px] font-[600] text-[#FFFFFF] md:leading-[38px] sm:leading-[32px]">Esedere Oghenetega</h1>
                    <h2 className="md:text-[18px] sm:text-[16px] font-[600] text-[#FFFFFF] md:leading-[28px] sm:leading-[24px] mb-[4px]">Blockchain Fullstack</h2>
                    <p className="md:text-[16px] sm:text-[14px] font-[400] text-[#FFFFFF] md:leading-[24px] sm:leading-[20px] md:mb-[32px] sm:mb-[24px]">Frontend Dev at UnbugQa, Intern at Zuri blockgames.</p>
                </div>
            </div>
        </div>
    )
}

// const h1Aboutstyle = `text-black font-bold lg:text-4xl md:text-3xl sm:text-xl text-center font-raleway`
const h1Style = `text-[36px] font-[700] text-[#101828] sm:px-[16px] md:leading-[60px] sm:leading-[44px] text-center`
const h2Style = `text-[20px] font-[400] text-[#667085] md:mt-[20px] sm:mt-[16px] md:leading-[30px] sm:leading-[28px] md:px-[336px] sm:px-[16px] text-center`
// const h2Aboutstyle = `text-black lg:font-light sm:font-light lg:text-[18px] md:text-[16px] sm:text-[16px] text-center lg:my-6 md:my-4 sm:mt-2 sm:mb-3 font-lato lg:w-[60%] md:w-[75%] sm:w-[85%] text-warp sm:leading-[20px]`
// const btnStyle = `bg-red-600 hover:bg-red-500 text-white py-[0.4rem] rounded-lg font-lato font-bold lg:w-[20%] md:w-[25%] sm:w-[75%] font-bold text-[12px] sm:[14px] uppercase tracking-wide`

export default About;
