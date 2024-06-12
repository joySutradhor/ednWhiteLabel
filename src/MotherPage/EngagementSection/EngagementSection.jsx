/* eslint-disable react/no-unescaped-entities */
import { Fade } from "react-awesome-reveal";
import { GiChart } from "react-icons/gi";
import { Element } from "react-scroll";

const EngagementSection = () => {
    return (
        <Element name="agencySection">
            <div className="sectionGap">
                <div className="engagementHeadingParent">
                    <h2 className="titleHeading relative">
                        <span className="relative z-20">Engagement Models</span>
                        <span className="modelLine" ></span>
                        That Work</h2>
                    <p className="commonPara engagementPara">Our flexible and effective approaches ensure that we can deliver customized solutions that meet our client's specific needs and exceed their expectations. Proven to be successful with more than <mark> 1000+ agencies globally.</mark> </p>

                    <div className="grid 2xl:grid-cols-3 2xl:space-x-[53px] xl:grid-cols-3 xl:space-x-[40px] lg:grid-cols-3 lg:space-x-[30px] md:grid-cols-2 space-y-[20px] md:space-y-0 md:gap-5   group">
                        {/* --------- card one here---------- */}
                        <div className="bg-[#f1f0f0] hover:bg-[#E12026] 2xl:rounded-[10px] xl:rounded-[5px] lg:rounded-[5px] md:rounded-[5px] rounded-[5px] hover:text-white  transition-colors duration-700 ">
                            <div className="2xl:p-[50px] xl:p-[35px] lg:p-[25px] md:p-[15px] p-[10px] ">
                                <div className="engagementIconParent group-hover:bg-white transition-colors duration-700">
                                    <GiChart className="2xl:text-[40px] xl:text-[20px] lg:text-[20px] md:text-[20px] group-hover:text-[#E12026]"></GiChart>
                                </div>
                                <div>
                                    <Fade cascade delay={100}>
                                        <h3 className="engagementCardHeading">Per Project</h3>
                                        <p className="commonPara engementPara">An approach suitable for projects with a clear scope of work and well-identified goals that can be executed in a waterfall working method. Perfect to stay with a specific budget and timeframe.</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>

                        {/* --------- card two here---------- */}

                        <div className="bg-[#f1f0f0] hover:bg-[#E12026] 2xl:rounded-[10px] xl:rounded-[5px] lg:rounded-[5px] md:rounded-[5px] rounded-[5px] hover:text-white  transition-colors duration-700 md:ml-[30px] lg:ml-0">
                            <div className="2xl:p-[50px] xl:p-[35px] lg:p-[25px] md:p-[15px] p-[10px]">
                                <div className="engagementIconParent group-hover:bg-white transition-colors duration-700">
                                    <GiChart className="2xl:text-[40px] xl:text-[20px] lg:text-[20px] md:text-[20px] group-hover:text-[#E12026]"></GiChart>
                                </div>
                                <div>
                                    <Fade cascade delay={100}>
                                        <h3 className="engagementCardHeading">Semi-Agile Approach</h3>
                                        <p className="commonPara engementPara">Have long-term projects that don't have well-identified goals yet, and the scope may change over time? Let our team help set up a custom agile approach to match your needs.</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>

                        {/* --------- card three here---------- */}



                        <div className="bg-[#f1f0f0] hover:bg-[#E12026] 2xl:rounded-[10px] xl:rounded-[5px] lg:rounded-[5px] md:rounded-[5px] rounded-[5px] hover:text-white  transition-colors duration-700 md:mt-[30px] lg:mt-0">
                            <div className="2xl:p-[50px] xl:p-[35px] lg:p-[25px] md:p-[15px] p-[10px] ">
                                <div className="engagementIconParent group-hover:bg-white transition-colors duration-700">
                                    <GiChart className="2xl:text-[40px] xl:text-[20px] lg:text-[20px] group-hover:text-[#E12026]"></GiChart>
                                </div>
                                <div>
                                    <Fade cascade delay={100}>
                                        <h3 className="engagementCardHeading">Dedicated Developer</h3>
                                        <p className="commonPara engementPara"> Get skilled developers or an entire team to work exclusively on your projects, ensuring a high level of expertise, commitment, and timely project completion</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default EngagementSection;