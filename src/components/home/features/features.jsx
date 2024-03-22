import { useTranslation } from "react-i18next";
import "./features.css"

function Features(){
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid features_main">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 features_left">
                        <div>
                            <img src="/features.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 features_right">
                        <section>
                            <h1>{t("Elevate Your Urban Mobility")}</h1>
                            <ul>
                                <li>
                                    <span>{t("Eco-Friendly Rides: ")}</span>
                                    {t("Ride green with CHARGE. Our electric scooters are designed to reduce carbon footprints, making your daily commutes not just faster, but also kinder to our planet.")}
                                </li>
                                <li>
                                    <span>{t("Seamless Connectivity: ")}</span>
                                    {t("With the CHARGE app, find, unlock, and ride e-scooters with ease. Real-time availability and GPS tracking make it simple to locate a scooter near you, whenever you need it.")}
                                </li>
                                <li>
                                    <span>{t("Affordable & Accessible: ")}</span>
                                    {t("Enjoy competitive pricing with no hidden fees. CHARGE offers an economical way to navigate the city, with flexible plans that cater to everyone from daily commuters to spontaneous adventurers.")}
                                </li>
                            </ul> 
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;