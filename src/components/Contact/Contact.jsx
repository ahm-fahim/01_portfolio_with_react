import React, { useRef, useState } from "react";
import "./Contact.css";
import Love from "../../img/heartemoji.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8g4mpld",
                "template_yl77a7e",
                form.current,
                "xN_HXD3mbSa1axMYk"
            )
            .then(
                (result) => {
                    setDone(true);
                },
                (error) => {}
            );
    };
    return (
        <div className="contact-wrapper" id="Contact">
            <div className="c-left">
                <img src={Love} alt="" />
                <span>Get in Touch</span>
                <span>Contact me</span>
                <div className="blur1 c-blur"></div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" name="user_name" placeholder="Name" />
                    <input type="email" name="user_email" placeholder="Email" />
                    <textarea name="message" placeholder="Message" />
                    <span className="success-message">
                        {done &&
                            "Thanks for your message! I will connect you soon!"}
                    </span>
                    <input
                        type="submit"
                        value="Send"
                        className="button c-btn"
                    />
                </form>
                <div className="blur2 c-blur"></div>
            </div>
        </div>
    );
};

export default Contact;
