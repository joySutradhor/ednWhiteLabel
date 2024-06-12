/* eslint-disable react/no-unescaped-entities */
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";

const AboutUsSection = () => (
    <Element   name="aboutusSection" className="element">
        <div className="sectionGap" >
            <div className="aboutUsParent">
                <div className="">
                    <h2 className="titleHeading"> <Fade cascade duration={300}>About Us</Fade></h2>
                    <div className="md:hidden pb-[20px]">
                        <div>
                            <Fade duration={1200}>
                                <img className="aboutUsImg" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1714743692/whiteLebel/aboutUsImg_q4uxqy.png" alt="About us photo" />
                            </Fade>
                        </div>
                    </div>
                    <p className="commonPara">So you can optimize costs and effectiveness, access to a diverse range of skills and experience, increase your business offerings to clients, take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more.</p>
                    <button className="headerBtnText bg-[#E12026] text-white">Learn More</button>
                </div>
                <div className="hidden md:block">
                    <div>
                        <Fade duration={1200}>
                            <img className="aboutUsImg" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1714743692/whiteLebel/aboutUsImg_q4uxqy.png" alt="About us photo" />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    </Element>
);

export default AboutUsSection;