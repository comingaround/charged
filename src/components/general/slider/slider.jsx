import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function MySlider() {
    const { t } = useTranslation();
    const [centerPadding, setCenterPadding] = useState('30%');

    useEffect(() => {
        const updatePadding = () => {
            const screenWidth = window.innerWidth;
            setCenterPadding(screenWidth < 769 ? '15%' : '30%');
        };
        updatePadding();
        window.addEventListener('resize', updatePadding);
        return () => window.removeEventListener('resize', updatePadding);
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: centerPadding,
    };

    return (
        <div className="slider_main">
            <h1>{t("Chargers in the wild")}</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="/slider/slider1.jpg" alt="1" />
                    </div>
                    <div>
                        <img src="/slider/slider2.jpg" alt="2" />
                    </div>
                    <div>
                        <img src="/slider/slider3.jpg" alt="3" />
                    </div>
                    <div>
                        <img src="/slider/slider4.jpg" alt="4" />
                    </div>
                    <div>
                        <img src="/slider/slider5.jpg" alt="5" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default MySlider;
