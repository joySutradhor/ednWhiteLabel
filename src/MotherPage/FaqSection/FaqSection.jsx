/* eslint-disable react/no-unescaped-entities */
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useState } from 'react';

const FaqSection = () => {

    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (accordionNumber) => {
        setOpenAccordion(accordionNumber === openAccordion ? 0 : accordionNumber);
    };



    return (
        <div className="sectionGap">
            <div>
                <h2 className="titleHeading text-center">FAQ</h2>
                <p className="commonPara 2xl:px-[20%] xl:px-[15%] lg:px-[15%] md:px-[5%] px-[3%] text-center">Have some questions about our white-label development services and how we collaborate with other agencies? Here's a comprehensive list of questions we get asked often.</p>
            </div>
            {/* ----------------- accordian section ---------------- */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(1)}
                >
                    <h6 className="accordianHeadText relative z-20 " ><span className="z-20">How long have you been providing white-label services?</span> <span className="faqOneLine"></span></h6>
                    <span className={`transform ${openAccordion === 1 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 1 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}

            </div>

            {/* ----------- items two ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(2)}
                >
                    <h6 className="accordianHeadText relative z-20 " ><span className="z-20">How does pricing work for your white-label services?</span> <span className="faqTwoLine"></span></h6>

                    <span className={`transform ${openAccordion === 2 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 2 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px]`}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}

            </div>


            {/* ----------- items three ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(3)}
                >
                    <h6 className="accordianHeadText relative z-20" >How does the white-label process work? <span className="faqThreeLine"></span></h6>

            
                    
                    <span className={`transform ${openAccordion === 3 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 3 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px]`}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items four ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(4)}
                >
                    <h6 className="accordianHeadText relative z-20" >How big is your team?  <span className="faqFourLine"></span></h6>
                    <span className={`transform ${openAccordion === 4 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 4 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px]`}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items five ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(5)}
                >
                    <h6 className="accordianHeadText relative z-20" >How will communication and project management work? <span className="faqFiveLine"></span></h6>
                    <span className={`transform ${openAccordion === 5 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 5 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>


            {/* ----------- items six ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(6)}
                >
                    <h6 className="accordianHeadText relative z-20" >What are your working hours?<span className="faqSixLine"></span></h6>
                    <span className={`transform ${openAccordion === 6 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 6 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items seven ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(7)}
                >
                    <h6 className="accordianHeadText relative z-20" >Do you sign NDAs? <span className="faqSevenLine"></span></h6>
                    <span className={`transform ${openAccordion === 7 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 7 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items eight ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(8)}
                >
                    <h6 className="accordianHeadText relative z-20" >Who will I communicate with? <span className="faqEightLine"></span></h6>
                    <span className={`transform ${openAccordion === 8 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 8 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items nine ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(9)}
                >
                    <h6 className="accordianHeadText relative z-20" >How do we get started? <span className="faqNineLine"></span></h6>
                    <span className={`transform ${openAccordion === 9 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 9 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items ten ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(10)}
                >
                    <h6 className="accordianHeadText relative z-20" >Are you guys flexible to work on partial website projects? <span className="faqTenLine"></span></h6>
                    <span className={`transform ${openAccordion === 10 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 10 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items Eleven ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(11)}
                >
                    <h6 className="accordianHeadText relative z-20" >What is the typical turnaround time for a project?<span className="faqElevenLine"></span></h6>
                    <span className={`transform ${openAccordion === 11 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 11 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items twelve ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(12)}
                >
                    <h6 className="accordianHeadText relative z-20" >Do you need a staging server to build sites?<span className="faqTwelveLine"></span></h6>
                    <span className={`transform ${openAccordion === 12 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 12 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items thirteen ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(13)}
                >
                    <h6 className="accordianHeadText relative z-20" >Do you provide support for bug fixes on the websites developed by someone else? <span className="faqThirtenLine"></span></h6>
                    <span className={`transform ${openAccordion === 13 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 13 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

            {/* ----------- items fourteen ------------ */}
            <div className="accordianMainParent">
                <div
                    className="accordianSingleParent"
                    onClick={() => toggleAccordion(14)}
                >
                    <h6 className="accordianHeadText relative z-20" >Can I speak to any references before we start our association? <span className="faqFourteenLine"></span></h6>
                    <span className={`transform ${openAccordion === 14 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        <div className=''>
                            <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                        </div>
                    </span>
                </div>
                {openAccordion === 14 && (
                    <div className={`bg-[#F1F0F0] 2xl:px-[50px] 2xl:rounded-[10px] xl:px-[30px] xl:rounded-[5px] lg:px-[15px] md:px-[15px] md:rounded-[5px] px-[10px] rounded-[5px] `}>


                        <p className='commonPara' >We have been in this industry since 2005 and providing white-label services since 2007 when we founded htmlBurger. To this day, our primary focus has been on delivering web development solutions to agencies. We have completed thousands of projects successfully and currently partner with more than 1000+ agencies worldwide.</p>

                    </div>
                )}
            </div>

        </div>
    );
};

export default FaqSection;