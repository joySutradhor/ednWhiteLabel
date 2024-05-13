import { Fade } from "react-awesome-reveal";


const HeroContentSection = () => {
    return (
        <div>
            <div className="heroContentParent">
                <div>
                    <img className="heroContentImg " src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1714740508/whiteLebel/heroImg_s5ykge.png" alt="HeroContentImg" />
                </div>
                <div>
                    <div className="2xl:pr-[100px] xl:pr-[50px] lg:pr-[40px]">
                        <h2 className="titleHeading relative">White-Label Web Development Services for
                            <span className="relative z-20"> Creative Agencies</span>
                            <span className="creativeLine"></span>
                        </h2>
                        <Fade direction="right" duration={500}>
                            <p className="commonPara">A reliable coding partner that delivers solutions to your business challenges and stays by your side in the long term. Having the whole spectrum of web development expertise, we are here to take care of your projects while making it possible for you to focus on growing your own business.</p>
                        </Fade>

                        <div className="heroContainerbtnParent">
                            <button className="headerBtnText  bg-[#E12026] text-white">Get In Touch</button>
                            <button className="headerBtnTextWhite  ">Get In Touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContentSection;