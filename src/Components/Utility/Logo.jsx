import logo from "../../Images/logo.png"

function Logo(){
    return(
        <div className="className">
            <img className="lg:w-[200px] md:w-[160px] sm:w-[130px] cursor-pointer" src={logo} alt="" />
        </div>
    )
}

export default Logo;