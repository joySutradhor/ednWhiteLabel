/* eslint-disable react/no-unescaped-entities */
import { Fade } from "react-awesome-reveal";

const OurClientSection = () => {
    return (
        <div>
            <div className="sectionGap">
                <div className="ourClientHeading">
                    <div>
                        <h2 className="titleHeading"><span> <Fade cascade duration={300}>Our Clients</Fade> </span></h2>
                        <p className="commonPara OurClinetPara" >We are a white-label partner for more than 1000+ digital agencies from countries across the globe, including the US, Canada, Ireland, the UK, France, and Australia. We know the ins and outs, and we're here to assist you in growing your agency business.</p>
                    </div>
                </div>
                <div className="ourClientImgParent">
                    <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715066228/whiteLebel/map_mqlbdv.png" alt="client map" />
                </div>
            </div>
        </div>
    );
};

export default OurClientSection;