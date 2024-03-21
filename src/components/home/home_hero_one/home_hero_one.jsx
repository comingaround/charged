import { useTranslation } from "react-i18next";
import Down_butt from "../../general/down_butt/down_butt";
import "./home_hero_one.css";
import "./photo_frame.css";

function Home_hero_one() {
    const { t } = useTranslation();

    return (
        <div className="home_hero_one">
            <div className="moving_text_wrapper">
                <div className="moving_text">
                    <span>Green and convenient.</span>
                    <span>Green and convenient.</span>
                </div>
            </div>
            <div className="container-fluid hh0_one">
                <div className="row">
                    <div className="col-lg-6 hh0_item1">
                        <div className="phone_section">
                            <img src="/phone_frame.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 hh0_item2">
                        <section>
                            <h1>{t("Experience the City Like Never Before with CHARGE")}</h1>
                            <h3>
                                {t("Unlock freedom and flexibi	lity on every trip. ")} 
                                {t("CHARGE offers eco-friendly, efficient, and exhilarating e-scooter rides that transform the way you explore your urban landscape. ")}
                                {t("Get started with CHARGE today and feel the difference in every ride. ")}
                            </h3>
                        </section>
                        <div className="hh0_item2_down">
                            <Down_butt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_hero_one;
