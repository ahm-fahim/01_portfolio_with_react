import React from 'react';
import "./Navber.css"

const Navber = () => {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="nav-left">
                    <div className="nav-name">Fahim</div>
                    <span>toggle</span>
                </div>
                <div className="nav-right">
                    <div className="nav-list">
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Experience</li>
                            <li>Portfolio</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <button className="button nav-button">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;