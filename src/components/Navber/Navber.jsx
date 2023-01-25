import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navber.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";

const Navber = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <div
                className="nav-wrapper"
                style={{
                    background: darkMode ? "black" : "",
                    color: darkMode ? "white" : "",
                }}
            >
                <div className="nav-left">
                    <div className="nav-name">Fahim</div>
                    <Toggle />
                </div>
                <div className="nav-right">
                    <div className="nav-list">
                        <ul>
                            <Link
                                spy={true}
                                to="Intro"
                                smooth={true}
                                activeClass="activeClass"
                            >
                                <li className="navLink">Home</li>
                            </Link>
                            <Link spy={true} to="Services" smooth={true}>
                                <li className="navLink">Services</li>
                            </Link>
                            <Link spy={true} to="Experience" smooth={true}>
                                <li className="navLink">Experience</li>
                            </Link>
                            <Link spy={true} to="Portfolio" smooth={true}>
                                <li className="navLink">Portfolio</li>
                            </Link>
                            <Link spy={true} to="Testimonials" smooth={true}>
                                <li className="navLink">Testimonials</li>
                            </Link>
                        </ul>
                    </div>
                    <Link spy={true} to="Contact" smooth={true}>
                        <button className="button nav-button">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;
