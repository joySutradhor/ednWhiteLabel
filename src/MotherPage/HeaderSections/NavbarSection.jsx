import { useState } from "react";
import HeroContentSection from "./HeroContentSection";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";


const NavbarSection = () => {
    const [open, setOpen] = useState(false);
    const handleMenu = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <nav className="navbarLeftRightSpace hidden lg:block">
                <div className="navbarParent   ">
                    <div className="headerLogo">
                        <img className="h-full w-full object-cover" src="/logo.png" alt="brand logo" />
                    </div>
                    <div>
                        <ul className="listParent cursor-pointer">
                            <li>Home</li>
                            <Link to="aboutusSection"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            ><li >About Us</li></Link>

                            <Link
                                to="serviceSection"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            ><li>Service</li></Link>

                            <Link
                                to="ourWorkSection"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}

                            ><li >Our Work</li></Link>
                            <Link
                                to="agencySection"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            ><li>For Agencies</li></Link>

                        </ul>
                    </div>
                    <div>
                        <div className="herobtnParent">
                            <button className="headerBtnTextWhite ">Start A Conversation</button>
                            <button className="headerBtnText bg-[#E12026] text-white">Get a Quote</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ============ mobile nav bar ============= */}
            <nav className="lg:hidden ">
                <div className="navbarLeftRightSpace flex justify-between items-center">
                    <div className="headerLogo">
                        <img className="h-full w-full object-cover" src="/logo.png" alt="brand logo" />
                    </div>
                    <div>
                        <IoMenu className="md:text-[40px]  text-[35px]" onClick={handleMenu}></IoMenu>
                    </div>
                    {
                        open && <ul className="absolute top-0 right-0 md:top-0 md:right-0 bg-slate-100 w-[100%] z-50 md:w-[55%] md:h-[50dvh] transition-transform duration-500 ease-in-out">
                            <div className="flex justify-between items-center border-b-2 border-gray-200 ">

                                <div className="headerLogotop md:hidden">
                                    <img className="h-full w-full object-cover" src="/logo.png" alt="brand logo" />
                                </div>

                                <div className="md:text-[30px] text-[35px] p-[20px] pb-[20px] font-title md:p-[20px] md:pb-[20px]" onClick={handleClose}>
                                    <MdClose ></MdClose >
                                </div>




                            </div>
                            <div className="text-[20px] p-[20px] pb-[20px] font-title md:p-[20px] md:pb-[20px]">
                            <li>Home</li>
                            <Link to="aboutusSection"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            ><li >About Us</li></Link>

                            <Link
                                to="serviceSection"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            ><li>Service</li></Link>

                            <Link
                                to="ourWorkSection"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}

                            ><li >Our Work</li></Link>
                            <Link
                                to="agencySection"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            ><li>For Agencies</li></Link>
                            </div>
                            <div className="herobtnParent">
                                <button className="headerBtnTextWhite ">Start A Conversation</button>
                                <button className="headerBtnText bg-[#E12026] text-white">Get a Quote</button>
                            </div>
                        </ul>
                    }
                </div>
            </nav>

            {/* ========== Hero Content Here ========== */}
            <HeroContentSection></HeroContentSection>
        </div>
    );
};

export default NavbarSection;