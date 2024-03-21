import { useTranslation } from "react-i18next";
import Down_butt from "../../general/down_butt/down_butt";
import Infinite_text from "../../general/infinite_text/infinite_text";
import React, { useState, useEffect } from 'react';
import "./home_hero.css";
import "./hh_p2.css"

function Home_hero() {
    const { t } = useTranslation();
    const [topPosition, setTopPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = 1350;    
            // Increase this factor to make the scrolling effect faster
            const scrollSpeedFactor = 1.5; // Adjust this factor to control the speed   
            // Adjusted startPosition and endPosition to control the start and end of the scrolling effect more precisely
            const startPosition = 0; // Start moving immediately on scroll
            const endPosition = document.body.offsetHeight - window.innerHeight; // Stop moving at the bottom of the page   
            // Apply the scrollSpeedFactor to increase the speed of the effect
            let calculatedTop = (maxScroll * (scrollPosition - startPosition) * scrollSpeedFactor) / (endPosition - startPosition);   
            // Constrain the top position to the maxScroll value
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
                        <div className="image_array" style={{ top: `${topPosition}px`, position: 'absolute' }}>
                            <img style={{zIndex: "10"}} className="phone_frame" src="/phone/phone_frame_test.jpg" alt="ss" />
                            <img className="phone_image1" src="/phone/phone_image1.jpg" alt="" />
                            <img className="phone_image2" src="/phone/phone_image2.jpg" alt="" />
                            <img className="phone_image3" src="/phone/phone_image3.jpg" alt="" />
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
            <div className="hh_p2">
                <div className="hh_p2_1">

                </div>
                <div className="hh_p2_2">
                    <h1>{t("3 Easy Steps to Start Riding with CHARGE")}</h1>
                    <div>
                        <h1>01. &nbsp;</h1>
                        <section>
                            <h1>{t("Download the App:")}</h1>
                            <h3>{t("Get the CHARGE app from your favorite app store. Sign up to access our wide network of e-scooters across the city.")}</h3>
                        </section>
                    </div>
                    <div>
                        <h1>02. &nbsp;</h1>
                        <section>
                            <h1>{t("Find & Unlock:")}</h1>
                            <h3>{t("Use the app to find a nearby scooter. Scan the QR code to unlock it and start your ride.")}</h3>
                        </section>
                    </div>
                    <div>
                        <h1>03. &nbsp;</h1>
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
