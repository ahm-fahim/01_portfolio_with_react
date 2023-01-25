import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";

const Works = () => {
    const transition = { duration: 3, type: "spring" };

    return (
        <div className="works">
            <div className="w-left">
                <span>Works For All These</span>
                <span>Brands & Clients</span>
                <span>
                    Here's the platform where I works approximately 2+ years.{" "}
                </span>
                <button className="button w-btn">Hire Me</button>
                <div className="blur1 service-blur1"></div>
            </div>
            <div className="w-right">
                <motion.div
                    className="w-mainCircle "
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    transition={transition}
                    viewport={{ margin: "-40px" }}
                >
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
                </motion.div>
                {/* background circle  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle redCircle"></div>
            </div>
        </div>
    );
};

export default Works;
