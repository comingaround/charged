import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Down_butt from "../../general/down_butt/down_butt";
import "./home_safety.css";

function Home_safety() {
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid home_safety_main">
                <div className="row">
                    <div className="col-lg-6 col-md-12 hs_left">
                        <div>
                            <img src="/features.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 hs_right">
                        <div>
                            <h1>{t("Riding Safely with CHARGE")} </h1>
                            <h3>{t("Your safety is our top priority. CHARGE's e-scooters are equipped with the latest safety features and are regularly maintained for a safe ride. We encourage all riders to wear helmets, follow traffic laws, and ride with caution.")} </h3>
                            <div>
                                <Link to="/safety">Read more &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid home_safety_sub">
                <div className="row">
                    <div className="col-md-6 hs_sub_left">
                        <h1>
                            &#11044; {t("Charge makes urban travel more green and convenient. Try it out.")}
                        </h1>
                    </div>
                    <div className="col-md-6 hs_sub_right">
                        <div>
                            <div>
                                <Down_butt />
                            </div>
                            <p>
                                {t("Download the app and start riding today")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home_safety;