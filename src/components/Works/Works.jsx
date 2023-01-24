import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";



const Works = () => {
    return (
        <div className="works">
            <div className="w-left">
                <span>Works For All These</span>
                <span>Brands & Clients</span>
                <span>Here's some works thats I have done. </span>
                <button className="button w-btn">Hire Me</button>
                <div className="blur1 service-blur1"></div>
            </div>
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiver} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                {/* background circle  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle redCircle"></div>
            </div>
        </div>
    );
};

export default Works;
