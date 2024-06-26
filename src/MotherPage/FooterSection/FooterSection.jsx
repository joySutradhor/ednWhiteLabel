import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";




const FooterSection = () => {
    return (
        <>
            <div className="sectionGap">
                <div>
                    <div className="flex justify-center items-center">
                        <div className=" footerLogo ">
                            <img className="h-full w-full object-cover" src="/logo.png" alt="footer Logo" />
                        </div>
                    </div>
                    <div className="grid  justify-between lg:space-x-[30px] md:grid-cols-3 lg:grid-cols-4  space-y-[15px] md:space-y-0 ">
                        <div>
                            <h3 className="footerHeadingText">Get in Touch</h3>
                            <p className="footerPara">Book a Call</p>
                            <p className="footerPara">Submit an Inquiry</p>
                            <p className="footerPara">Start a Conversation</p>
                            <p className="footerPara 2xl:pt-[10px] xl:pt-[0px]">Phone: +1 844 224 1228</p>
                            <p className="footerPara">Email: info@whiteLabelagency.com</p>
                        </div>
                        <div>
                            <h3 className="footerHeadingText">Quick Links</h3>
                            <p className="footerPara">Home</p>
                            <p className="footerPara">About Us</p>
                            <p className="footerPara">Service</p>
                            <p className="footerPara">Our Work</p>
                            <p className="footerPara">For Agencies</p>
                        </div>
                        <div >
                            <h3 className="footerHeadingText">Our Services</h3>
                            <p className="footerPara">Branding</p>
                            <p className="footerPara">Ux/Ui Design</p>
                            <p className="footerPara">Web Development</p>
                            <p className="footerPara">Mobile Apps Development</p>
                            <p className="footerPara">Social Media Marketing</p>
                        </div>
                        <div  className="md:my-[20px] lg:my-0">
                            <h3 className="footerHeadingText">Our Family</h3>
                            <p className="footerPara">White Label is a service Some of our other related products and services</p>
                            <p className="copyrightPara">© Copyright 2024 whiteLabelagency.com</p>
                        </div>
                    </div>
                    {/* ----------- socail icons ------------- */}
                    <div className="flex items-center 2xl:pt-[20px] 2xl:pb-[50px] xl:pt-[20px] xl:pb-[30px] lg:pt-[20px] lg: pb-[20px] lg:text-[20px] pt-[10px]  lg:space-x-3 md:space-x-3 space-x-3 cursor-pointer">
                        <FaFacebookF className="2xl:text-[40px] 2xl:pr-[17px] xl:text-[30px] xl:pr-[15px] lg:text-[20px] md:text-[20px] text-[20px]"></FaFacebookF>
                        <BsTwitterX className="2xl:text-[50px] 2xl:pr-[17px] xl:text-[40px] xl:pr-[15px] lg:text-[20px] md:text-[20px] text-[20px]" ></BsTwitterX>
                        <BsYoutube className="2xl:text-[60px] 2xl:pr-[17px] xl:text-[50px] xl:pr-[15px] lg:text-[20px] md:text-[20px] text-[20px]"></BsYoutube>
                        <FaLinkedinIn className="2xl:text-[50px] 2xl:pr-[17px] xl:text-[40px] xl:pr-[15px] lg:text-[20px] md:text-[20px] text-[20px] "></FaLinkedinIn>
                    </div>
                </div>
            </div>
            <div className="footerDummyBg">
                {/* -- balck bg---- */}
            </div>
        </>
    );
};

export default FooterSection;