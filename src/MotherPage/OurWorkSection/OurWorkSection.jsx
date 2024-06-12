/* eslint-disable no-dupe-keys */


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurWorkSectionStyle.css"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgArrowLongRight } from "react-icons/cg";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";

function OurWorkSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        speed: 1000,
        cssEase: "linear",
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,

    };

    const settingsSmall = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        speed: 500,
        cssEase: "linear",
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,

    };
    return (
        <Element name="ourWorkSection">
            <div className="sectionGap">
                <h2 className="titleHeading text-center"><span> <Fade cascade duration={300}>Our Work</Fade> </span></h2>
                <div className="slider-container md:block hidden ">
                    <Slider {...settings}>

                        <div className="ourWorkImgOne 2xl:px-[21px] xl:px-[11px] lg:px-[8px] md:px-[5px] relative group">
                            <img className="h-full w-full object-cover 2xl:rounded-[10px]  xl:rounded-[5px] lg:rounded-[5px] md:rounded-[5px] " src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />

                            <div className="hoverParent">
                                <button className="text-white  hoverText">Website</button>
                                <div>
                                    <CgArrowLongRight className="text-white 2xl:text-[60px] xl:text-[30px] " />
                                </div>
                            </div>
                        </div>

                        <div className="ourWorkImgOne 2xl:px-[21px]  xl:px-[11px] lg:px-[8px] md:px-[5px] relative group">
                            <img className="h-full w-full object-cover 2xl:rounded-[10px] xl:rounded-[5px] md:rounded-[5px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />

                            <div className="hoverParent">
                                <button className="text-white  hoverText">Website</button>
                                <div>
                                    <CgArrowLongRight className="text-white 2xl:text-[60px] xl:text-[30px]" />
                                </div>
                            </div>
                        </div>

                        <div className="ourWorkImgOne 2xl:px-[21px]  xl:px-[11px] lg:px-[8px] md:px-[5px] md:rounded-[5px] relative group">
                            <img className="h-full w-full object-cover 2xl:rounded-[10px] xl:rounded-[5px] md:rounded-[5px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />

                            <div className="hoverParent">
                                <button className="text-white  hoverText">Website</button>
                                <div>
                                    <CgArrowLongRight className="text-white 2xl:text-[60px] xl:text-[30px]" />
                                </div>
                            </div>

                        </div>

                    </Slider>

                </div>

                {/*================== mobile slider============== */}
                <div className="slider-container md:hidden block ">
                    <Slider {...settingsSmall}>

                        <div className="ourWorkImgOne 2xl:px-[21px] xl:px-[11px] lg:px-[8px] md:px-[5px] px-[1px] relative group">
                            <img className="h-full w-full object-cover 2xl:rounded-[10px]  xl:rounded-[5px] lg:rounded-[5px] md:rounded-[5px] " src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />

                            <div className="hoverParent">
                                <button className="text-white  hoverText">Website</button>
                                <div>
                                    <CgArrowLongRight className="text-white 2xl:text-[60px] xl:text-[30px] " />
                                </div>
                            </div>
                        </div>

                        <div className="ourWorkImgOne 2xl:px-[21px]  xl:px-[11px] lg:px-[8px] md:px-[5px]   px-[1px]relative group">
                            <img className="h-full w-full object-cover 2xl:rounded-[10px] xl:rounded-[5px] md:rounded-[5px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />

                            <div className="hoverParent">
                                <button className="text-white  hoverText">Website</button>
                                <div>
                                    <CgArrowLongRight className="text-white 2xl:text-[60px] xl:text-[30px]" />
                                </div>
                            </div>
                        </div>

                        <div className="ourWorkImgOne 2xl:px-[21px]  xl:px-[11px] lg:px-[8px] md:px-[5px]  px-[1px] md:rounded-[5px] relative group">
                            <img className="h-full w-full object-cover 2xl:rounded-[10px] xl:rounded-[5px] md:rounded-[5px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />

                            <div className="hoverParent">
                                <button className="text-white  hoverText">Website</button>
                                <div>
                                    <CgArrowLongRight className="text-white 2xl:text-[60px] xl:text-[30px]" />
                                </div>
                            </div>

                        </div>

                    </Slider>

                </div>
            </div>
        </Element>
    );
}

const CustomPrevArrow = (props) => (


    <button {...props} className="arrow-button" aria-label="Previous" type="button">
        <MdOutlineKeyboardArrowLeft className=" bg-red-500 border-[10px] border-white rounded-full"></MdOutlineKeyboardArrowLeft>
    </button>
);

const CustomNextArrow = (props) => (
    <button {...props} className="arrow-button2" aria-label="Next" type="button">
        <MdKeyboardArrowRight className=" bg-red-500 border-[10px] border-white rounded-full"></MdKeyboardArrowRight>
    </button>
);


export default OurWorkSection;
