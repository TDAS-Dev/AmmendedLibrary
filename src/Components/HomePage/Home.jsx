
import Data from "./data/HomeData.js"
import HomeCard from "./HomeCard";

function Home() {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:mx-40 sm:mx-2">
            {Data.map((data, index) => {
                return (
                    <HomeCard
                        key={index}
                        className="break-normal hover:shadow-red-400 hover:scale-105 transition-all"
                        name = {data.name}
                        uploader = {data.uploader}
                        status = {data.status}
                        link = {data.link}
                    />
                )
            })}
        </div>
    );
}

export default Home;
