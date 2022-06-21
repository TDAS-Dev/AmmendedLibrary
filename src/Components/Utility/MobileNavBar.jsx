import Logo from "./Logo"
import { MdMenu } from "react-icons/md";
import {Link} from "react-router-dom"

function MobileNavBar(props){
       
    return(
        <div className="lg:hidden md:hidden sm:flex justify-center items-center h-[8vh] relative">
            <MdMenu className="text-[1.8rem] absolute left-4"/>
            <Link to="/"><Logo className=""/></Link>
        </div>
    )
}

export default MobileNavBar;