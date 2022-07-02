
import imageIcon from "../../Images/imageIcon.png"

function HomeCard(props) {
    return (
        <div className="break-normal hover:shadow-red-200 transition-all hover:cursor-pointer bg-white shadow-md rounded-lg md:m-3 sm:my-4 sm:mx-auto p-2 lg:max-w-[95%] sm:max-w-[75%] sm:flex sm:flex-col lg:items-start sm:items-center">
            <img src={imageIcon} alt="imageIcon" className="aspect-auto lg:w-[50%] sm:w-[30%] text-center"/>
            <div className="flex flex-col lg:items-start sm:items-center">
                <h1 className="text-[1.1rem] font-medium">{props.name}</h1>
                <a href={props.link} className="text-[0.85rem] underline text-red-300 hover:text-red-500 italic font-semibold">View File</a>
                <p className="text-[0.7rem] font-light">{props.uploader}</p>
                <p className="text-[0.7rem] font-light">{props.status}</p>
            </div>
        </div>
    );
}

export default HomeCard;