import { useTranslation } from "react-i18next";
import "./about_hero.css";


export default function About_hero() {
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid about_hero">
                <div className="row">
                    <div className="col-lg-6 col-md-12 ah_left">
                        <div>
                            <h1>{t("We're just getting started")} </h1>
                            <h6>{t("Charge is leading the way in sustainable transport all around the world by making urban travel more green and convenient.")} </h6>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 ah_right">
                        <div>
                            <img src="/slider/slider4.jpg" alt="ss" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

