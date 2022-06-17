
function LpCardLeft(props){
    return(
        <div className={lpCardContainerstyle}>
            <div className={LpCardContainer2style}>
                <div className={textDivStyle}>
                    <h1 className={texth1style}>{props.h1}</h1>
                    <p className={textpstyle}>{props.p}</p>
                </div>
                <img src={props.imageSrc} alt={props.imageAlt} className={imgStyle} />
            </div>
        </div>
    )
}

const lpCardContainerstyle = `min-w-screen border-t-[7px] border-gray-300 flex justify-center`
const LpCardContainer2style =`flex lg:flex-row md:flex-row sm:flex-col lg:justify-between md:justify-between items-center lg:w-[75%] md:w-[85%] sm:w-[90%] lg:px-20 md:px-20 lg:py-12 md:py-12 sm:py-8 sm:space-y-5`
const textDivStyle = `lg:max-w-[50%]  md:w-[52%] sm:w-[85%]`
const texth1style = `text-black font-bold lg:text-5xl md:text-4xl sm:text-3xl lg:text-left md:text-left sm:text-center font-lato mb-3`
const textpstyle = `text-black lg:text-2xl md:text-2xl sm:text-[12px] font-light lg:text-left md:text-left sm:text-center font-lato`
const imgStyle = `h-auto lg:w-[50%] md:w-[52%] sm:w-[60%]`

export default LpCardLeft;