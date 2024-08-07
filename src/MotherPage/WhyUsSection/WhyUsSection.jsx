/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */

import { FaHeartPulse } from "react-icons/fa6";
import { GiChart } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa6";
import { Fade, Zoom } from "react-awesome-reveal";



const WhyUsSection = () => {
    return (
        <div className="sectionGap">
            <div className="whyChooseUsParent">
                <div className="   lg:order-1 order-2 md:block hidden  ">
                    <img className="h-full w-full object-cover 2xl:rounded-[10px] xl:rounded-[5px] lg:rounded-[5px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1714974336/whiteLebel/whyUs_euww80.png" alt="" />
                </div>
                <div className="  lg:order-2 order-1 ">
                    <h1 className="titleHeading relative"> <span className="relative z-20"><span> <Fade cascade duration={300}>So, Why Us?</Fade> </span></span> <span className="soWhyUsLine"></span> </h1>

                    <div className=" md:hidden  lg:order-1 order-2 pb-[20px] ">
                        <img className="h-full w-full object-cover 2xl:rounded-[10px] xl:rounded-[5px] lg:rounded-[5px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1714974336/whiteLebel/whyUs_euww80.png" alt="" />
                    </div>
                    <p className="commonPara">So you can optimize done costs and effectiveness, access to a diverse range of skills and experience, increase your business offerings to clients, take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more.</p>
                    <div>
                        <div className="flex 2xl:space-x-[35px] xl:space-x-[20px] lg:space-x-[15px] md:space-x-[10px] space-x-[10px] md:pb-[30px] lg:pb-0">
                            <div className="relative iconsParentWhyUsSection">
                                <div className="flex  items-center">
                                    <div className="innerParentWhyUs">
                                        <FaHeartPulse className="2xl:text-[35px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[20px] text-white"></FaHeartPulse>
                                    </div>
                                    <div>
                                        <p className="webHealthText">Web Health</p>
                                    </div>
                                </div>
                            </div>
                            <div className="iconsSingleParent">
                                <Zoom><MdDashboard className="2xl:text-[35px] xl:text-[25px]"></MdDashboard></Zoom>
                            </div>
                            <div className="iconsSingleParent">
                                <Zoom delay={100}><FaGraduationCap className="2xl:text-[35px] xl:text-[25px]"></FaGraduationCap></Zoom>
                            </div>
                            <div className="iconsSingleParent">
                                <Zoom delay={200}><GiChart className="2xl:text-[35px] xl:text-[25px]"></GiChart></Zoom>
                            </div>
                            <div className="iconsSingleParent">
                                <Zoom delay={300}><VscWorkspaceTrusted className="2xl:text-[35px] xl:text-[25px] "></VscWorkspaceTrusted></Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUsSection;