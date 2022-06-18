import MobileNavBar from "../Utility/MobileNavBar"
import Button from "../Utility/Button";
import Logo from "../Utility/Logo";

function Hero() {
    return (
        <div className={heroPageStyle} style={heroStyle}>
            {/* overlay start */}
            <div className="absolute top-0 bg-zinc-900 h-full p-2 w-full opacity-75">
            </div>
            {/* overlay ends */}
            <div className="absolute w-full h-full z-30">
                <div className="sm:hidden md:flex lg:h-[10vh] md:h-[8vh] justify-center items-center">  
                    <Logo />
                </div>
                <MobileNavBar />
                <div className="lg:py-36 lg:flex lg:flex-col lg:items-center md:h-[90vh] md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:justify-center sm:h-[90vh]">
                    <h2 className={h2herostyle}>Welcome Back!</h2>
                    <h1 className={h1herostyle}>Unlimited books, Articles, and more.</h1>
                    <h2 className={h2herostyle}>Read anytime. Access anywhere.</h2>
                    <div className={buttonDivStyle}>
                        <Button className="" name="Explore Library" />
                        <Button className="" name="Connect Wallet" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const heroPageStyle = `relative flex flex-col items-between min-h-screen text-center max-h-fit w-full max-h-100 mix-blend-overlay h-full object-cover bg-no-repeat bg-cover bg-center`
const heroStyle = {
    backgroundImage: `url(https://tinyurl.com/2jwws6ra)`,
}
const h1herostyle = `text-white font-bold lg:text-6xl md:text-4xl sm:text-3xl text-center lg:w-[60%]`
const h2herostyle = `text-white lg:font-bold sm:font-semibold lg:text-2xl md:text-[18px] sm:text-1xl text-center lg:my-6 md:my-4 sm:mt-2 sm:mb-3 font-lato tracking-wider`
const buttonDivStyle = `flex lg:flex-row md:flex-row py-5 sm:flex-col lg:justify-center md:justify-center sm:items-center lg:items-center md:items-center lg:space-x-20 md:space-x-14 sm:space-y-7 lg:space-y-0 md:space-y-0 sm:mt-10`


export default Hero;