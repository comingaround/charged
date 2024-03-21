import { useTranslation } from "react-i18next";
import Down_butt from "../../general/down_butt/down_butt";
import Infinite_text from "../../general/infinite_text/infinite_text";
import "./home_hero.css";

function Home_hero() {
    const { t } = useTranslation();

    return (
        <div className="home_hero_main">
            <div className="moving_text_cont">
                <Infinite_text />
            </div>
            <div className="home_hero">
                <div className="hh_1">
                    <div className="hh1_images">
                        <div className="image_array">
                            <img style={{zIndex: "10"}} className="phone_frame" src="/phone/phone_frame_test.jpg" alt="" />
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
        </div>
    );
}

export default Home_hero;
