import { Fade, Zoom } from "react-awesome-reveal";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosStar } from "react-icons/io";



const PeopleTalkingSection = () => {
    return (
        <div className="sectionGap">
            <div>
                <h2 className="titleHeading text-center 2xl:pb-[50px] xl:pb-[40px] relative">
                    <span className="relative z-20">People </span>
                    <span className="absolute z-10 2xl:bottom-[70px] 2xl:left-[535px] 2xl:w-[240px] 2xl:h-[7px] bg-red-700"></span>
                    <span> <Fade cascade duration={300}>are talking</Fade> </span> </h2>
                <div className="2xl:grid 2xl:grid-cols-3 2xl:gap-[53px] xl:grid xl:grid-cols-3 xl:gap-[40px] overflow-hidden">
                    <div className="flex flex-col" >

                        <Fade direction="left">
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px]  ">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] ">
                                            <div className="peopleProfileImg">
                                                <img className="h-full w-full object-cover rounded-full" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715073991/whiteLebel/profile_w40jzj.png" alt="profile Img" />
                                            </div>
                                            <div>
                                                <h4 className="peopleProfileHead">Nazmul Islam</h4>
                                                <div className="flex 2xl:space-x-[2px]  xl:space-x-[2px]">
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px]  text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px]  text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px]  text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px]  text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px]  text-yellow-500"></IoIosStar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        {/* -------------card Four here ---------------- */}
                        <Fade direction="down">
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] 2xl:mt-[50px] xl:mt-[35px]">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px]">
                                            <div className="peopleProfileImg">
                                                <img className="h-full w-full object-cover rounded-full" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715073991/whiteLebel/profile_w40jzj.png" alt="profile Img" />
                                            </div>
                                            <div>
                                                <h4 className="peopleProfileHead">Nazmul Islam</h4>
                                                <div className="flex 2xl:space-x-[2px] xl:space-x-[2px]">
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                    </div>
                    <div className="flex flex-col">
                        {/* -------------card Two here ---------------- */}
                        <Zoom>
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] ">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results.  Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results.  Our expert team of developers.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px]">
                                            <div className="peopleProfileImg">
                                                <img className="h-full w-full object-cover rounded-full" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715073991/whiteLebel/profile_w40jzj.png" alt="profile Img" />
                                            </div>
                                            <div>
                                                <h4 className="peopleProfileHead">Nazmul Islam</h4>
                                                <div className="flex 2xl:space-x-[2px] xl:space-x-[2px]">
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        {/* -------------card five here ---------------- */}
                        <Fade direction="right">
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] 2xl:mt-[50px] xl:mt-[35px]">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px]">
                                            <div className="peopleProfileImg">
                                                <img className="h-full w-full object-cover rounded-full" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715073991/whiteLebel/profile_w40jzj.png" alt="profile Img" />
                                            </div>
                                            <div>
                                                <h4 className="peopleProfileHead">Nazmul Islam</h4>
                                                <div className="flex 2xl:space-x-[2px] xl:space-x-[2px]">
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="flex flex-col">
                        {/* -------------card Three here ---------------- */}
                        <Fade direction="right">
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] ">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px]">
                                            <div className="peopleProfileImg">
                                                <img className="h-full w-full object-cover rounded-full" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715073991/whiteLebel/profile_w40jzj.png" alt="profile Img" />
                                            </div>
                                            <div>
                                                <h4 className="peopleProfileHead">Nazmul Islam</h4>
                                                <div className="flex 2xl:space-x-[2px] xl:space-x-[2px]">
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        {/* -------------card six here ---------------- */}
                        <Fade direction="right">
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] 2xl:mt-[50px] xl:mt-[35px]">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results. managers work behind the scenes to deliver exceptional results.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px]">
                                            <div className="peopleProfileImg">
                                                <img className="h-full w-full object-cover rounded-full" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715073991/whiteLebel/profile_w40jzj.png" alt="profile Img" />
                                            </div>
                                            <div>
                                                <h4 className="peopleProfileHead">Nazmul Islam</h4>
                                                <div className="flex 2xl:space-x-[2px] xl:space-x-[2px]">
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                    <IoIosStar className="2xl:text-[14px] xl:text-[14px] text-yellow-500"></IoIosStar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PeopleTalkingSection;