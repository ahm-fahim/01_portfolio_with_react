import React from "react";
import "./Services.css";
import heart from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import resume from "./resume.pdf";
import { motion } from "framer-motion";


const Services = () => {
    const transition = { duration: 2, type: "spring" };
    return (
        <div className="services">
            <div className="left-section">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Here's the details of my services <br /> that I provide.
                </span>
                <a href={resume} download>
                    <button className="button service-btn">Download CV</button>
                </a>
                <div className="blur1 service-blur1"></div>
            </div>
            <div className="right-section">
                <motion.div
                    initial={{ left: "20rem" }}
                    whileInView={{ left: "15rem" }}
                    transition={transition}
                >
                    <ServiceCard
                        emoji={heart}
                        heading="Design"
                        details={"Figma, Canva, Photoshop, Illustrator"}
                    />
                </motion.div>
                <motion.div
                    initial={{ left: "-12rem" }}
                    whileInView={{ left: "-2rem" }}
                    transition={transition}
                >
                    <ServiceCard
                        emoji={glasses}
                        heading="Development"
                        details={
                            "HTML, CSS, Tailwind, Bootstrap, Javascript, React"
                        }
                    />
                </motion.div>
                <motion.div
                    initial={{ left: "20rem" }}
                    whileInView={{ left: "13rem" }}
                    transition={transition}
                >
                    <ServiceCard
                        emoji={humble}
                        heading="Design"
                        details={"Figma, Canva, Photoshop, Illustrator"}
                    />
                </motion.div>
                <div className="blur2 service-blur2"></div>
            </div>
        </div>
    );
};

export default Services;
