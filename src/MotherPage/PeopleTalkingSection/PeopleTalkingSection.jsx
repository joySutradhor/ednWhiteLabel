import { Fade, Zoom } from "react-awesome-reveal";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosStar } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./PeopleTalking.css"


const PeopleTalkingSection = () => {

    const settingsSmallDevices = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        speed: 700,
        cssEase: "linear",
        prevArrow: <CustomPrevArrowSmallDevices />,
        nextArrow: <CustomNextArrowSmallDevices />,

    };

    return (
        <div className="sectionGap">
            <div>
                <h2 className="titleHeading text-center 2xl:pb-[50px] xl:pb-[40px] lg:pb-[30px] md:pb-[20px] relative">
                    <span className="relative z-20">People </span>
                    <span className="peopleTalkingLine"></span>
                    <span> <Fade cascade duration={300}>are talking</Fade> </span> </h2>
                <div className="hidden lg:block 2xl:grid 2xl:grid-cols-3 2xl:gap-[53px] xl:grid xl:grid-cols-3 xl:gap-[40px]
                lg:grid lg:grid-cols-3  lg:gap-[30px]
                overflow-hidden">
                    <div className="flex flex-col  " >

                        <Fade direction="left">
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]   xl:rounded-[5px] lg:rounded-[5px]  md:rounded-[5px]">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px] md:text-[30px]  text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px] md:space-x-[5px] ">
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
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] 2xl:mt-[50px] xl:mt-[35px] lg:mt-[25px] rounded-[5px]">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px]  text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px]">
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
                    <div className="flex flex-col  ">
                        {/* -------------card Two here ---------------- */}
                        <Zoom>
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] ">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px]  text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results.  Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results.  Our expert team of developers.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px] ">
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
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] 2xl:mt-[50px] xl:mt-[35px] lg:mt-[25px] rounded-[5px]">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px]  text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px]">
                                            <div className="peopleProfileImg">
                                                <img className="h-full w-full object-cover rounded-full" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715073991/whiteLebel/profile_w40jzj.png" alt="profile Img" />
                                            </div>
                                            <div>
                                                <h4 className="peopleProfileHead">Nazmul </h4>
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
                    <div className="flex flex-col md:grid ">
                        {/* -------------card Three here ---------------- */}
                        <Fade direction="right">
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px]  ">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px]  text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px]">
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
                            <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] 2xl:mt-[50px] xl:mt-[35px] lg:mt-[25px] rounded-[5px]">
                                <div className="peopleCardParent">
                                    <div>
                                        <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px]  text-[#E12026]"></ImQuotesLeft>
                                    </div>
                                    <div>
                                        <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results. managers work behind the scenes to deliver exceptional results.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px]">
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

                {/*=-========================  slider for small devices =-======================== */}

                <div className="slider-container lg:hidden block">
                    <Slider {...settingsSmallDevices} >

                        <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] ">
                            <div className="peopleCardParent">
                                <div>
                                    <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px] md:text-[30px] text-[30px] text-[#E12026]"></ImQuotesLeft>
                                </div>
                                <div>
                                    <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results.  Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results.  Our expert team of developers.</p>
                                </div>
                                <div>
                                    <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px] md:space-x-[10px] space-x-[10px] ">
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

                        <div className="bg-[#F1f0f0] 2xl:rounded-[10px]   xl:rounded-[5px] lg:rounded-[5px]  md:rounded-[5px] rounded-[5px]">
                            <div className="peopleCardParent">
                                <div>
                                    <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px] md:text-[30px] text-[30px] text-[#E12026]"></ImQuotesLeft>
                                </div>
                                <div>
                                    <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results.</p>
                                </div>
                                <div>
                                    <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px] md:space-x-[10px] space-x-[10px] ">
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

                        {/* -------------card Four here ---------------- */}
                        <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] 2xl:mt-[50px] xl:mt-[35px] lg:mt-[25px] rounded-[5px]">
                            <div className="peopleCardParent">
                                <div>
                                    <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px] text-[30px]  text-[#E12026]"></ImQuotesLeft>
                                </div>
                                <div>
                                    <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work.</p>
                                </div>
                                <div>
                                    <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px] md:space-x-[10px] space-x-[10px]">
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



                        <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] 2xl:mt-[50px] xl:mt-[35px] lg:mt-[25px] rounded-[5px]">
                            <div className="peopleCardParent">
                                <div>
                                    <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px] md:text-[30px] text-[30px]   text-[#E12026]"></ImQuotesLeft>
                                </div>
                                <div>
                                    <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients.</p>
                                </div>
                                <div>
                                    <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px] md:space-x-[10px] space-x-[10px]">
                                        <div className="peopleProfileImg">
                                            <img className="h-full w-full object-cover rounded-full" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715073991/whiteLebel/profile_w40jzj.png" alt="profile Img" />
                                        </div>
                                        <div>
                                            <h4 className="peopleProfileHead">Nazmul </h4>
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


                        {/* -------------card Three here ---------------- */}
                        <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px]  ">
                            <div className="peopleCardParent">
                                <div>
                                    <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px] md:text-[30px] text-[30px]  text-[#E12026]"></ImQuotesLeft>
                                </div>
                                <div>
                                    <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions.</p>
                                </div>
                                <div>
                                    <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px] md:space-x-[10px] space-x-[10px]">
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

                        {/* -------------card six here ---------------- */}
                        <div className="bg-[#F1f0f0] 2xl:rounded-[10px]     xl:rounded-[5px] 2xl:mt-[50px] xl:mt-[35px] lg:mt-[25px] rounded-[5px]">
                            <div className="peopleCardParent">
                                <div>
                                    <ImQuotesLeft className="2xl:text-[50px] xl:text-[40px] lg:text-[40px] md:text-[30px] text-[30px]  text-[#E12026]"></ImQuotesLeft>
                                </div>
                                <div>
                                    <p className="PeoplePara">Our white-label services allow you to expand your offerings to clients with top-notch web development solutions. Our expert team of developers, designers, and project managers work behind the scenes to deliver exceptional results. managers work behind the scenes to deliver exceptional results.</p>
                                </div>
                                <div>
                                    <div className="flex items-center 2xl:space-x-[15px] xl:space-x-[10px] lg:space-x-[10px] md:space-x-[10px] space-x-[10px]">
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
                    </Slider>

                </div>
            </div>
        </div>
    );
};

const CustomPrevArrowSmallDevices = (props) => (


    <button {...props} className="CustomPreArrowSmallDevices" aria-label="Previous" type="button">
        <MdKeyboardArrowRight className=" bg-red-500 rounded-full"></MdKeyboardArrowRight>
    </button>
);

const CustomNextArrowSmallDevices = (props) => (
    <button {...props} className="CustomNextArrowSmallDevices2" aria-label="Next" type="button">
        <MdOutlineKeyboardArrowLeft className=" bg-red-500  rounded-full"></MdOutlineKeyboardArrowLeft>
    </button>
);

export default PeopleTalkingSection;