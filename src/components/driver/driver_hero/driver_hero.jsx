import { useTranslation } from "react-i18next";
import Down_butt from "../../general/down_butt/down_butt";
import "../../locations/locations_hero/repetitive_hero.css";

export default function Driver_hero() {
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid repetitive_hero">
                <div className="row">
                    <div className="col-lg-6 col-md-12 rh_left">
                        <div className="taxi_hero_h1">
                            <h1>{t("Drive a Taxi with Charge")} </h1>
                            <h6>{t("Taxi drivers in Latvia with an operation-, or work permit can now sign up to drive with Hopp using the Driver app. Download the Hopp Driver app by clicking the button here below.")} </h6>
                            <div>
                                <Down_butt />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 rh_right">
                        <div>
                            <img src="/slider/slider5.jpg" alt="ss" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}