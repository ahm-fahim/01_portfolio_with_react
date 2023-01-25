import React, { useRef } from "react";
import "./Contact.css";
import Love from "../../img/heartemoji.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_x17i7u9",
                "template_ue67xci",
                form.current,
                "xN_HXD3mbSa1axMYk"
            )
            .then(
                (result) => {
                    alert(result.text);
                },
                (error) => {
                    alert(error.text);
                }
            );
    };
    return (
        <div className="contact-wrapper">
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
