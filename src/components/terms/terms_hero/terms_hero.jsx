import { useTranslation } from "react-i18next";
import Down_butt from "../../general/down_butt/down_butt";
import "../../locations/locations_hero/repetitive_hero.css";

export default function Terms_hero() {
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid repetitive_hero">
                <div className="row">
                    <div className="col-lg-6 col-md-12 rh_left">
                        <div className="taxi_hero_h1">
                            <h1>{t("Terms of Service")} </h1>
                            <div>
                                <Down_butt />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 rh_right">
                        <div>
                            <img src="/slider/slider2.jpg" alt="ss" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}