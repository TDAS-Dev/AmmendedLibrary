import LpCardLeft from "./LpCardLeft";
import LpCardRight from "./LpCardRight";
import LpImage1 from "../../Images/landingPageImg1.jpg";
import LpImage2 from "../../Images/landingPageImg2.jpg";
import LpImage3 from "../../Images/landingPageImg3.jpg";
import LpImage4 from "../../Images/landingPageImg4.jpg";

function Features() {
    return (
        <div className="">
            <LpCardLeft
                h1="Upload documents to Ipfs,Infura."
                p="One upload, lifetime access to your document at your calling and choice."
                imageSrc={LpImage1}
                imageAlt="Image 01-Landing Page"
            />
            <LpCardRight
                h1="Keep your personal documents private."
                p="Safeguard your private items and retain unlimited access to your document."
                imageSrc={LpImage2}
                imageAlt="Image 02-Landing Page"
            />
            <LpCardLeft
                h1="Share and collaborate with your team."
                p="Share your documents with your teammates and your organization."
                imageSrc={LpImage3}
                imageAlt="Image 03-Landing Page"
            />
            <LpCardRight
                h1="Organize and customize your experience."
                p="Customize your viewing to get the best recommendations and suggestions."
                imageSrc={LpImage4}
                imageAlt="Image 04-Landing Page"
            />
        </div>
    );
}

export default Features;