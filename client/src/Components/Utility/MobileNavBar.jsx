import Logo from "./Logo"
import { MdMenu } from "react-icons/md";

function MobileNavBar(props){
       
    return(
        <div className="lg:hidden md:hidden sm:flex justify-center items-center h-[8vh] relative">
            <MdMenu className="text-[1.8rem] absolute left-4"/>
            <Logo />
        </div>
    )
}

export default MobileNavBar;