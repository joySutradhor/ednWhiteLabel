/* eslint-disable react/no-unescaped-entities */
import { Fade } from "react-awesome-reveal";

const AboutUsSection = () => (
    <div className="sectionGap">
        <div className="aboutUsParent">
            <div>
                <h2 className="titleHeading"> <Fade cascade duration={300}>About Us</Fade></h2>
                <p className="commonPara">So you can optimize costs and effectiveness, access to a diverse range of skills and experience, increase your business offerings to clients, take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more.</p>
                <button className="headerBtnText bg-[#E12026] text-white">Learn More</button>
            </div>
            <div>
                <div>
                    <Fade duration={1200}>
                        <img className="aboutUsImg" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1714743692/whiteLebel/aboutUsImg_q4uxqy.png" alt="About us photo" />
                    </Fade>
                </div>
            </div>
        </div>
    </div>
);

export default AboutUsSection;