import React from "react";
import "./ServiceCard.css";
const ServiceCard = ({emoji, heading, details}) => {
    return <div className="service-card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <button>LEARN MORE</button>
    </div>;
};

export default ServiceCard;
