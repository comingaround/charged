import { useTranslation } from "react-i18next";
import "./features_two.css";

function Features_two() {
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid features_two">
                <div className="row">
                    <div className="col-md-6 features_two_left">
                        <div>
                        <section>
                            <h6>{t("Total CO2 saved")}</h6>
                            <h1>1,781,036 kg</h1>
                        </section>
                        <section>
                            <h6>{t("Total distance traveled")}</h6>
                            <h1>13,995,841 km</h1>
                        </section>
                        </div>
                    </div>
                    <div className="col-md-6 features_two_right">
                        <h2>
                            Hopp around the neighbourhood and reduce <br /> your carbon footprint.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features_two;