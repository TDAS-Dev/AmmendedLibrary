import NavBar from "../Utility/NavBar";
import MobileNavBar from "../Utility/MobileNavBar";
import Home from "./Home"


function HomePage() {
    return (
        <div className="">
            <NavBar />
            <MobileNavBar />
            <Home />
        </div>
    );
}
export default HomePage;
