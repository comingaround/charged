import { useTranslation } from "react-i18next";
import Down_butt from "../../general/down_butt/down_butt";
import "./repetitive_hero.css";

export default function Locations_hero() {
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid repetitive_hero">
                <div className="row">
                    <div className="col-lg-6 col-md-12 rh_left">
                        <div>
                            <h1>{t("Where to Charge?")} </h1>
                            <h6>{t("Charge franchises are owned and managed by local entrepreneurs that want to make change transportation in their communities.")} </h6>
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