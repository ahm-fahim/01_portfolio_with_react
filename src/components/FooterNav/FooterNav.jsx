import React, { useContext } from "react";
import "./FotterNav.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import Home from "@iconscout/react-unicons/icons/uil-home";
import Service from "@iconscout/react-unicons/icons/uil-servicemark";
import Skill from "@iconscout/react-unicons/icons/uil-setting";
import Work from "@iconscout/react-unicons/icons/uil-location-point";
import Contact from "@iconscout/react-unicons/icons/uil-voicemail";
import Testimonials from "@iconscout/react-unicons/icons/uil-paragraph";

const FooterNav = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            className="fnav-wrapper"
            style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
            }}
        >
            <div className="fnav">
                <div className="fnav-list">
                    <ul>
                        <Link
                            spy={true}
                            to="Intro"
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li className="fnavLink">
                                <Home />
                            </li>
                        </Link>
                        <Link spy={true} to="Services" smooth={true}>
                            <li className="fnavLink">
                                <Service />
                            </li>
                        </Link>
                        <Link spy={true} to="Experience" smooth={true}>
                            <li className="fnavLink">
                                <Skill />
                            </li>
                        </Link>
                        <Link spy={true} to="Portfolio" smooth={true}>
                            <li className="fnavLink">
                                <Work />
                            </li>
                        </Link>
                        <Link spy={true} to="Testimonials" smooth={true}>
                            <li className="fnavLink">
                                <Testimonials />
                            </li>
                        </Link>
                        <Link spy={true} to="Contact" smooth={true}>
                            <li className="fnavLink">
                                <Contact />
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;
