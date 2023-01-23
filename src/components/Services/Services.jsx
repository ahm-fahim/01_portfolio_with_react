import React from "react";
import "./Services.css";
import heart from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import resume from "./resume.pdf";

const Services = () => {
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
                <div>
                    <ServiceCard
                        emoji={heart}
                        heading="Design"
                        details={"Figma, Canva, Photoshop, Illustrator"}
                    />
                </div>
                <div>
                    <ServiceCard
                        emoji={glasses}
                        heading="Development"
                        details={
                            "HTML, CSS, Tailwind, Bootstrap, Javascript, React"
                        }
                    />
                </div>
                <div>
                    <ServiceCard
                        emoji={humble}
                        heading="Design"
                        details={"Figma, Canva, Photoshop, Illustrator"}
                    />
                </div>
                <div className="blur2 service-blur2"></div>
            </div>
        </div>
    );
};

export default Services;
