import React, { useContext } from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pro1 from "../../img/profile1.jpg";
import pro2 from "../../img/profile2.jpg";
import pro3 from "../../img/profile3.jpg";
import pro4 from "../../img/profile4.jpg";
import { themeContext } from "../../Context";

const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img: pro1,
            review: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, commodi! ",
        },
        {
            img: pro2,
            review: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, commodi! ",
        },
        {
            img: pro3,
            review: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, commodi! ",
        },
        {
            img: pro4,
            review: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, commodi! ",
        },
    ];
    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span
                    style={{
                        color: darkMode ? "white" : "",
                    }}
                >
                    from me
                </span>
            </div>
            {/* slider  */}
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                grabCursor={true}
                className="portfolio-slider"
            >
                {clients.map((client, id) => (
                    <SwiperSlide key={id}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="blur1 t-blur1"></div>
            <div className="blur2 t-blur2"></div>
        </div>
    );
};

export default Testimonials;
