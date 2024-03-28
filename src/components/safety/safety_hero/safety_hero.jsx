import { useTranslation } from "react-i18next";
import Down_butt from "../../general/down_butt/down_butt";
import "../../locations/locations_hero/repetitive_hero.css";

export default function Safety_hero() {
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid repetitive_hero">
                <div className="row">
                    <div className="col-lg-6 col-md-12 rh_left">
                        <div className="taxi_hero_h1">
                            <h1>{t("Staying safe")} </h1>
                            <h6>{t("It's important to know how to Charge safely. Please familiarize yourself with these simple rules before using our services. Download the app to see the local safety rules.")} </h6>
                            <div>
                                <Down_butt />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 rh_right">
                        <div>
                            <img src="/slider/slider1.jpg" alt="ss" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}