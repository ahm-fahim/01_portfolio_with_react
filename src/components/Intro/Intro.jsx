import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkdin from "../../img/linkdin.png";
import vertor4 from "../../img/vector4.png";
import me from "../../img/me.png";
import thumb from "../../img/thumbup.png";
import glassesEmoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";

const Intro = () => {
      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
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
                <button className="intro-button button">Hire Me</button>
                <div className="intro-icons">
                    <img src={Github} alt="" />
                    <img src={Linkdin} alt="" />
                </div>
            </div>
            <div className="intro-right">
                <img src={vertor4} alt="" />
                <img src={me} alt="" />
                <img src={glassesEmoji} alt="" />
                <div>
                    <FloatingDiv image={crown} text1="Web" text2="Developer" />
                </div>
                <div>
                    <FloatingDiv
                        image={thumb}
                        text1="Best Desing"
                        text2="Award"
                    />
                </div>
                {/* blur div  */}
                <div className="blur1"></div>
                <div className="blur2"></div>
            </div>
        </div>
    );
};

export default Intro;
