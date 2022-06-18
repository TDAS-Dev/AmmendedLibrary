import NavBar from "../Utility/NavBar";
import MobileNavBar from "../Utility/MobileNavBar";

import About from "./About";
import Footer from "../Utility/Footer";

function AboutPage(){

    return(
        <div className="lg:min-h-screen lg:flex lg:flex-col">
            <NavBar />
            <MobileNavBar />
            <About/>
            <Footer className=""/>
        </div>
    )
}

export default AboutPage;
