import MobileNavBarInactive from "./MobileNavBarInactive";
// import MobileNavBarActive from "./MobileNavBarActive";
import MobileNavBarActive2 from "./MobileNavBarActive2";
import {useState} from "react"

function MobileNavBar(props){
    const [menuActive, setMenuActive] = useState(false)

    return(
        <div className="lg:hidden md:hidden sm:block">
            <div className="">
                <MobileNavBarInactive setMenuActive={setMenuActive}/>
            </div>
            <div className={menuActive ? barActive : barInactive}>
                {/* <MobileNavBarActive setMenuActive={setMenuActive}/> */}
                <MobileNavBarActive2 setMenuActive={setMenuActive}/>
            </div>
        </div>
    )
}

const barInactive = `hidden`
const barActive = `block`

export default MobileNavBar;