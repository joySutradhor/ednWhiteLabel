

const CollaborateSection = () => {
    return (
        <div className="2xl:pt-[200px] xl:pt-[100px]">
            <div>
                <div className="bg-black xl:px-[50px] xl:py-[40px] xl:rounded-[5px] 2xl:px-[100px] 2xl:py-[50px] 2xl:rounded-[10px] text-white">
                    <div className="flex justify-between items-center">
                        <div className="2xl:w-[60%] xl:w-[50%]  ">
                            <h2 className="titleHeading relative">
                                <span className="relative z-20">Work & Collaborate With</span>
                                <span className="absolute z-10 2xl:bottom-[149px] left-0 2xl:w-[920px] 2xl:h-[7px] bg-red-700"></span>
                                    The Tool Of Your Choice</h2>
                            <p className="commonPara">Now, you can take complete control over your projects with the flexibility to choose the tools and processes that best fit your agency. We value your time like our own. We will learn the tricks and build a working method shaped around you.</p>
                            <button className="collaborationBtn">See More</button>
                        </div>

                        {/* ---------- side cards here -------- */}
                        <div className="grid grid-cols-3 gap-[21.55px]">
                            <div className="collaborationSingleCardParent">
                                <div>
                                    <div className="collaborationImgLogoOne">
                                        <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715084046/whiteLebel/Group_tlhzvv.png" alt="angular icon" />
                                    </div>
                                </div>
                            </div>

                            {/* ----------- logo Card two --------- */}
                            <div className="collaborationSingleCardParent">
                                <div>
                                    <div className="collaborationImgLogoTwo">
                                        <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715084045/whiteLebel/Group_1_hvtcpd.png" alt="task icon" />
                                    </div>
                                </div>
                            </div>

                            {/* ----------- logo Card three --------- */}
                            <div className="collaborationSingleCardParent">
                                <div>
                                    <div className="collaborationImgLogoThree">
                                        <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715084045/whiteLebel/Group_2_pw3cbq.png" alt="figma icon" />
                                    </div>
                                </div>
                            </div>

                            {/* ----------- logo Card four --------- */}
                            <div className="collaborationSingleCardParent">
                                <div>
                                    <div className="collaborationImgLogoFour">
                                        <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715084043/whiteLebel/Group_3_qzgsre.png" alt="wordpress icon" />
                                    </div>
                                </div>
                            </div>

                            {/* ----------- logo Card five --------- */}
                            <div className="collaborationSingleCardParent">
                                <div>
                                    <div className="collaborationImgLogoFive">
                                        <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715084041/whiteLebel/Layer_2_qc8equ.png" alt="github icon" />
                                    </div>
                                </div>
                            </div>

                            {/* ----------- logo Card six --------- */}
                            <div className="collaborationSingleCardParent">
                                <div>
                                    <div className="collaborationImgLogoSix">
                                        <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715084041/whiteLebel/Group_4_nmrzze.png" alt="slack icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollaborateSection;