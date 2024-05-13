import {  Zoom } from "react-awesome-reveal";


const RiskFreeCta = () => {
    return (
        <div className=" 2xl:pt-[200px] xl:pt-[100px]">
            <div className=" bg-[#E12026] 2xl:rounded-[10px] xl:rounded-[5px] ">
                <div className="flex items-center justify-between xl:py-[40px] xl:px-[12%] 2xl:px-[15%] 2xl:py-[50px]">
                    <div className=" w-[65%]">
                        <h2 className="riskFreeHeading">Risk-Free Pilot Run</h2>
                        <p className="riskFreePara">Our no-risk trial runs let agencies test our service before deciding if they’re 100% confident in partnering with us. Starting with your first project, we will discuss your needs, clear up the scope and requirements, and spend hours of actual coding. This way you will see actual proof if we meet your expectations.</p>
                        <button className="riskFreeBtn">Get a Quick Quote</button>
                    </div>
                    <Zoom >
                        <div className="riskFreeImgParent">
                            <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715080067/whiteLebel/Group_797_tfdszx.png" alt="Risk free icon" />
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default RiskFreeCta;