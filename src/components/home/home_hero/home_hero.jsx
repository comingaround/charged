import { useTranslation } from "react-i18next";
import Down_butt from "../../general/down_butt/down_butt";
import Infinite_text from "../../general/infinite_text/infinite_text";
import React, { useState, useEffect, useRef } from 'react';
import "./home_hero.css";
import "./hh_p2.css"

function Home_hero() {
    const { t } = useTranslation();
    const [topPosition, setTopPosition] = useState(0);
    const hhP2Ref = useRef(null);
    const [hoveredImage, setHoveredImage] = useState(null);
    const [lastHoveredDiv, setLastHoveredDiv] = useState(null);

    const onHoverImage = (imageName) => {
        setHoveredImage(imageName);
        setLastHoveredDiv(imageName);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 1024) {
                return;
            }
            if (!hhP2Ref.current) return;
            const rect = hhP2Ref.current.getBoundingClientRect();
            const hhP2Bottom = rect.bottom + window.pageYOffset;
            const maxScroll = hhP2Bottom - window.innerHeight;
            const scrollPosition = window.scrollY;
            const scrollSpeedFactor = 2.5;
            const endPosition = document.body.offsetHeight - window.innerHeight;
            let calculatedTop = (maxScroll * (scrollPosition * scrollSpeedFactor)) / endPosition;
            calculatedTop = Math.min(maxScroll, Math.max(0, calculatedTop));
            setTopPosition(calculatedTop);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="home_hero_main">
            <div className="moving_text_cont">
                <Infinite_text />
            </div>
            <div className="home_hero">
                <div className="hh_1">
                    <div className="hh1_images">
                        <div className="image_array" style={{ top: `${topPosition}px`}}>
                            <img style={{zIndex: "10"}} className="phone_frame" src="/phone/working_frame.png" alt="ss" />
                            <img style={{ zIndex: hoveredImage === 'phone_image1' ? 4 : 3 }} className="phone_image1" src="/phone/phone_image1.jpg" alt="" />
                            <img style={{ zIndex: hoveredImage === 'phone_image2' ? 4 : 1 }} className="phone_image2" src="/phone/phone_image2.jpg" alt="" />
                            <img style={{ zIndex: hoveredImage === 'phone_image3' ? 4 : 1 }} className="phone_image3" src="/phone/phone_image3.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="hh_2">
                        <h1>{t("Experience the City Like Never Before with CHARGE")}</h1>
                        <h3>
                            {t("Unlock freedom and flexibility on every trip. ")} 
                            {t("CHARGE offers eco-friendly, efficient, and exhilarating e-scooter rides that transform the way you explore your urban landscape. ")}
                            {t("Get started with CHARGE today and feel the difference in every ride. ")}
                        </h3>
                    <div className="hh2_down">
                        <Down_butt />
                    </div>
                </div>
            </div>
            <div className="hh_p2" ref={hhP2Ref}>
                <div className="hh_p2_1">

                </div>
                <div className="hh_p2_2">
                    <h1>{t("3 Easy Steps to Start Riding with CHARGE")}</h1>
                    <div className={`hh_p2_2_one ${lastHoveredDiv === 'phone_image1' ? 'hovered' : ''}`}
                        onMouseEnter={() => onHoverImage('phone_image1')}>
                        <h1>01.</h1>
                        <section>
                            <h1>{t("Download the App:")}</h1>
                            <h3>{t("Get the CHARGE app from your favorite app store. Sign up to access our wide network of e-scooters across the city.")}</h3>
                        </section>
                    </div>
                    <div className={`hh_p2_2_two ${lastHoveredDiv === 'phone_image2' ? 'hovered' : ''}`}
                        onMouseEnter={() => onHoverImage('phone_image2')}>
                        <h1>02.</h1>
                        <section>
                            <h1>{t("Find & Unlock:")}</h1>
                            <h3>{t("Use the app to find a nearby scooter. Scan the QR code to unlock it and start your ride.")}</h3>
                        </section>
                    </div>
                    <div className={`hh_p2_2_three ${lastHoveredDiv === 'phone_image3' ? 'hovered' : ''}`}
                        onMouseEnter={() => onHoverImage('phone_image3')}>
                        <h1>03.</h1>
                        <section>
                            <h1>{t("Enjoy Your Ride:")}</h1>
                            <h3>{t("Explore the city on your terms. When you're done, park responsibly and end your ride with a tap on the app.")}</h3>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_hero;
