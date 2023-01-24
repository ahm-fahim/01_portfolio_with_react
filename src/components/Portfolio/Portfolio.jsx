import React from 'react';
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import p1 from "../../img/p3.png";
import p2 from "../../img/p5.png";
import p3 from "../../img/p2.png";
import p4 from "../../img/p4.png";
import p5 from "../../img/p1.png";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <span>Recent Projects</span>
            <span>Portfolio</span>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={p1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p5} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;