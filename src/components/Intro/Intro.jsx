import React, { useContext } from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import vertor4 from "../../img/vector4.png";
import me from "../../img/me.png";
import thumb from "../../img/thumbup.png";
import glassesEmoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Git from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Intro = () => {
    const transition = { duration: 2, type: "spring" };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro" id="Intro">
            <div className="intro-left">
                <div className="intro-name">
                    <span
                        style={{
                            color: darkMode ? "white" : "",
                        }}
                    >
                        Look At Me! I'm
                    </span>
                    <span>A.H.M. Fahim Morshed</span>
                    <span>
                        a good Learner, Devloper & Gardenner! Fun fact of my
                        life is "why I choose my career in CSE!"{" "}
                    </span>
                </div>
                <Link spy={true} to="Contact" smooth={true}>
                    <button className="intro-button button">Hire Me</button>
                </Link>
                <div className="intro-icons">
                    <Git />
                    <Linkedin />
                </div>
            </div>
            <div className="intro-right">
                <img src={vertor4} alt="" />
                <img src={me} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesEmoji}
                    alt=""
                />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                >
                    <FloatingDiv image={crown} text1="Web" text2="Developer" />
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                >
                    <FloatingDiv
                        image={thumb}
                        text1="Best Desing"
                        text2="Award"
                    />
                </motion.div>
                {/* blur div  */}
                <div className="blur1"></div>
                <div className="blur2"></div>
            </div>
        </div>
    );
};

export default Intro;
